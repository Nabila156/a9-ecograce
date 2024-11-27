import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AdventureCards from "../components/adventures/AdventureCards";
import ErrorPage from "../components/ErrorPage";
import 'animate.css';
import PageTitle from "../components/PageTitle";
import TipsLayout from "../layouts/TipsLayout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
          path: "",
          element:  <>
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
          loader: async ({params})=> {
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
          <PageTitle title="EcoGrace | Travel Tips"></PageTitle>
          <TipsLayout></TipsLayout>
        </>
       )
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;