/**
 * File: src/components/ProtectedRoute/ProtectedRoute.jsx
 * Purpose: Guard for private routes. Add real auth check later.
 * Author: Alex Kachur
 * Date: 2025-09-29
 * @param {{ children: React.ReactNode }} props
 */
// TODO: read auth state (e.g., from Context/Redux) and redirect if not logged in.
// Example (later):
//   const user = useAuth();
//   if (!user) return <Navigate to="/auth/login" replace />;
export default function ProtectedRoute({ children }) {
    return <>{children}</>;
}