import { useRoutes } from "react-router-dom";

import { routes } from "./routes/routes";

function App() {
  const routesObjects = routes.map((route) => ({
    path: route.path,
    element: route.component,
  }));
  let preparedRoutes = useRoutes(routesObjects);

  return preparedRoutes;
}

export default App;
