function HabitItem({ habit, onDelete, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={habit.done || false}
        onChange={() => onToggle(habit.id)}
      />

      <span
        style={{
          textDecoration: habit.done ? "line-through" : "none",
          marginRight: "10px",
        }}
      >
        {habit.name} - {habit.description}
      </span>

      <button onClick={() => onDelete(habit.id)}>
        削除
      </button>
    </li>
  );
}

export default HabitItem;