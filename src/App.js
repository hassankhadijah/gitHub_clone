import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Repositories";
import Details_Repositories from "./pages/Details_Repositories";
import Repositories from "./pages/Repositories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>
  },
  {
    path:'repositories',
    element: <Repositories/>
  },
  {
  path: '/repositories/:repoId',
  element:<Details_Repositories/>
  },
]

)

function App() {
  return (
    <RouterProvider router={router} />

  );
}
export default App;
