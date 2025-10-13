import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../main';
import { Card, Row, Col } from 'react-bootstrap';

const BrandBar = observer(() => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('Context must be used within a ContextProvider');
  }

  const { device } = context;

  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Col
          key={brand.id}
          md="auto"
        >
          <Card
            className="p-3"
            style={{ cursor: 'pointer' }}
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand?.id ? 'danger' : 'light'}
          >
            {brand.name}
          </Card>
        </Col>
      ))}
    </Row>
  );
});

export default BrandBar;
