import { createBrowserRouter } from "react-router-dom";
import 'animate.css';
import HomeLayout from "../layouts/HomeLayout";
import AdventureCards from "../components/adventures/AdventureCards";
import ErrorPage from "../components/ErrorPage";
import PageTitle from "../components/PageTitle";
import TipsLayout from "../layouts/TipsLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/login/login";


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
            <h2>Register</h2>
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