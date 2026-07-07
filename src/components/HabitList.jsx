function HabitList() {

  const handleGet = () => {
    console.log("取得ボタンが押された");
  };

  const handleRecord = () => {
    console.log("記録ボタンが押された");
  };

  return (
    <div>
      <h2>習慣一覧</h2>

      <button onClick={handleGet}>取得</button>

      <h2>記録追加</h2>

      <input type="text" placeholder="habit_id" />
      <input type="date" />
      
      <select>
        <option>やった</option>
        <option>やってない</option>
      </select>

      <button onClick={handleRecord}>記録</button>
    </div>
  );
}

export default HabitList;