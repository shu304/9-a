import { useEffect, useState } from "react";
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
  const [habits, setHabits] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const fetchHabits = async () => {
    const res = await fetch("/api/habits");
    const data = await res.json();
    setHabits(data);
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  const addHabit = async () => {
    if (!name) return;

    await fetch("/api/habits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description: desc }),
    });

    setName("");
    setDesc("");
    fetchHabits();
  };

  const deleteHabit = async (id) => {
    await fetch(`/api/habits/${id}`, { method: "DELETE" });
    fetchHabits();
  };

  const toggleHabit = async (id, done) => {
  await fetch(`/api/habits/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ done: !done }),
  });
  fetchHabits();
  };

  return (
    <div style={{ padding: "20px" }}>
      <Header />

      <HabitForm
        name={name}
        desc={desc}
        setName={setName}
        setDesc={setDesc}
        onAdd={addHabit}
      />

      <HabitList
        habits={habits}
        onDelete={deleteHabit}
        onToggle={toggleHabit}
      />
    </div>
  );
}

export default App;