import React, { memo } from "react";

function Text({ updateState }) {
  return (
    <div>
      <button onClick={updateState}>INC2</button>
    </div>
  );
}

export default memo(Text);
