import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen min-w-screen">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export { Layout };
