/**
 * File: src/App.jsx
 * Purpose: Client-side routing with a top-level layout (no CSS).
 * Author: Alex Kachur
 * Date: 2025-09-29
 */
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SiteLayout from "./components/SiteLayout/SiteLayout.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import ResumeAnalyze from "./pages/ResumeAnalyze/ResumeAnalyze.jsx";
import AnalyzeResult from "./pages/AnalyzeResult/AnalyzeResult.jsx";
import Subscriptions from "./pages/Subscriptions/Subscriptions.jsx";
import Billing from "./pages/Billing/Billing.jsx";
import JobPostings from "./pages/JobPostings/JobPostings.jsx";
import Notifications from "./pages/Notifications/Notifications.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

// Router tree: layout + nested children
const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },

      // Auth
      { path: "auth/login", element: <Login /> },
      { path: "auth/register", element: <Register /> },

      // Private hub (wrap with guard)
      {
        path: "app",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },

      // Resume analysis flow
      { path: "analysis", element: <ResumeAnalyze /> },
      { path: "analysis/result", element: <AnalyzeResult /> },

      // Plans + Billing
      { path: "subscriptions", element: <Subscriptions /> },
      { path: "billing", element: <Billing /> },

      // Jobs / Notifications / Profile
      { path: "jobs", element: <JobPostings /> },
      { path: "notifications", element: <Notifications /> },
      { path: "profile", element: <Profile /> },

      // 404
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}