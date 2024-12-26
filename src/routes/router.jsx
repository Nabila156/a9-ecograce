import { createBrowserRouter } from "react-router-dom";
import 'animate.css';
import HomeLayout from "../layouts/HomeLayout";
import AdventureCards from "../components/adventures/AdventureCards";
import ErrorPage from "../components/ErrorPage";
import TipsLayout from "../layouts/TipsLayout";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../components/register/Register";
import Login from "../components/login/login";
import CampaignsLayout from "../layouts/CampaignsLayout";
import AdventureDetailsLayout from "../layouts/AdventureDetailsLayout";
import PrivateRoute from "./PrivateRoute";
import 'aos/dist/aos.css';
import AOS from 'aos';
import MyProfile from "../components/profile/MyProfile";
import UpdateProfile from "../components/profile/updateProfile";
import ForgotPassword from "../components/login/ForgotPassword";


AOS.init();


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
    element: <TipsLayout></TipsLayout>,
    loader: async () => {
      const res = await fetch('/tips.json');
      const data = await res.json();
      return data;
    }
  },
  {
    path: "/campaigns",
    element: <CampaignsLayout></CampaignsLayout>,
    loader: async () => {
      const res = await fetch('/campaigns.json');
      const data = await res.json();
      return data;
    }
  },
  {
    path: "/my-profile",
    element:
      <PrivateRoute>
        <MyProfile></MyProfile>
      </PrivateRoute>
  },
  {
    path: "/update-profile",
    element: <UpdateProfile></UpdateProfile>
  },
  {
    path: "/place/:id",
    element:
      <PrivateRoute>
        <AdventureDetailsLayout></AdventureDetailsLayout>
      </PrivateRoute>,
    loader: async ({ params }) => {
      const res = await fetch('/places.json');
      const data = await res.json();
      return data.find(place => parseInt(place.id) === parseInt(params.id)) || null;
    }

  },
  {
    path: "/forgot-password",
    element: <ForgotPassword></ForgotPassword>
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