import React, { useState } from "react";

const JudgePanel = () => {
  const [projectId, setProjectId] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ projectId, score });

    // Send judge score to backend
    const response = await fetch("http://localhost:5000/api/judge/submit-score", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ projectId, score }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Score Submitted Successfully!");
    } else {
      alert(data.msg || "Error submitting score");
    }
  };

  return (
    <div>
      <h2>Judge Panel</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Project ID" value={projectId} onChange={(e) => setProjectId(e.target.value)} required />
        <input type="number" placeholder="Score" value={score} onChange={(e) => setScore(e.target.value)} required />
        <button type="submit">Submit Score</button>
      </form>
    </div>
  );
};

export default JudgePanel;
