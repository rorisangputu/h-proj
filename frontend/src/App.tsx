import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Home Page</p>
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <p>Search Page</p>
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
