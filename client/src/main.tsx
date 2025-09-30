import { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import UserStore from './store/UserStore.ts';

interface IContext {
  user: UserStore;
}

export const Context = createContext<IContext | null>(null);

createRoot(document.getElementById('root')!).render(
  <Context.Provider
    value={{
      user: new UserStore(),
    }}
  >
    <App />
  </Context.Provider>
);
