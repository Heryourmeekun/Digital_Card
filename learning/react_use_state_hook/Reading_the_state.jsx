import React, { useState } from "react";
import { SubHeading } from "../../component/sub_component/headings";

export default function Reading_the_state() {
  let user = {
    name: "Maryam",
    age: 19,
    complexion: "Fair",
    gender: "Female",
  };
  const [info, setName] = useState(user);
  return (
    <div>
      <SubHeading text="Reading_the_state" />
      <h1>
        <b>{info.name}</b> is a <b>{info.age}</b> years old{" "}
        <b>{info.complexion}</b> <b>{info.gender}</b>
      </h1>
    </div>
  );
}
