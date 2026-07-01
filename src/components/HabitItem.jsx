import Button from "./Button";

function HabitItem(props) {
  return (
    <div>
      <span>{props.name}</span> - <span>{props.time}</span>
      <Button text="今日やった" />
    </div>
  );
}

export default HabitItem;