import React from "react";

export interface SpaceProps {
  gap?: number;
  children: React.ReactNode;
}

const Space: React.FC<SpaceProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        gap: props.gap || 10,
      }}
    >
      {props.children}
    </div>
  );
};

export default Space;
