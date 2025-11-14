import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';

const AppRouter = observer(() => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('Context must be used within a ContextProvider');
  }

  const { user } = context;

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={<Component />}
          />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={<Component />}
        />
      ))}
      <Route
        path="*"
        element={<Navigate to={SHOP_ROUTE} />}
      />
    </Routes>
  );
});

export default AppRouter;
