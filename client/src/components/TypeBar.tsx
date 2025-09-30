import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';

const TypeBar = observer(() => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('Context must be used within a ContextProvider');
  }

  const { device } = context;

  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item key={type.id}>{type.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
