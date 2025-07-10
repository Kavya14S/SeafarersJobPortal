import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Signin from "./components/Signin/Signin";
import SeafarerRegistration from "./components/SeafarerRegistration/SeafarerRegistration";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import LandingPage from "./components/LandingPage/LandingPage";
import JobDetailsPage from "./components/JobDetailsPage/JobDetailsPage";
import BrowseJobsPage from "./components/BrowseJobsPage/BrowseJobsPage";
import ContactPage from "./components/ContactPage/ContactPage";
import Nav from "./components/Nav/Nav";
import ApplyPage from "./components/Applypage/ApplyPage";
import RemoteTrainingPage from "./components/RemoteTrainingPage/RemoteTrainingPage";
const AppLayout = () => {
    return (
        <>
        <main className="pt-12">
            <Nav />
            <Outlet />
        </main>
        
        </>
    )
}
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage />
            },
            {
                path: "/SeafarerRegistration",
                element: <SeafarerRegistration />
            },
            {
                path: "/results",
                element: <ResultsPage />
            },
            {
                path: "/Signin",
                element: <Signin />
            },
            {
                path: "/jobs/:id",
                element: <JobDetailsPage />
            },
            {
                path: "/BrowseJobsPage",
                element: <BrowseJobsPage />
            },
            {
                path: "/ContactPage",
                element: <ContactPage />
            },
            {
                path: "/jobs/:id/apply",
                element: <ApplyPage />
            },
            {
                path: "/RemoteTrainingPage",
                element: <RemoteTrainingPage />
            }
           
        ]
    }
]);

const root = createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router} />);