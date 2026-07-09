import {ClerkProvider} from "@clerk/clerk-react";
import {BrowserRouter} from "react-router-dom";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error("Missing Publisher key");
}

export default function ClerkProviderWithRoutes({ children }) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
}