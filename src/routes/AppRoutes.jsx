import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import { List } from "../pages/List";
import { ErrorPage } from "../pages/ErrorPage";
import { LoginForm } from '../pages/Login/LoginForm'
import { Form } from "../pages/Form/Form";
import { EmployeeDetails } from "../components/employeeDetails/EmployeeDetails";


export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children:[
            {path: 'employees', element: <List />},
            {path: 'login', element: <LoginForm />},
            {path: 'new', element: <Form />},
            {path: 'employee/:id', element: <EmployeeDetails />}
            
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

