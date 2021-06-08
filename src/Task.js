import React from "react";

export default function Task() {
  return (
    <React.Fragment>
      <div className="container-fluid my-5 text-white ">
        <div className="row">
          <div className="col-sm-6 mx-auto shadow p-3 rounded">
            <h1 className="text-center">TODO</h1>
            <div className="row">
              <div className="col-9">
                <input type="text" className="form-control"placeholder="Add Your TODO Here" />
                </div>
                <div className="col-2">
                  <button className="ui inverted blue small button"><i class="plus icon"></i> ADD</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
