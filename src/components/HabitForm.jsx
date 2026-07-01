import InputField from "./InputField";
import Button from "./Button";
import Card from "./Card";

function HabitForm() {
  return (
    <Card>
      <h2>習慣を追加</h2>
      <InputField label="名前" />
      <InputField label="説明" />
      <Button text="追加" />
    </Card>
  );
}

export default HabitForm;