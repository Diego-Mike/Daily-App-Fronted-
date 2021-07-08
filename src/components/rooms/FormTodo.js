import React, { useState } from "react";

import {
  FormTasks,
  TheForm,
  FormContain,
  TitleForm,
  ContainInputs,
  Inputs,
  CloseIcon,
  ContainIcon,
  ContainStuff,
  AddIcon,
  MinusIcon,
  Button
} from "./FormTodoStyled";

import { useDispatch } from "react-redux";
import { createTasks } from "../../actions/tasks";

const FormTodo = ({ setShowForm, idRoom, setIdRoom, setAdded }) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  const dispatch = useDispatch();

  const [tasks, setTasks] = useState([
    {
      todo: "",
      complete: false
    }
  ]);
  const handleHideForm = () => {
    setShowForm(false);
    setIdRoom("");
    document.body.style = "overflow: auto";
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      createTasks({
        name: user?.result?.name,
        room: idRoom,
        homework: tasks,
        dayOver: false,
        comment: ""
      })
    );

    setAdded(true);
    setShowForm(false);
    document.body.style = "overflow: auto";

    setTasks([{ todo: "", complete: false }]);
  };

  const handleChange = (index, e) => {
    const valuesTask = [...tasks];
    valuesTask[index][e.target.name] = e.target.value;
    setTasks(valuesTask);
  };

  const handleAdd = () => {
    setTasks([...tasks, { todo: "", complete: false }]);
  };

  const handleLess = index => {
    const lessTasks = [...tasks];
    lessTasks.splice(index, 1);
    setTasks(lessTasks);
  };

  return (
    <FormTasks>
      <TheForm onSubmit={handleSubmit}>
        <ContainIcon>
          <CloseIcon onClick={handleHideForm} />
        </ContainIcon>
        <FormContain>
          <ContainStuff>
            <TitleForm>
              Hi {user?.result?.name} What Will You Do Today ?
            </TitleForm>
          </ContainStuff>

          {tasks.map((task, index) => {
            return (
              <ContainInputs key={index}>
                <Inputs
                  required
                  type="text"
                  name="todo"
                  placeholder="Write Your Task here"
                  maxLength="65"
                  value={task.todo}
                  onChange={e => handleChange(index, e)}
                />
                {tasks.length < 8 ? (
                  <ContainStuff space>
                    <AddIcon onClick={handleAdd} />{" "}
                    <MinusIcon onClick={() => handleLess(index)} />
                  </ContainStuff>
                ) : (
                  <ContainStuff space>
                    <MinusIcon onClick={() => handleLess(index)} />
                  </ContainStuff>
                )}
              </ContainInputs>
            );
          })}
          <ContainStuff centered goodMargin>
            <Button type="submit">Add Task To Your Day</Button>
          </ContainStuff>
        </FormContain>
      </TheForm>
    </FormTasks>
  );
};

export default FormTodo;
