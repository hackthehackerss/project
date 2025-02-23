import React from 'react';

const SQLlab = () => {
  return (
    <div>
      <h1>SQL Lab</h1>
      <p>Welcome to the SQL Lab! Here you can practice your SQL skills.</p>
      
      {/* Add your SQL lab content here */}
      <div>
        <h2>Lab Instructions</h2>
        <p>Follow the instructions below to complete the lab:</p>
        <ul>
          <li>Connect to the database using the provided credentials.</li>
          <li>Write SQL queries to retrieve the required data.</li>
          <li>Submit your queries to check if they are correct.</li>
        </ul>
      </div>

      {/* Example SQL Query Input */}
      <div>
        <h2>SQL Query Input</h2>
        <textarea rows="10" cols="50" placeholder="Write your SQL query here..."></textarea>
        <br />
        <button>Submit Query</button>
      </div>
    </div>
  );
};

export default SQLlab;