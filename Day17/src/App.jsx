import React, { useState } from 'react';
import './App.css'; // Import the CSS file

// const App = () => {
//   // const [name, setName] = useState('');
//   // const [email, setEmail] = useState('');
//   // const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.name.length < 2) {
//       alert('Name must be at least 2 characters long.');
//       return;
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       alert('Please enter a valid email address.');
//       return;
//     }
//     setIsSubmitted(true);
//     console.log(e);
//   };
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   return (
//     <div className="app-container">
//       {isSubmitted ? (
//         <section className="success-message">
//           <h2>Thank you, {formData.name}!</h2>
//           <h4>Your email: {formData.email}</h4>
//         </section>
//       ) : (
//         <form onSubmit={handleSubmit} className="form-container">
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               type="text"
//               value={formData.name}
//               name='name'
//               onChange={handleChange}
//               placeholder="Type here...."
//             />
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name='email'
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Type here...."
//             />
//           </div>
//           <button className="submit-button">
//             Submit
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default App;

import P from "papaparse";
import Card from './Card'; // Ensure Card component is properly imported

const App = () => {
  const [profiles, setProfiles] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) {
      alert("Please select a file.");
      return;
    }
    P.parse(file, {
      header: true,
      complete: handleData,
      skipEmptyLines: true, // Skip empty lines in the CSV
    });
  };

  const handleData = (res) => {
    const { data, errors } = res;
    if (errors.length > 0) {
      alert("Error parsing the file!");
      console.error(errors);
    } else if (data.length === 0) {
      alert("The file is empty or invalid.");
    } else {
      setProfiles(data);
    }
  };

  return (
    <div className="app-container">
      <div className="file-upload">
        <input type="file" accept=".csv" onChange={handleFileUpload} />
      </div>
      <div className="profiles-container">
        {profiles.length > 0 ? (
          profiles.map((profile, index) => (
            <Card
              key={index} // Use a unique key for each profile
              name={profile.name || "N/A"}
              email={profile.email || "N/A"}
              githubLink={profile.githubLink || "#"}
            />
          ))
        ) : (
          <p>No profiles to display. Upload a CSV file to see the data.</p>
        )}
      </div>
    </div>
  );
};

export default App;