import "./App.css";
import rumit_icon from "./assets/rumit-icon.svg";
import radial_bg from "./assets/radial-bg.png";
import { Button, Layout, Menu } from "./rumit";
import { DesignToken } from "./tokens/base-token";
import ThemeProvider from "./utils/theme-provider";

function App() {
  const token: DesignToken = {
    token: {
      fontSize: 14,
    },
  };

  return (
    <ThemeProvider token={token}>
      <Layout
        style={{
          backgroundImage: `url(${radial_bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
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
                  },
                  {
                    label: "Components",
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
          <div
            style={{
              textAlign: "center",
              height: 500,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <br />
              <img src={rumit_icon} alt="rumit-icon" width={150} />
              <div style={{ fontSize: 48, fontWeight: 800 }}>
                Premium & Enterprise
                <br />
                UI Components for React.
                <br />
              </div>
              <div style={{ marginTop: 20, color: "#8e8e8e" }}>
                <span style={{ fontSize: 16, fontWeight: 400 }}>
                  Made with love by Rumit. Imagine that you can create your own
                  design system,
                  <br /> or just use the one that we have created for you.
                  <br />
                </span>
                <br />
              </div>
              <Button type="primary" size="large">
                Get Started
              </Button>
            </div>
          </div>
        </Layout.Content>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
