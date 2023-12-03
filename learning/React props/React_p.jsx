import React from "react";

export const React_pItem = (props) => {
  return (
    <>
      <div className="grid place-content-center bg-slate-200 mt-1  p-3 rounded-lg ">
        <h1 className="text-3xl font-bold">{props.text}</h1>
      </div>
    </>
  );
};

export default function React_p() {
 return <>
    <React_pItem text="React prop item" />
    <React_pItem text="React item prop" />
    <React_pItem text="item react prop" />
    <React_pItem text="iem rop yeah" />
    <React_pItem text="Is this life" />
    <React_pItem text="Well yeah, life is vinity " />
    <React_pItem text="Upon Vinity" />
  </>;
}
