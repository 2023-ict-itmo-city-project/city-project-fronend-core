import React from "react";
import ReactDOM from "react-dom/client";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import "@mantine/core/styles.layer.css";

import App from "./App.jsx";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ColorSchemeScript defaultColorScheme="auto" />
        <MantineProvider defaultColorScheme="auto" theme={theme}>
            <App />
        </MantineProvider>
    </React.StrictMode>
);
