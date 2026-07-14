import HabitItem from "./HabitItem";

function HabitList({ habits, onDelete, onToggle }) {
  return (
    <div>
      <h2>習慣一覧</h2>
      <ul>
        {habits.map((h) => (
          <HabitItem
            key={h.id}
            habit={h}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

export default HabitList;
