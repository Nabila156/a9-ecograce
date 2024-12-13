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
        element: <>
          (
          <PageTitle title="EcoGrace | Home"></PageTitle>
          <AdventureCards></AdventureCards>
          )

        </>,
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
    element: (
      <>
        <PageTitle title="EcoGrace | Eco Travel Tips"></PageTitle>
        <TipsLayout></TipsLayout>
      </>
    )
  },
  {
    path: "/campaigns",
    element: (
      <>
        <PageTitle title="EcoGrace | Campaigns"></PageTitle>
        <CampaignsLayout></CampaignsLayout>
      </>
    )
  },
  {
    path: "/place/:id",
    element:
      <>
        <PageTitle title="EcoGrace | Details"></PageTitle>
        <PrivateRoute>
          <AdventureDetailsLayout></AdventureDetailsLayout>
        </PrivateRoute>
      </>,
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
        element: (
          <>
            <PageTitle title="EcoGrace | Login"></PageTitle>
            <Login></Login>
          </>
        )
      },
      {
        path: "/auth/register",
        element: (
          <>
            <PageTitle title="EcoGrace | Register"></PageTitle>
            <Register></Register>
          </>
        )
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;