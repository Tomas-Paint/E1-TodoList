import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Importar Redux
import store from "./redux/store"; // Importar el store

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}> {/* Conectar Redux */}
      <App />
    </Provider>
  </StrictMode>
);