
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Table,
  Spinner,
  Alert,
  Badge,
  Button,
  Form,
  InputGroup,
  Modal,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import {
  FaUsers,
  FaSearch,
  FaSyncAlt,
  FaEdit,
  FaUserShield,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext.jsx";
import "./UserList.css";

const API_URL = "https://ambedkar-backend.onrender.com/api";

const getUserInfo = () => {
  try {
    return JSON.parse(localStorage.getItem("userInfo") || "null");
  } catch {
    return null;
  }
};

const getAuthToken = () => {
  const userInfo = getUserInfo();

  return (
    userInfo?.token ||
    localStorage.getItem("token") ||
    ""
  );
};

const UsersList = () => {
  const { user: authUser } = useAuth();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [search, setSearch] = useState("");

  const [showEditModal, setShowEditModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editError, setEditError] = useState("");

  const userInfo = getUserInfo();

  const currentUserRole =
    authUser?.role ||
    userInfo?.role ||
    userInfo?.user?.role;

  const isAdmin = currentUserRole === "admin";

  const [editForm, setEditForm] = useState({
    _id: "",
    name: "",
    email: "",
    role: "user",
    isEmailVerified: false,
  });

  // =====================================
  // FETCH USERS - ALL LOGGED-IN USERS
  // =====================================
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    const token = getAuthToken();

    if (!token) {
      setUsers([]);
      setError("Login token नहीं मिला। कृपया Logout करके दोबारा Login करें।");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${API_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseUsers = Array.isArray(response.data)
        ? response.data
        : Array.isArray(response.data?.users)
        ? response.data.users
        : [];

      setUsers(responseUsers);
    } catch (err) {
      const status = err.response?.status;

      setUsers([]);

      if (status === 401) {
        setError(
          "आपका Login session समाप्त हो गया है। कृपया Logout करके दोबारा Login करें।"
        );
      } else if (status === 403) {
        setError(
          "आपको Users List देखने की अनुमति नहीं है। Backend के GET /api/users route की जाँच करें।"
        );
      } else {
        setError(
          err.response?.data?.message ||
            "Users लोड नहीं हो सके। Backend Server और API URL जाँचें।"
        );
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // =====================================
  // SEARCH
  // =====================================
  const filteredUsers = users.filter((item) => {
    const term = search.trim().toLowerCase();

    if (!term) return true;

    return (
      item.name?.toLowerCase().includes(term) ||
      item.email?.toLowerCase().includes(term) ||
      item.role?.toLowerCase().includes(term)
    );
  });

  // =====================================
  // DATE FORMAT
  // =====================================
  const formatDate = (date) => {
    if (!date) return "—";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) return "—";

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // =====================================
  // OPEN EDIT MODAL - ADMIN ONLY
  // =====================================
  const handleEdit = (item) => {
    if (!isAdmin) {
      setError("केवल Admin User की जानकारी बदल सकता है।");
      return;
    }

    setEditError("");
    setSuccess("");
    setError("");

    setEditForm({
      _id: item._id,
      name: item.name || "",
      email: item.email || "",
      role: item.role || "user",
      isEmailVerified: Boolean(item.isEmailVerified),
    });

    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    if (saving) return;

    setShowEditModal(false);
    setEditError("");
  };

  // =====================================
  // UPDATE USER - ADMIN ONLY
  // =====================================
  const handleUpdateUser = async (e) => {
    e.preventDefault();

    setEditError("");
    setSuccess("");

    if (!isAdmin) {
      setEditError("केवल Admin User की जानकारी बदल सकता है।");
      return;
    }

    const token = getAuthToken();

    if (!token) {
      setEditError("Login token नहीं मिला। कृपया दोबारा Login करें।");
      return;
    }

    const name = editForm.name.trim();
    const email = editForm.email.trim().toLowerCase();

    if (!name || !email) {
      setEditError("नाम और Email दोनों भरना आवश्यक है।");
      return;
    }

    if (!["user", "admin"].includes(editForm.role)) {
      setEditError("कृपया सही Role चुनें।");
      return;
    }

    try {
      setSaving(true);

      const response = await axios.put(
        `${API_URL}/users/${editForm._id}`,
        {
          name,
          email,
          role: editForm.role,
          isEmailVerified: editForm.isEmailVerified,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedUser = response.data?.user;

      if (updatedUser?._id) {
        setUsers((previousUsers) =>
          previousUsers.map((item) =>
            item._id === updatedUser._id
              ? { ...item, ...updatedUser }
              : item
          )
        );
      } else {
        await fetchUsers();
      }

      setShowEditModal(false);

      setSuccess(
        response.data?.message ||
          "User सफलतापूर्वक Update हो गया।"
      );
    } catch (err) {
      const status = err.response?.status;

      if (status === 401) {
        setEditError("Login session समाप्त हो गया है। दोबारा Login करें।");
      } else if (status === 403) {
        setEditError("केवल Admin User को Update कर सकता है।");
      } else {
        setEditError(
          err.response?.data?.message ||
            "User Update नहीं हुआ। कृपया दोबारा प्रयास करें।"
        );
      }
    } finally {
      setSaving(false);
    }
  };

  const originalEmail = (
    users.find((item) => item._id === editForm._id)?.email || ""
  )
    .trim()
    .toLowerCase();

  const currentEmail = editForm.email.trim().toLowerCase();
  const emailChanged = currentEmail !== originalEmail;

  // =====================================
  // UI
  // =====================================
  return (
    <Container fluid className="users-page py-4 px-3 px-md-4">
      {/* HEADER */}
      <div className="users-header d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h2 className="fw-bold mb-1">
            <FaUsers className="me-2" />
            Users Management
          </h2>

          <p className="text-muted mb-0">
            Registered users की जानकारी और प्रबंधन
          </p>

          <Badge bg={isAdmin ? "primary" : "secondary"} className="mt-2">
            {isAdmin ? "Admin Access" : "View Only"}
          </Badge>
        </div>

        <Button
          variant="primary"
          onClick={fetchUsers}
          disabled={loading || saving}
        >
          <FaSyncAlt className="me-2" />
          {loading ? "Loading..." : "Refresh"}
        </Button>
      </div>

      {/* STATISTICS */}
      <Row className="g-3 mb-4">
        <Col xs={12} sm={6} lg={4}>
          <Card className="users-stat-card h-100 border-0 shadow-sm">
            <Card.Body className="d-flex align-items-center gap-3">
              <div className="users-stat-icon">
                <FaUsers />
              </div>

              <div>
                <div className="text-muted small">Total Users</div>
                <h3 className="fw-bold mb-0">{users.length}</h3>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} lg={4}>
          <Card className="users-stat-card h-100 border-0 shadow-sm">
            <Card.Body className="d-flex align-items-center gap-3">
              <div className="users-stat-icon">
                <FaCheckCircle />
              </div>

              <div>
                <div className="text-muted small">Verified Emails</div>
                <h3 className="fw-bold mb-0">
                  {users.filter((item) => item.isEmailVerified).length}
                </h3>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} lg={4}>
          <Card className="users-stat-card h-100 border-0 shadow-sm">
            <Card.Body className="d-flex align-items-center gap-3">
              <div className="users-stat-icon">
                <FaUserShield />
              </div>

              <div>
                <div className="text-muted small">Administrators</div>
                <h3 className="fw-bold mb-0">
                  {users.filter((item) => item.role === "admin").length}
                </h3>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* ALERTS */}
      {error && (
        <Alert
          variant="danger"
          dismissible
          onClose={() => setError("")}
        >
          {error}
        </Alert>
      )}

      {success && (
        <Alert
          variant="success"
          dismissible
          onClose={() => setSuccess("")}
        >
          {success}
        </Alert>
      )}

      {/* USERS TABLE */}
      <div className="users-table-card">
        <div className="users-table-toolbar">
          <h5 className="fw-bold mb-0">
            Registered Users ({filteredUsers.length})
          </h5>

          <InputGroup className="users-search">
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>

            <Form.Control
              type="search"
              placeholder="नाम, Email या Role खोजें..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
            <p className="text-muted mt-3 mb-0">
              Users लोड हो रहे हैं...
            </p>
          </div>
        ) : error && users.length === 0 ? (
          <div className="text-center py-5">
            <FaUsers size={38} className="text-secondary mb-3" />
            <h6>Users लोड नहीं हो सके</h6>
            <p className="text-muted mb-0">
              ऊपर दिया गया error देखें और Refresh करके दोबारा प्रयास करें।
            </p>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="text-center py-5">
            <FaUsers size={38} className="text-secondary mb-3" />
            <h6>कोई User नहीं मिला</h6>
            <p className="text-muted mb-0">
              {search
                ? "दूसरा नाम या Email खोजें।"
                : "अभी कोई User registered नहीं है।"}
            </p>
          </div>
        ) : (
          <div className="table-responsive">
            <Table hover className="users-table align-middle mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>नाम</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Email Verification</th>
                  <th>Registration Date</th>

                  {isAdmin && <th>Action</th>}
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>

                    <td className="fw-semibold">
                      {item.name || "—"}
                    </td>

                    <td className="users-email-cell">
                      {item.email || "—"}
                    </td>

                    <td>
                      <Badge
                        bg={item.role === "admin" ? "primary" : "secondary"}
                      >
                        {item.role || "user"}
                      </Badge>
                    </td>

                    <td>
                      <Badge
                        bg={item.isEmailVerified ? "success" : "warning"}
                        text={item.isEmailVerified ? undefined : "dark"}
                      >
                        {item.isEmailVerified
                          ? "Verified"
                          : "Not Verified"}
                      </Badge>
                    </td>

                    <td>{formatDate(item.createdAt)}</td>

                    {isAdmin && (
                      <td>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => handleEdit(item)}
                          disabled={saving}
                        >
                          <FaEdit className="me-1" />
                          Edit
                        </Button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>

      {/* EDIT USER MODAL - ADMIN ONLY */}
      {isAdmin && (
        <Modal
          show={showEditModal}
          onHide={handleCloseModal}
          centered
          backdrop={saving ? "static" : true}
          keyboard={!saving}
        >
          <Form onSubmit={handleUpdateUser}>
            <Modal.Header closeButton={!saving}>
              <Modal.Title>
                <FaEdit className="me-2" />
                Edit User
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {editError && (
                <Alert variant="danger">{editError}</Alert>
              )}

              <Form.Group className="mb-3">
                <Form.Label>नाम</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="User का नाम"
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm((previous) => ({
                      ...previous,
                      name: e.target.value,
                    }))
                  }
                  required
                  maxLength={100}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  <FaEnvelope className="me-2" />
                  Email
                </Form.Label>

                <Form.Control
                  type="email"
                  placeholder="user@example.com"
                  value={editForm.email}
                  onChange={(e) =>
                    setEditForm((previous) => ({
                      ...previous,
                      email: e.target.value,
                      isEmailVerified:
                        e.target.value.trim().toLowerCase() === originalEmail
                          ? previous.isEmailVerified
                          : false,
                    }))
                  }
                  required
                />

                {emailChanged && (
                  <Form.Text className="text-warning">
                    Email बदलने पर verification फिर से करना होगा।
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>

                <Form.Select
                  value={editForm.role}
                  onChange={(e) =>
                    setEditForm((previous) => ({
                      ...previous,
                      role: e.target.value,
                    }))
                  }
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Form.Select>

                <Form.Text className="text-muted">
                  Admin को Users Management की अनुमति मिल सकती है।
                </Form.Text>
              </Form.Group>

              <Form.Check
                type="checkbox"
                label="Email Verified"
                checked={editForm.isEmailVerified}
                disabled={emailChanged}
                onChange={(e) =>
                  setEditForm((previous) => ({
                    ...previous,
                    isEmailVerified: e.target.checked,
                  }))
                }
              />

              {emailChanged && (
                <small className="text-muted d-block mt-2">
                  नया Email verify होने तक यह विकल्प बंद रहेगा।
                </small>
              )}
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                type="button"
                onClick={handleCloseModal}
                disabled={saving}
              >
                Cancel
              </Button>

              <Button
                variant="primary"
                type="submit"
                disabled={saving}
              >
                {saving ? (
                  <>
                    <Spinner
                      animation="border"
                      size="sm"
                      className="me-2"
                    />
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      )}
    </Container>
  );
};

export default UsersList;
