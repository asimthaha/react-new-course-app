import React from "react";
import NewCourseNavbar from "./NewCourseNavbar";

const NewCourseAdd = () => {
  return (
    <div>
      <NewCourseNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Course Title
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Course Duration
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Descritption
                </label>
                <textarea
                  name=""
                  id=""
                  cols="20"
                  rows="10"
                  className="form-control"
                ></textarea>
              </div>
              <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Course Trainer
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Course Fee
                </label>
                <input type="number" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Course Venue
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCourseAdd;
