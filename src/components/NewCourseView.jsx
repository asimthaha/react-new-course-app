import React, { useEffect, useState } from "react";
import axios from "axios";
import NewCourseNavbar from "./NewCourseNavbar";

const NewCourseView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.get("http://172.22.2.251:4000/api/v1/courses").then((response) => {
      changeData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NewCourseNavbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Trainer</th>
                    <th scope="col">Fees</th>
                    <th scope="col">Venue</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((value, index) => {
                    return (
                      <tr>
                        <th>{value.id}</th>
                        <td>{value.courseTitle}</td>
                        <td>{value.courseDuration}</td>
                        <td>{value.courseTrainer}</td>
                        <td>{value.courseFee}</td>
                        <td>{value.courseVenue}</td>
                        <td>{value.courseDescription}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCourseView;
