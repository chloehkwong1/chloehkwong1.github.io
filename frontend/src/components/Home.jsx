import React, { useState, useEffect } from "react";

function Home() {
  const [moodEntry, setMoodEntry] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/moodtracker/")
      .then((res) => res.json())
      .then((data) => setMoodEntry(data));
  }, []);

  const formatDate = (entryDate) => {
    var dateToFormat = new Date(entryDate)
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    var formattedDate = dateToFormat.toLocaleDateString("default", options);
    return formattedDate;
  }

  const formatTime = (entryTime) => {
    const hourOnly = entryTime.slice(0, 2)
    if (hourOnly >= 12)
      return `${hourOnly-12}pm`
    return `${hourOnly[1]}am`;
  }


  const renderMoodEntries = () =>
    moodEntry.map((item, index) => (
      <ul key={`mood-entry-list-item-${index}`}>
        <div>
          <h1>
            On {formatDate(item.date)} at {formatTime(item.time)}, you felt:
            <div>{item.mood}</div>
          </h1>
          <span>{item.mood_influences && <div>The reason you gave was: { item.mood_influences}</div>} </span>
          <br />
          <br />
          <br />
        </div>
      </ul>
    ));

  return (
    <div className="App">
      <div>{renderMoodEntries()}</div>
    </div>
  );
}

export default Home;
