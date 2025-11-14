import { Col, Container, Image, Row, Card, Button } from 'react-bootstrap';

import bigStar from '../assets/bigstar.svg';

const DevicePage = () => {
  const device = {
    id: 1,
    name: 'Iphone 12 pro',
    price: 25000,
    rating: 5,
    img: 'https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE=',
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={device.img}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                backgroundImage: `url("${bigStar}")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                width: 240,
                height: 240,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>From: {device.price}$</h3>
            <Button variant={'outline-dark'}> Add to cart</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DevicePage;
