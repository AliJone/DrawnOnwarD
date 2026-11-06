import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-paper px-4">
      <div className="text-center">
        <h1 className="display-heading text-7xl text-brand-navy">404</h1>
        <p className="mt-4 text-xl text-brand-muted">That page doesn't exist.</p>
        <a href="/" className="btn btn-primary mt-8">
          Go to the homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
