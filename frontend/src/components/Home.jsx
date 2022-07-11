import React, { useState, useEffect } from "react";

function Home() {
  const [moodEntry, setMoodEntry] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/moodtracker/")
      .then((res) => res.json())
      .then((data) => setMoodEntry(data));
  }, []);

  const formatDate = (entryDate) => {
    var dateToFormat = new Date(entryDate);
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    var formattedDate = dateToFormat.toLocaleDateString("default", options);
    return formattedDate;
  };

  const formatTime = (entryDate, entryTime) => {
    const timeToFormat = new Date(entryDate + "T" + entryTime);
    const formattedTime = timeToFormat.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    if (formattedTime[0] === "0") return formattedTime.slice(1);
    return formattedTime;
  };

  const renderMoodEntries = () =>
    moodEntry.map((item, index) => (
      <ul key={`mood-entry-list-item-${index}`}>
        <div className="note">
          <h1>
            On {formatDate(item.date)} at {formatTime(item.date, item.time)},
            you felt:
            <div>{item.mood}</div>
          </h1>
          <span>
            {item.mood_influences && (
              <div>The reason you gave was: {item.mood_influences}</div>
            )}{" "}
          </span>
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
