import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Container, Navigation, Loader } from "./";

const Home = lazy(() => import("../pages/HomePage"));
const Users = lazy(() => import("../pages/UsersPage"));
const EditUser = lazy(() => import("../pages/EditUserPage"));

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="edit/:userId" element={<EditUser />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
      </Container>
    </>
  );
};

export default App;
