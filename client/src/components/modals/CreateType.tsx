import { Button, Form, Modal } from 'react-bootstrap';

interface CreateTypeProps {
  show: boolean;
  onHide: () => void;
}

const CreateType: React.FC<CreateTypeProps> = ({ show, onHide }) => {
  return (
    <Modal
      size="lg"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder="Type name of the new type" />
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

export default CreateType;
