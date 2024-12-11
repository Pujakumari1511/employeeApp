import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import { List } from "../pages/List";
import { ErrorPage } from "../pages/ErrorPage";
import LogIn from "../pages/LogIn";
import { Form } from "../pages/Form";


export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children:[
            {path: 'employees', element: <List />},
            {path: 'login', element: <LogIn />},
            {path: 'new', element: <Form />}
            
        ]
    },
],

{
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
},

)

