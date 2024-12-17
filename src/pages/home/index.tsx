import { Button } from "@/rumit";
import rumit_icon from "@/assets/rumit-icon.svg";

export default function HomeIndex() {
  return (
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
            Made with love by Rumit. Imagine that you can create your own design
            system,
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
  );
}
