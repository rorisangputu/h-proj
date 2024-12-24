import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppContextProvider } from "./contexts/AppContext.tsx";
import { SearchContextProvider } from "./contexts/searchContext.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppContextProvider>
          <SearchContextProvider>
            <App />
          </SearchContextProvider>
        </AppContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
