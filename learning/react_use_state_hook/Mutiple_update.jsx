import React, { useState } from "react";
import { SubHeading } from "../../component/sub_component/headings";

const userInfo = [];

export default function Mutiple_update() {
  const [inputs, setInputs] = useState(userInfo);
  const [showUp, setShowUp] = useState(false);

  const handleChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setShowUp(true);
  };
  return (
    <>
      <SubHeading text="Mutiple field Updates" />
      {/* <h1>
        {showUp &&
          `${inputs.username} is a ${inputs.age} years old ${inputs.complexion} ${inputs.gender}`}
      </h1> */}
      <h1>
        {showUp &&
          inputs.username +
            "is a" +
            inputs.age +
            "years old" +
            inputs.complexion +
            "" +
            inputs.gender}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-300 grid place-content-center gap-2 p-2"
      >
        <input
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <input
          type="text"
          name="age"
          value={inputs.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />
        <input
          type="text"
          name="complexion"
          value={inputs.complexion}
          onChange={handleChange}
          placeholder="your complexion"
        />
        <input
          type="text"
          name="gender"
          value={inputs.gender}
          onChange={handleChange}
          placeholder="your gender"
        />
        <input type="submit" value="update user" />
        <button
          type="reset"
          onClick={() => {
            setShowUp(!showUp);
          }}
        >
          {!showUp ? "show" : "hide"}
        </button>

        <button
          type="reset"
          onClick={() => {
            setInputs("");
            setShowUp(false);
          }}
        >
          clear Input{" "}
        </button>
      </form>
    </>
  );
}
