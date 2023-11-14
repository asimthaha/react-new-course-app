import React, { useState } from "react";
import NewCourseNavbar from "./NewCourseNavbar";

const NewCourseAdd = () => {
  const [inputField, setInputField] = useState({
    courseTitle: "",
    courseDescription: "",
    courseDuration: "",
    courseTrainer: "",
    courseFee: "",
    courseVenue: "",
  });

  const inputHandler = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const readValue = () => {
    console.log(inputField);
  };

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
                <input
                  type="text"
                  className="form-control"
                  name="courseTitle"
                  value={inputField.courseTitle}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Course Duration
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="courseDuration"
                  value={inputField.courseDuration}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Descritption
                </label>
                <textarea
                  id=""
                  cols="20"
                  rows="10"
                  className="form-control"
                  name="courseDescription"
                  value={inputField.courseDescription}
                  onChange={inputHandler}
                ></textarea>
              </div>
              <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Course Trainer
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="courseTrainer"
                  value={inputField.courseTrainer}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Course Fee
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="courseFee"
                  value={inputField.courseFee}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Course Venue
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="courseVenue"
                  value={inputField.courseVenue}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readValue} className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCourseAdd;
