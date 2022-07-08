import React, { useState, useEffect } from "react";

function Home() {
  const [moodEntry, setMoodEntry] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/moodtracker/")
      .then((res) => res.json())
      .then((data) => setMoodEntry(data));
  }, []);

  const renderMoodEntries = () =>
    moodEntry.map((item, index) => (
      <ul key={`mood-entry-list-item-${index}`}>
        <div>
          <h1>
            Mood at {item.date} {item.time}
          </h1>
          <h1>Mood is: {item.mood}</h1>
          <span>{item.mood_influences}</span>
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
