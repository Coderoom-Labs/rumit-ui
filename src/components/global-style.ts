import { createUseStyles } from "react-jss";

export const globalStyle = createUseStyles({
  "@import":
    "url(https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800&display=swap)",
  "@global": {
    body: {
      fontFamily: "Inter, sans-serif",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      fontWeight: 400,
    },
    button: {
      fontFamily: "Inter, sans-serif",
    },
  },
});
