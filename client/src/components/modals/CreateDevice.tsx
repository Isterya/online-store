import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { Context } from '../../main';

interface CreateDeviceProps {
  show: boolean;
  onHide: () => void;
}

const CreateDevice: React.FC<CreateDeviceProps> = ({ show, onHide }) => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('Context must be used within a ContextProvider');
  }

  const { device } = context;

  const [info, setInfo] = useState<
    { title: string; description: string; number: number }[]
  >([]);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number: number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  return (
    <Modal
      size="lg"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Choose type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            className="mt-3"
            placeholder="Type price of the new device"
            type="number"
          />

          <Form.Control
            className="mt-3"
            type="file"
          />

          <hr />

          <Button
            variant="outline-dark"
            onClick={addInfo}
          >
            Add new property
          </Button>

          {info.map((i) => (
            <Row
              className="mt-4"
              key={i.number}
            >
              <Col md={4}>
                <Form.Control placeholder="Type your property" />
              </Col>
              <Col md={4}>
                <Form.Control placeholder="Type your description" />
              </Col>
              <Col md={4}>
                <Button
                  variant="outline-danger"
                  onClick={() => removeInfo(i.number)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant={'outline-danger'}
          onClick={onHide}
        >
          Close
        </Button>
        <Button
          variant={'outline-success'}
          onClick={onHide}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
