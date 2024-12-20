import { createRoot } from "react-dom/client";
import "./index.css";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Container } from "@mui/material";
import "./firebase/config";

createRoot(document.getElementById("root")).render(
  <Container maxWidth="lg" sx={{ textAlign: "center", marginTop: "50px" }}>
    <RouterProvider router={router} />
  </Container>
);
