import { SubHeading } from "../../component/sub_component/headings";

export function ScoredGoal() {
  return (
    <>
      <h3>Scored Goal</h3>
    </>
  );
}

export function MissedGoal() {
  return (
    <>
      <h3>Missed Goal</h3>
    </>
  );
}
export function Goal({ isGoall }) {
  const isGoal = isGoall;
  if (isGoal) {
    return <ScoredGoal />;
  } else {
    return <MissedGoal />;
  }
}
export default function React_ifelse_staement() {
  return (
    <>
      <SubHeading text="React If Else Conditional Statement" />
      <Goal isGoall={true} />
    </>
  );
}
