import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card
        style={{ width: 600 }}
        className="p-5"
      >
        <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Enter your email..."
          />
          <Form.Control
            className="mt-3"
            placeholder="Enter your password..."
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Not have an account yet?{' '}
                <NavLink to={REGISTRATION_ROUTE}>Register!</NavLink>
              </div>
            ) : (
              <div>
                Already have an account?{' '}
                <NavLink to={LOGIN_ROUTE}>Login!</NavLink>
              </div>
            )}
            <Button
              variant="outline-success"
              className="mt-3 align-self-end"
            >
              {isLogin ? 'Login' : 'Register'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
