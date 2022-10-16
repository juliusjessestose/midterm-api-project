import React from "react";
import useFetch from "./useFetch";
import {Link} from 'react-router-dom'

const Venues = () => {
  const { data, loading, error } = useFetch(
    "https://sis.materdeicollege.com/api/venues"
  );


  return (
    <>
      <h1 className="card text-center mt-3 bg-warning">
        MDC Venues
      </h1>
      {error && (
        <p className="text-danger text-center">Something wrong from the API</p>
      )}
      {loading && (
        <div className="text-center bg-primary text-white">
          Loading Venues...
        </div>
      )}
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
          <td className="bg-primary text-center text-white">ID</td>
              <td className="bg-primary text-center text-white">Room No./Name</td>
              <td className="bg-primary text-center text-white">Building Name</td>
              <td className="bg-primary text-center text-white">Capacity</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data)?.map((venue, index) => {
            return (
              <tr key={index} className="hover-effect">
                <td>{data[venue].id}</td>
                <td>{data[venue].name}</td>
                <td>{data[venue].building}</td>
                <td className="d-flex justify-content-between  align-items-center">
                  <div>{data[venue].capacity}</div>
                  <Link to={`/venues/${data[venue].id}`} className="btn btn-sm btn-danger mt-1">
                        View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Venues;