import React from "react";
import { SubHeading } from "../../component/sub_component/headings";

export function ScoredGoal() {
  return (
    <>
      <h3>Scored the Goal</h3>
    </>
  );
}

export function MissedGoal() {
  return (
    <>
      <h3>Missed the Goal</h3>
    </>
  );
}

export function Goal({ isGoall }) {
  const isGoal = isGoall;
  return <>{isGoal ? <ScoredGoal /> : <MissedGoal />}</>;
}
export default function Tenary_operators() {
  return (
    <>
      <SubHeading text="React Ternary Operator" />
      <Goal isGoal={true} />
    </>
  );
}
