import React from "react";
import { SubHeading } from "../../component/sub_component/headings";

export const EventHandling1 = () => {
  const kickball = (b) => {
    confirm(b);
  };

  return (
    <>
      <SubHeading text="Passing Event Argument" />
      <button onClick={() => kickball("Ball Kicked")}>KIck the ball</button>
    </>
  );
};

export const EventHandling2 = () => {
  const shoot = (x, y) => {
    alert(x + ":" + y.type + "function trigered");
  };
  return (
    <>
      <SubHeading text="React Event object" />
      <button onDoubleClick={(ev) => shoot("Goal! ", ev)}>
        dbclick to shoot
      </button>
    </>
  );
};

export default function Event_handle() {
  const shoot = () => {
    confirm("Ball shooted");
  };
  return (
    <>
      <SubHeading text="React Event " />
      <button onClick={shoot}>Shoot</button>
      <EventHandling1 />
      <EventHandling2 />
    </>
  );
}
