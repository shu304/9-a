import InputField from "./InputField";
import Button from "./Button";

function HabitForm({ name, desc, setName, setDesc, onAdd }) {
  return (
    <div>
      <h2>習慣追加</h2>

      <InputField
        placeholder="習慣名"
        value={name}
        onChange={setName}
      />

      <InputField
        placeholder="説明"
        value={desc}
        onChange={setDesc}
      />

      <Button onClick={onAdd}>追加</Button>
    </div>
  );
}

export default HabitForm;