import { MainLayout } from '@/shared/components';
import { withLoading } from '@/shared/hocs/WithLoading';
import { lazy } from 'react';
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const AssetsOverviewPage = lazy(() => import('pages/assets/overview'));
const AddAssetsPage = lazy(() => import('@/pages/assets/add-assets'));
const AssetsPage = lazy(() => import('@/pages/assets/list'));

const AssetsOverview = withLoading(AssetsOverviewPage);
const AddAssets = withLoading(AddAssetsPage);
const Assets = withLoading(AssetsPage);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Navigate to="/assets/overview" />} />
      <Route path="/assets/overview" element={<AssetsOverview />} />
      <Route path="/assets/add-assets" element={<AddAssets />} />
      <Route path="/assets/list" element={<Assets />} />
    </Route>
  )
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
