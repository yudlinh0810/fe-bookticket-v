import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import './index.scss';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </StrictMode>,
);
