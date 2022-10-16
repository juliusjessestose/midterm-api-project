import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Schedules = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState([]);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVenue(data.venue);
        setSchedule(data.schedules[0]);
      });
  }, []);
  console.log(schedule);
  console.log(venue);
  return (
    <>
      <div className="container">
        <h1 className="card bg-warning text-center mt-4">Mater Dei College {venue.building}</h1>
        ID: {id}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col" className="bg-success text-center">ID</th>
              <th scope="col" className="bg-success text-center">Name</th>
              <th scope="col" className="bg-success text-center">Building</th>
              <th scope="col" className="bg-success text-center">Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{venue.id}</td>
              <td>{venue.name}</td>
              <td>{venue.building}</td>
              <td>{venue.capacity}</td>
            </tr>
          </tbody>
        </table>
        <h1 className="card bg-danger text-center mt-4">Schedules</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col" className="bg-info text-center ">ID</th>
              <th scope="col" className="bg-info text-center ">Course No.</th>
              <th scope="col" className="bg-info text-center ">Description</th>
              <th scope="col" className="bg-info text-center ">Schedule</th>
              <th scope="col" className="bg-info text-center ">Size</th>
              <th scope="col" className="bg-info text-center ">Teacher</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(schedule).map((sched, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{schedule.id}</td>
                    <td>{schedule.course_no}</td>
                    <td>{schedule.description}</td>
                    <td>{schedule.schedule}</td>
                    <td>{schedule.size}</td>
                    <td>{schedule.teacher}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <Link to="/venues" className="btn btn-sm btn-primary mb-5">
          back to venues
        </Link>
      </div>
    </>
  );
};

export default Schedules;