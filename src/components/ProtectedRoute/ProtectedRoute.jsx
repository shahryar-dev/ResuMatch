/**
 * @file ProtectedRoute.jsx
 * @author Alex Kachur
 * @since 2025-09-29
 * @purpose Placeholder for route guarding until real auth is wired up.
 * @param {{ children: React.ReactNode }} props
 */
// TODO: read auth state (e.g., from Context/Redux) and redirect if not logged in.
// Example (later):
//   const user = useAuth();
//   if (!user) return <Navigate to="/auth/login" replace />;
export default function ProtectedRoute({ children }) {
    return <>{children}</>;
}
