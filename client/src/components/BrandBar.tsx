import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../main';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('Context must be used within a ContextProvider');
  }

  const { device } = context;

  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3"
          style={{ cursor: 'pointer' }}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
