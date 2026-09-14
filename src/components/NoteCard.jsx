import { Card, Button } from 'react-bootstrap';

export default function NoteCard({ note, onBuy }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{note.title}</Card.Title>
        <Card.Text className="flex-grow-1 small text-muted">
          {note.description}
        </Card.Text>
        <h5 className="mb-3">₹{note.price}</h5>
        <Button variant="primary" onClick={() => onBuy(note)}>
          Buy &amp; Download
        </Button>
      </Card.Body>
    </Card>
  );
}
