import "./App.css";
import rumit_icon from "./assets/rumit-icon.svg";
import radial_bg from "./assets/radial-bg.png";

import { Layout, Menu } from "./rumit";
import { DesignToken } from "./tokens/base-token";
import ThemeProvider from "./utils/theme-provider";
import { RouterProvider } from "react-router-dom";
import MainRoutes from "./pages";

function App() {
  const path = window.location.pathname;

  const token: DesignToken = {
    token: {
      fontSize: 14,
    },
  };

  return (
    <ThemeProvider token={token}>
      <Layout
        style={
          path === "/"
            ? {
                backgroundImage: `url(${radial_bg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }
            : { background: "#f8f8f8" }
        }
      >
        <Layout.Header
          style={{ background: "transparent", boxShadow: "none", border: 0 }}
          left={
            <h2 style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <img
                src={rumit_icon}
                alt="rumit-icon"
                width={42}
                style={{ marginRight: 5 }}
              />
              Rumit UI
            </h2>
          }
          right={
            <>
              <Menu
                items={[
                  {
                    label: "Home",
                    onClick: () => {
                      window.location.href = "/";
                    },
                  },
                  {
                    label: "Components",
                    onClick: () => {
                      console.log("clicked");
                      window.location.href = "/components";
                    },
                  },
                  {
                    label: "Docs",
                  },
                  {
                    label: "Github",
                  },
                ]}
              />
            </>
          }
        />
        <Layout.Content>
          <RouterProvider router={MainRoutes()} />
        </Layout.Content>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
