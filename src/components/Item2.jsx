import React from "react";

function Item2() {

  let work='Research paper';
  let date='21-01-2024';
  return (
    <div className="row kg-row">
      <div class="col-6">{work}</div>
      <div class="col-4">{date}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger kg-button">
          remove
        </button>
      </div>
    </div>
  );
}

export default Item2;
