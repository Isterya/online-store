import { useContext } from 'react';
import { Context } from '../main';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('Context must be used within a ContextProvider');
  }

  const { user } = context;

  const navigate = useNavigate();

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <NavLink
          to={SHOP_ROUTE}
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Online Store
        </NavLink>
        {user.isAuth ? (
          <Nav
            className="ml-auto"
            style={{ color: 'white' }}
          >
            <Button
              variant={'outline-light'}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Admin Page
            </Button>
            <Button
              variant={'outline-light'}
              onClick={() => navigate(LOGIN_ROUTE)}
              className="ml-4"
            >
              Log out
            </Button>
          </Nav>
        ) : (
          <Nav
            className="ml-auto"
            style={{ color: 'white' }}
          >
            <Button
              variant={'outline-light'}
              onClick={() => user.setIsAuth(true)}
            >
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
