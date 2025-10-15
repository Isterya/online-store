import type { IDevice } from '../store/DeviceStore';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import star from '../assets/star.svg';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }: { device: IDevice }) => {
  const navigate = useNavigate();

  return (
    <Col
      md={3}
      className="mb-3"
      onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}
    >
      <Card
        style={{ width: 150, cursor: 'pointer' }}
        border="light"
      >
        <Image
          width={150}
          height={150}
          src={device.img}
        />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center mt-2">
          <div>Samsung...</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image
              width={18}
              height={18}
              src={star}
            />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
