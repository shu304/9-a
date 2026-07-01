import HabitItem from "./HabitItem";
import Card from "./Card";

function HabitList() {
  const habits = [
    { name: "筋トレ", time: "10分" },
    { name: "読書", time: "30分" },
  ];

  return (
    <Card>
      <h2>習慣一覧</h2>
      {habits.map((habit, index) => (
        <HabitItem
          key={index}
          name={habit.name}
          time={habit.time}
        />
      ))}
    </Card>
  );
}

export default HabitList;