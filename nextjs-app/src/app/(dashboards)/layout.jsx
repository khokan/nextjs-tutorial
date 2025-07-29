import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-3 border">
          <ul>
            <li>User List</li>
          </ul>
        </div>
        <div className="col-span-9 border">{children}</div>
      </div>
    </div>
  );
};

export default layout;
