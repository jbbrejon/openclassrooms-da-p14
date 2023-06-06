// Import dependencies
import { createBrowserRouter, Outlet } from "react-router-dom";

// Import layouts
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";

// Import pages
import CreateEmployee from "../../pages/CreateEmployee/CreateEmployee";
import EmployeeList from "../../pages/EmployeeList/EmployeeList";
import Error from "../../pages/Error/Error";

// Set standard layout
const Layout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);

// Set error layout
const ErrorLayout = () => (
    <>
        <Header />
        <Error />
        <Footer />
    </>
);

// Router configuration
const ReactRouter = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorLayout />,
        children: [{
            path: "/",
            element: <CreateEmployee />,
        },
        {
            path: "employee-list",
            element: <EmployeeList />,
        },]
    }
]);

export default ReactRouter;