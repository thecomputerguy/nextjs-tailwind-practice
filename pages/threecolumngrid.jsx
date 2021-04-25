import React from "react";

const threecolumngrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
      <div className="col-span-1 lg:col-span-2">1</div>
      <div className="">2</div>
      <div className="">3</div>
    </div>
  );
};

export default threecolumngrid;
