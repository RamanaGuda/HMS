import React, { useState } from 'react';
import axios from 'axios';
import {apiURI} from '../apiURL'
export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    place: 'Nellore',
    subject: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend endpoint for saving appointments
      const response = await axios.post(`${apiURI}/appointment`, formData);

      // Handle the response (e.g., show a success message)
      console.log('Appointment saved successfully:', response.data);
      setFormData(({
        firstName: '',
        lastName: '',
        place: 'Nellore',
        subject: '',
      }));
      alert( response.data.message)

      // You may want to perform additional actions after a successful appointment submission
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Appointment submission failed:', error.response.data);
      alert( error.response.data.message)
    }
  };

  return (
    <>
      <section className="contact section" id="appointment">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '50px' }}>Appointment</h2>
            <br />
            <p>Do you have a question? Something else? Feel free to contact us now</p>
          </div>
          <div className="row">
            <div className="column">
              <img
                src="https://media.istockphoto.com/photos/sample-of-main-human-organ-picture-id1256939855?k=20&m=1256939855&s=612x612&w=0&h=KhqlnQ6yMxqkdtsa0ONQF2YsHEFQqOzzqbE__FQ_cvE="
                style={{ width: '100%' }}
                alt="Human Organs"
              />
            </div>
            <div className="column">
              <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Your name.."
                />
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Your last name.."
                />
                <label>Place</label>
                <select
                  name="place"
                  value={formData.place}
                  onChange={handleInputChange}
                >
                     <option value="Nellore">Nellore</option>
          <option value="Vijayawada">Vijayawada</option>
          <option value="Ongole">Ongole</option>
          <option value="Kurnool">Kurnool</option>
          <option value="Tirupathi">Tirupathi</option>
          <option value="Tenali">Tenali</option>
          <option value="Kavali">Kavali</option>
          <option value="Vizag">Vizag</option>
          <option value="East Godavari">East Godavari</option>
          <option value="West Godavari">West Godavari</option>
          <option value="Srikakulam">Srikakulam</option>
          <option value="Kadapa">Kadapa</option>
                </select>
                <label>Subject</label>
                <textarea
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Write something.."
                  style={{ height: '170px' }}
                ></textarea>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
