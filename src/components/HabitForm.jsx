function HabitForm() {

  const handleAdd = () => {
    console.log("追加ボタン押された");
  };

  return (
    <div>
      <h2>習慣追加</h2>

      <input type="text" placeholder="習慣名" />
      <input type="text" placeholder="説明" />

      <button onClick={handleAdd}>追加</button>
    </div>
  );
}

export default HabitForm;