import { MainLayout } from '@/shared/components';
import { withLoading } from '@/shared/hocs/WithLoading';
import { lazy } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const AssetsPage = lazy(() => import('pages/assets'));
const AddAssetsPage = lazy(() => import('pages/add-assets'));

const Assets = withLoading(AssetsPage);
const AddAssets = withLoading(AddAssetsPage);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<main>Home page</main>} />
      <Route path="/assets" element={<Assets />} />
      <Route path="/add-assets" element={<AddAssets />} />
    </Route>
  )
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
