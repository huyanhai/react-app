import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Layout from "./layouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map((item, index) => {
            const { commponents, ...other } = item;
            return (
              <Route
                key={index}
                {...other}
                element={
                  <Suspense fallback="">
                    <item.commponents />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
