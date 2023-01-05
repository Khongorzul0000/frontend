import { useState} from "react";
export const Add = () =>{
     const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const add = () => {
    if (!value) return;
    const newTask = { text: value, isCompleted: false };
    setTasks([...tasks, newTask]);
  };
  const remove = (index) => {
    console.log("remove");
    
    const newTasks = tasks.filter((_, i) => {
      if (i === index) return false;
      return true;
    });
    setTasks(newTasks);
  };
  const handleCheck = (index) => {
    const tasksClone = [...tasks];
    tasksClone[index].isCompleted = !tasksClone[index].isCompleted;
    setTasks(tasksClone);
    console.log(tasksClone)
  };
    return(
        <>
        <div className="bg-posi">
      <div className="bg">
        <div className="todo-input">
          <p className="todo">ToDo-List</p>
          <div className="input-btn">
            <input
              className="input"
              placeholder="add todo..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></input>
            <button className="btn" onClick={add}>
              add
            </button>
            {tasks.map((task, index) => {
              return (
                <div className="space">
                  <div className="border">
                    <div className="posi-of-todo">
                      <input
                        type="checkbox"
                        onClick={() => handleCheck(index)}
                      ></input>
                      <div
                        className="text"
                        style={{
                          textDecorationLine: task.isCompleted
                            ? "line-through"
                            : undefined,
                        }}
                      >
                        {task.text}
                      </div>
                      <button className="dlt-btn" onClick={() => remove(index)}>
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
        </>
    )
}