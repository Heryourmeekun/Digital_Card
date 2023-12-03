import React, { useState } from "react";
import { SubHeading } from "../../component/sub_component/headings";

const user = {
  name: "Maryam",
  age: 19,
  complexion: "Fair",
  gender: "Female",
};
export default function Update() {
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [complexion, setComplexion] = useState(user.complexion);
  const [gender, setGender] = useState(user.gender);
  return (
    <div>
      {/* {info && ( */}
      <h1>
        <b>{name}</b> is a <b>{age}</b> years old
        <b>{complexion}</b> <b>{gender}</b> b
      </h1>
      {/* )} */}
      <SubHeading text="Updating_the_state" />
      <input
        type="text"
        style={{ background: "gainsboro", margin: 10 }}
        value={name}
        // onKeyUp={(ev) => {
        //   setName(ev.target.value);
        // }}
        onChange={(ev) => {
          setName(ev.target.value);
        }}
      />
      <input
        type="text"
        style={{ background: "gainsboro", margin: 10 }}
        value={age}
        // onKeyUp={(ev) => {
        //   setAge(ev.target.value);
        // }}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <input
        type="text"
        style={{ background: "gainsboro", margin: 10 }}
        value={complexion}
        // onKeyUp={(ev) => {
        //   setComplexion(ev.target.value);
        // }}
        onChange={(e) => {
          setComplexion(e.target.value);
        }}
      />
      <input
        type="text"
        style={{ background: "gainsboro", margin: 10 }}
        value={gender}
        // onKeyUp={(ev) => {
        //   setGender(ev.target.value);
        // }}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      />
    </div>
  );
}
