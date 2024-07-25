import { Route, Routes } from 'react-router-dom';

import { ROUTES } from './routes';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" key="not-found" element={<h1>Not found!</h1>} />
      {Object.values(ROUTES).map((route) => (
        <Route key={route.path()} path={route.path()} element={route.page()} />
      ))}
    </Routes>
  );
}
