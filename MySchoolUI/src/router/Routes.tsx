import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import DepartmentForm from "../components/departments/DepartmentForm.tsx";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
        children: [
            {path: 'createDepartment', element: <DepartmentForm key='create' />},
            {path: 'editDepartment/:id', element: <DepartmentForm key='edit' />}
        ]
    }
]

export const router = createBrowserRouter(routes)