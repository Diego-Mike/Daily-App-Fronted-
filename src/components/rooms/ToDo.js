import React, { useState } from "react";

import {
  TodoMain,
  Todo,
  Close,
  CloseIcon,
  RoomName,
  TodoContainer,
  HomeworkContainer,
  HomeworkHeader,
  HomeworkHeaderName,
  HomeworkButtonDelete,
  AllTodoStuff,
  SpanTodoStuff,
  IconDone,
  IconCancel,
  CommentContainer
} from "./ToDoStyled";

import { useSelector, useDispatch } from "react-redux";
import {
  deleteTasks,
  checkTasks,
  isDayOver,
  dayComment
} from "../../actions/tasks";

import moment from "moment";

const ToDo = ({ setTodo, idRoom, setIdRoom }) => {
  const dispatch = useDispatch();

  const [taskComment, setTaskComment] = useState({ commentFuck: "" });

  const handleTodo = () => {
    setTodo(false);
    setIdRoom({});
    document.body.style = "overflow: auto";
  };

  const user = JSON.parse(localStorage.getItem("profile"));

  const todo = useSelector(state =>
    state.tasks.filter(id => id.room === idRoom._id)
  );

  const handleCheck = (id, specificTodo) => {
    dispatch(checkTasks(id, specificTodo));
  };

  const handleDay = (id, specificData) => {
    dispatch(isDayOver(id, specificData));
  };

  const handleComment = (e, id) => {
    e.preventDefault();

    dispatch(dayComment(id, taskComment));

    setTaskComment({ commentFuck: "" });
  };

  return (
    <div>
      <TodoMain>
        <Todo>
          <Close>
            <CloseIcon onClick={handleTodo} />
          </Close>

          <RoomName>
            <h2>{idRoom.room}</h2>
          </RoomName>

          <TodoContainer>
            {todo.map(data => {
              const { homework, _id, createdAt, dayOver, comment } = data;

              return (
                <HomeworkContainer key={_id}>
                  <HomeworkHeader>
                    <HomeworkHeaderName>
                      {user?.result?.name} <br />
                      <span>{moment(createdAt).fromNow()}</span>
                    </HomeworkHeaderName>
                    {dayOver && comment ? (
                      <span></span>
                    ) : (
                      <span
                        style={{ padding: "0rem 2rem" }}
                        onClick={() => dispatch(deleteTasks(_id))}
                      >
                        <HomeworkButtonDelete />
                      </span>
                    )}
                  </HomeworkHeader>
                  <AllTodoStuff white BigSpace>
                    <SpanTodoStuff Default>
                      Date : {moment(createdAt).format("DD-MM-YY")}
                    </SpanTodoStuff>
                  </AllTodoStuff>

                  {homework.map((rightTodo, i) => {
                    const { todo, complete } = rightTodo;

                    return (
                      <>
                        {dayOver ? (
                          <>
                            {complete ? (
                              <AllTodoStuff key={i} Completed BigSpace>
                                <SpanTodoStuff Default>{todo}</SpanTodoStuff>
                              </AllTodoStuff>
                            ) : (
                              <AllTodoStuff key={i} Uncompleted BigSpace>
                                <SpanTodoStuff Default>{todo}</SpanTodoStuff>
                              </AllTodoStuff>
                            )}
                          </>
                        ) : complete ? (
                          <>
                            <AllTodoStuff key={i} Completed BigSpace>
                              <SpanTodoStuff Default>{todo}</SpanTodoStuff>

                              <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                              }}>
                                <span style={{ padding: "0rem 2rem" }}>
                                  <IconDone />
                                </span>
                                <span style={{ padding: "0rem 2rem" }}>
                                  <IconCancel
                                    onClick={() => handleCheck(_id, rightTodo)}
                                  />
                                </span>
                              </div>
                            </AllTodoStuff>
                          </>
                        ) : (
                          <AllTodoStuff key={i} Uncompleted BigSpace>
                            <SpanTodoStuff Default>{todo}</SpanTodoStuff>

                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                              }}
                            >
                              <span style={{ padding: "0rem 2rem" }}>
                                <IconDone
                                  onClick={() => handleCheck(_id, rightTodo)}
                                />
                              </span>
                              <span style={{ padding: "0rem 2rem" }}>
                                <IconCancel />
                              </span>
                            </div>
                          </AllTodoStuff>
                        )}
                      </>
                    );
                  })}
                  {dayOver ? (
                    comment ? (
                      <>
                        <CommentContainer>
                          <SpanTodoStuff Default>
                            Day Comment : {comment}
                          </SpanTodoStuff>
                        </CommentContainer>

                        <AllTodoStuff Centered DayOver>
                          <SpanTodoStuff
                            Day
                            onClick={() => handleDay(_id, data)}
                          >
                            Day Over
                          </SpanTodoStuff>
                        </AllTodoStuff>
                      </>
                    ) : (
                      <AllTodoStuff Centered DayOver>
                        <SpanTodoStuff Day onClick={() => handleDay(_id, data)}>
                          Day Over
                        </SpanTodoStuff>
                      </AllTodoStuff>
                    )
                  ) : (
                    <>
                      <CommentContainer>
                        <form onClick={e => handleComment(e, _id)}>
                          <input
                            name="commentFuck"
                            type="text"
                            placeholder="Today Was A Good Day"
                            maxLength="85"
                            value={taskComment.commentFuck}
                            onChange={e =>
                              setTaskComment({
                                ...taskComment,
                                [e.target.name]: e.target.value
                              })
                            }
                          />
                          <div>
                            <button type="submit">Comment</button>
                          </div>
                        </form>
                      </CommentContainer>

                      <AllTodoStuff Centered DayNotOver>
                        <SpanTodoStuff Day onClick={() => handleDay(_id, data)}>
                          Day Completed
                        </SpanTodoStuff>
                      </AllTodoStuff>
                    </>
                  )}
                </HomeworkContainer>
              );
            })}
          </TodoContainer>
        </Todo>
      </TodoMain>
    </div>
  );
};

export default ToDo;
