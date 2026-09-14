


import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import VerifyOTP from "./components/VerifyOTP.jsx";

import ActivistPage from "./components/ActivistsPage.jsx";
import About from "./components/About.jsx";
import Ambedkar from "./components/AmbedkarPage.jsx";
import Mahapurush from "./components/Mahapurush.jsx";

import Gallery from "./components/Gallery.jsx";
import NotesList from "./components/NotesList.jsx";

import UgaaiList from "./components/UgaaiList.jsx";
import UgaaiUpload from "./components/UgaaiUpload.jsx";
import ImageUpload from "./components/ImageUpload.jsx";

import PrivateRoute from "./components/PrivateRoute.jsx";
import AdminRoute from "./components/AdminRoute.jsx";

import NotFound from "./components/NotFound.jsx";
import AmbedkarParkHome from "./components/AmbedkarParkHome.jsx";
import Committee from "./components/Committee.jsx";
import Karyakram from "./components/Karyakram.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <Routes>

      {/* =========================
          LOGIN / REGISTER / OTP
      ========================= */}

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route path="/verify-otp" element={<VerifyOTP />} />


      {/* =========================
          COMMON WEBSITE LAYOUT
      ========================= */}

      <Route path="/" element={<LandingPage />}>

        {/* HOME */}
        <Route
          index
          element={<AmbedkarParkHome />}
        />

        {/* COMMON PAGES */}

        <Route
          path="activistpage"
          element={<ActivistPage />}
        />

        <Route
          path="about"
          element={<About />}
        />

        <Route
          path="ambedkar"
          element={<Ambedkar />}
        />

        <Route
          path="mahapurush"
          element={<Mahapurush />}
        />

        <Route
          path="gallery"
          element={<Gallery />}
        />

        <Route
          path="notes"
          element={<NotesList />}
        />

        <Route
          path="committee"
          element={<Committee />}
        />

        <Route
          path="events"
          element={<Karyakram />}
        />

        <Route
          path="contact"
          element={<Contact />}
        />


        {/* =========================
            ADMIN PROTECTED PAGES
        ========================= */}

        <Route element={<PrivateRoute />}>

          <Route element={<AdminRoute />}>

            <Route
              path="ugaaiList"
              element={<UgaaiList />}
            />

            <Route
              path="ugaaiUpload"
              element={<UgaaiUpload />}
            />

            <Route
              path="upload"
              element={<ImageUpload />}
            />

          </Route>

        </Route>

      </Route>


      {/* =========================
          404
      ========================= */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}