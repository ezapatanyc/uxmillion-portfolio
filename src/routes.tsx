import type { RouteRecord } from 'vite-react-ssg';
import { lazy, Suspense } from 'react';
import App from './App';

// Lazy load pages for better performance
const Index = lazy(() => import('./pages/Index'));
const Services = lazy(() => import('./pages/Services'));
const Pergolade = lazy(() => import('./pages/projects/Pergolade'));
const RailBuild = lazy(() => import('./pages/projects/RailBuild'));
const CityPups = lazy(() => import('./pages/projects/CityPups'));
const FidemDD = lazy(() => import('./pages/projects/FidemDD'));
const Birder = lazy(() => import('./pages/projects/Birder'));
const LegalGeneral = lazy(() => import('./pages/projects/LegalGeneral'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen bg-background transition-colors duration-300" />
);

const Loadable = (Component: React.ComponentType<any>) => (props: any) => (
  <Suspense fallback={<PageLoader />}>
    <Component {...props} />
  </Suspense>
);

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <App />,
    entry: 'src/App.tsx',
    children: [
      {
        index: true,
        element: <Suspense fallback={<PageLoader />}><Index /></Suspense>,
        entry: 'src/pages/Index.tsx',
      },
      {
        path: 'services',
        element: <Suspense fallback={<PageLoader />}><Services /></Suspense>,
        entry: 'src/pages/Services.tsx',
      },
      {
        path: 'projects/pergolade-blade-pro',
        element: <Suspense fallback={<PageLoader />}><Pergolade /></Suspense>,
      },
      {
        path: 'projects/railbuild',
        element: <Suspense fallback={<PageLoader />}><RailBuild /></Suspense>,
      },
      {
        path: 'projects/citypups-dog-adoption',
        element: <Suspense fallback={<PageLoader />}><CityPups /></Suspense>,
      },
      {
        path: 'projects/fidemdd-website-redesign',
        element: <Suspense fallback={<PageLoader />}><FidemDD /></Suspense>,
      },
      {
        path: 'projects/birder-mobile-app',
        element: <Suspense fallback={<PageLoader />}><Birder /></Suspense>,
      },
      {
        path: 'projects/legal-general-quote-engine',
        element: <Suspense fallback={<PageLoader />}><LegalGeneral /></Suspense>,
      },
      {
        path: '*',
        element: <Suspense fallback={<PageLoader />}><NotFound /></Suspense>,
      },
    ],
  },
];
