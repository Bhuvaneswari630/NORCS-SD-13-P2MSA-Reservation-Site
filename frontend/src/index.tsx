import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { AppContextProvider } from "./contexts/AppContext";
// import { SearchContextProvider } from "./contexts/SearchContext";

// const queryClient = new QueryClient({
//   defualtOptions: {
//     queries: {
//       retry: 0,
//     },
//   },
// });
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  )
}  