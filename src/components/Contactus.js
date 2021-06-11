import { Card, CardDeck } from "react-bootstrap";

export function ContactUs() {
  return (
    <div>
      <div className="m-2">
        <img
          src="https://th.bing.com/th/id/OIP.oME-F8lHSTJ22wY8sUH0wAHaDd?pid=ImgDet&rs=1"
          style={{ backgroundSize: "cover", width: "100vw" }}
        />
      </div>
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://th.bing.com/th/id/OIP.bkdSDekw6hWawZyJLfi4ogHaHa?pid=ImgDet&w=1024&h=1024&rs=1"
          />
          <Card.Body>
            <Card.Title>Alex John</Card.Title>
            <Card.Text>
              Customer Service Department ABC bank of India State Bank Bhavan,
              16th Floor Madam Cama Road, Mumbai 400 021 Tel: 022-22029456 Fax:
              022 22742431
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://justatic.com/profile-images/1517291-1487533528-s.jpg"
          />
          <Card.Body>
            <Card.Title>joe petter</Card.Title>
            <Card.Text>
              Customer Service Department ABC bank of India State Bank Bhavan,
              16th Floor Madam Cama Road, Mumbai 400 021 Tel: 022-22029456 Fax:
              022 22742431
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://th.bing.com/th/id/OIP.gu8bYhyd5SoIOWTd9TupMgHaG2?pid=ImgDet&rs=1"
          />
          <Card.Body>
            <Card.Title>NareshSingh</Card.Title>
            <Card.Text>
              Customer Service Department ABC bank of India State Bank Bhavan,
              16th Floor Madam Cama Road, Mumbai 400 021 Tel: 022-22029456 Fax:
              022 22742431
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}
