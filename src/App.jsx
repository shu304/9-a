import { useState, useEffect } from "react";

function App() {
  const [habits, setHabits] = useState([]); // DBから取得した習慣一覧
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // 初回表示で DB から取得
  useEffect(() => {
    fetch("api/habits") // ← proxy 経由（先頭に / なし）
      .then((res) => res.json())
      .then((data) => setHabits(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // 新しい習慣を追加
  const addHabit = async () => {
    if (!name.trim()) return;
    const res = await fetch("api/habits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    });
    const newHabit = await res.json();
    setHabits((prev) => [...prev, newHabit]);
    setName("");
    setDescription("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>習慣リスト</h1>
      <ul>
        {habits.map((h) => (
          <li key={h.id}>
            <b>{h.name}</b>：{h.description}
          </li>
        ))}
      </ul>

      <h2>新しい習慣を追加</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="習慣名"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="説明"
      />
      <button onClick={addHabit}>追加</button>
    </div>
  );
}

export default App;
