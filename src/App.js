import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJob = await response.json();
    setJobs(newJob);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  // console.log(jobs);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { order, title, dates, duties, company } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        {/* Button container */}
        <div className="button-container">
          {jobs.map((items, index) => {
            return (
              <button
                key={items.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {items.company}
              </button>
            );
          })}
        </div>
        <div className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </div>
      </div>
      <button className="btn">More info</button>
    </section>
  );
};

export default App;
