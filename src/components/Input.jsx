import React from "react";
import { FcAddImage } from "react-icons/fc";
import { GrAttachment } from "react-icons/gr";

export const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <GrAttachment />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <FcAddImage />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};
