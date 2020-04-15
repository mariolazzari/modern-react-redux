import React from "react";
import { Link } from "react-router-dom";

const StreamList = () => {
  return (
    <div>
      stream list
      <Link to="/new">Create stream</Link>
    </div>
  );
};

export default StreamList;
