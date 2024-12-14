import { createBrowserRouter } from "react-router-dom";
import 'animate.css';
import HomeLayout from "../layouts/HomeLayout";
import AdventureCards from "../components/adventures/AdventureCards";
import ErrorPage from "../components/ErrorPage";
import PageTitle from "../components/PageTitle";
import TipsLayout from "../layouts/TipsLayout";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../components/register/Register";
import Login from "../components/login/login";
import CampaignsLayout from "../layouts/CampaignsLayout";
import AdventureDetailsLayout from "../layouts/AdventureDetailsLayout";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <AdventureCards></AdventureCards>,
        loader: async () => {
          const res = await fetch('/places.json');
          const data = await res.json();
          return data.slice(0, 6);
        }
      },
      {
        path: "division/:division",
        element: <AdventureCards></AdventureCards>,
        loader: async ({ params }) => {
          const res = await fetch('/places.json');
          const data = await res.json();
          return data.filter(places => places.division === params.division);
        }
      }
    ]
  },
  {
    path: "/tips",
    element: <TipsLayout></TipsLayout>
  },
  {
    path: "/campaigns",
    element: <CampaignsLayout></CampaignsLayout>
  },
  {
    path: "/place/:id",
    element:
        <PrivateRoute>
          <AdventureDetailsLayout></AdventureDetailsLayout>
        </PrivateRoute>,
      loader: async ({params}) => {
        console.log(params.id)
        const res = await fetch('/places.json');
        const data = await res.json();
        return data.find(place => parseInt(place.id) === parseInt(params.id)) || null;
    }

  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;