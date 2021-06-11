import { Carousel } from "react-bootstrap";
import { useHistory } from "react-router";

export function Home() {
  const history = useHistory;
  return (
    <div className="home-bg-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="home-image"
            src="https://th.bing.com/th/id/R6eb0e98b149e03348d3c024a02e70b07?rik=9JwLWHmnP%2bq2Jw&riu=http%3a%2f%2fwww.umassmed.edu%2fglobalassets%2fhuman-resources%2fdocuments%2fimmigration%2fimages%2fbank-logo.jpg&ehk=ZvpJnUBaHhdIk5KG2GTHdOBcFqTqsQiE7HtnWYJ%2bdgo%3d&risl=&pid=ImgRaw"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>ABC Banking</h3>
            <p>welcome to loan Approval Department page</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="home-image"
            src="https://g.foolcdn.com/editorial/images/547502/bank-building.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>ABC Banking</h3>
            <p>welcome to loan Approval Department page.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="home-image"
            src="https://th.bing.com/th/id/Rcdaf0614cc972aecd32ae6c931d02763?rik=Dvak5KxfqqwMVw&riu=http%3a%2f%2fwww.heritageregister.org.za%2fsites%2fdefault%2ffiles%2fsiteimages%2fstandard_bank_rosebank_-_heritage_portal_-_2018_-_1.jpg&ehk=udSkMPfkfPCalRF36TVm54mRbSDfNLLYSiKbTL8%2bGy4%3d&risl=&pid=ImgRaw"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>ABC Banking</h3>
            <p>welcome to loan Approval Department page.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
