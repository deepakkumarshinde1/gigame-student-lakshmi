import React, { forwardRef, memo } from "react";

function Input() {
  return (
    <>
      <input
        className=" p-2 w-60 border-2 border-amber-500 "
        type="text"
        placeholder="Enter Text"
      />
    </>
  );
}

export default memo(forwardRef(Input));
// HOC => higher order component
// memo
