import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './index.css';

export const createRoot = ViteReactSSG(
  { routes, basename: import.meta.env.BASE_URL },
  ({ isClient }) => {
    // Only initialize analytics on the client
    if (isClient && typeof window !== 'undefined') {
      import('./lib/analytics').then(({ initMixpanel }) => {
        initMixpanel();
      });
    }
  },
);
