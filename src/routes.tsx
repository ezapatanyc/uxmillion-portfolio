import type { RouteRecord } from 'vite-react-ssg';
import App from './App';
import Index from './pages/Index';
import Services from './pages/Services';
import Pergolade from './pages/projects/Pergolade';
import RailBuild from './pages/projects/RailBuild';
import CityPups from './pages/projects/CityPups';
import FidemDD from './pages/projects/FidemDD';
import Birder from './pages/projects/Birder';
import NotFound from './pages/NotFound';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <App />,
    entry: 'src/App.tsx',
    children: [
      {
        index: true,
        element: <Index />,
        entry: 'src/pages/Index.tsx',
      },
      {
        path: 'services',
        element: <Services />,
        entry: 'src/pages/Services.tsx',
      },
      {
        path: 'projects/pergolade-blade-pro',
        element: <Pergolade />,
      },
      {
        path: 'projects/railbuild',
        element: <RailBuild />,
      },
      {
        path: 'projects/citypups-dog-adoption',
        element: <CityPups />,
      },
      {
        path: 'projects/fidemdd-website-redesign',
        element: <FidemDD />,
      },
      {
        path: 'projects/birder-mobile-app',
        element: <Birder />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
