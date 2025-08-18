import { Outlet } from "react-router-dom";
import { Modal } from "../Modal/Modal";

function Layout() {
  return (
    <div className="min-h-screen min-w-screen">
      <main>
        <Outlet />
      </main>
      <Modal />
    </div>
  );
}

export { Layout };
