import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AdventureCards from "../components/adventures/AdventureCards";
import ErrorPage from "../components/ErrorPage";

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
          loader: async ({params})=> {
            const res = await fetch('/places.json');
            const data = await res.json();
            return data.filter(places => places.division === params.division);
          }
        }
      ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;