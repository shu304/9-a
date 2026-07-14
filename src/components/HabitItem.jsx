function HabitItem({ habit, onDelete, onToggle }) {
  return (
    <li style={{ marginBottom: "8px" }}>
      <input
        type="checkbox"
        checked={habit.done}
        onChange={() => onToggle(habit.id, habit.done)}
      />
      <span style={{ textDecoration: habit.done ? "line-through" : "none" }}>
        {habit.name}・{habit.description}
      </span>
      <button
        onClick={() => onDelete(habit.id)}
        style={{ marginLeft: "10px" }}
      >
        取り消し
      </button>
    </li>
  );
}

export default HabitItem;
