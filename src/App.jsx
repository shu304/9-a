import { useEffect, useState } from "react";

function App() {
  const [habits, setHabits] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  // 一覧取得
  const fetchHabits = async () => {
    const res = await fetch("/api/habits");
    const data = await res.json();
    setHabits(data);
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  // 追加
  const addHabit = async () => {
    await fetch("/api/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description: desc }),
    });
    setName("");
    setDesc("");
    fetchHabits();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>習慣管理アプリ</h1>

      <h2>習慣追加</h2>
      <input
        placeholder="習慣名"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="説明"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={addHabit}>追加</button>

      <h2>習慣一覧</h2>
      <ul>
        {habits.map((h) => (
          <li key={h.id}>
            {h.name} - {h.description}
          </li>
        ))}
      </ul>

      <h2>記録追加（まだ簡易）</h2>
      <p>※ここは後で作る</p>
    </div>
  );
}

export default App;