import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../main';
import { Row } from 'react-bootstrap';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('Context must be used within a ContextProvider');
  }

  const { device } = context;

  return (
    <Row className="d-flex">
      {device.devices.map((device) => (
        <DeviceItem
          key={device.id}
          device={device}
        />
      ))}
    </Row>
  );
});

export default DeviceList;
