import React from "react";

const Caption = ({ name }) => {
  return (
    <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="d-flex align-items-center border border-2 border-dark p-3 my-3 text-black   rounded">
              <div className="lh-1">
                <h1 className="h5 mb-0 text-black lh-1">{name}</h1>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Caption;