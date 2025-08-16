import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div
      className="
    mx-auto
    lg:w-[1260px]
    md:w-[768px]
    w-[393px]
    "
    >
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export { Layout };
