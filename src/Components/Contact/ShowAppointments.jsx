import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './showappointments.css'
import { apiURI } from '../apiURL';
export const ShowAppointments = () => {

  const [appointments, setAppointments] = useState([]);


  const fetchAppointments = async () => {
    try {
      // Make a GET request to your backend endpoint for getting all appointments
      const response = await axios.get(`${ apiURI }/appointments`);

      // Update the state with the fetched appointments
      setAppointments(response.data);
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Failed to fetch appointments:', error.response.data);
    }
  };

  useEffect(() => {
    // Fetch all appointments when the component mounts
    fetchAppointments();
  }, []);

  return (
    <>
       <div className="appointments-page">
      <div className='heading'>
        <h1>Appointments</h1>
      </div>

      <section className="appointments-table">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Place</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment.firstName}</td>
                <td>{appointment.lastName}</td>
                <td>{appointment.place}</td>
                <td>{appointment.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      </div>
    </>
  );
};
