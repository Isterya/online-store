import { Button, Form, Modal } from 'react-bootstrap';

interface CreateBrandProps {
  show: boolean;
  onHide: () => void;
}

const CreateBrand: React.FC<CreateBrandProps> = ({ show, onHide }) => {
  return (
    <Modal
      size="lg"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new brand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder="Type name of the new brand" />
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

export default CreateBrand;
