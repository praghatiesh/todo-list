import React, { useState, useEffect } from "react";
import "./styles.css";
export default function Todo() {
  const [list, setlist] = useState([]);
  const [temp, settemp] = useState(undefined);
  const [temp1, settemp1] = useState(undefined);
  const [temp2, settemp2] = useState(undefined);
  useEffect(() => {}, []);
  const tasks = (e) => {
    settemp(e.target.value);
  };
  const tasks1 = (e) => {
    settemp1(e.target.value);
  };
  const tasks2 = (e) => {
    settemp2(e.target.value);
  };
  const addit = () => {
    if (temp != "" && temp1 != "" && temp2 != "") {
      list.push({ task: temp, time: temp1, date: temp2 });
      settemp("");
      settemp1("");
      settemp2("");
      console.log(list);
    }
  };
  const remover = (index) => {
    function rem() {
      console.log(index);
      setlist(
        list.filter((val, ind) => {
          return ind !== index;
        })
      );
      console.log(list);
    }
    return (
      <>
        <button onClick={rem}>remove</button>
      </>
    );
  };
  const mapping = () => {
    return (
      <ul
        style={{
          marginTop: 20,
          display: "contents",
          alignContent: "center"
        }}
      >
        {list.map((item, index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row"
              }}
              key="index"
            >
              {" "}
              <div
                style={{
                  flex: 4,
                  backgroundColor: "orange",
                  padding: 3,
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderColor: "red",
                  margin: 1
                }}
              >
                {"  Task: "}
                {item.task}
                {"  Time: "}
                {item.time}
                {"  Date: "}
                {item.date}
              </div>
              <div
                style={{
                  flex: 1,
                  backgroundColor: "orange",
                  padding: 3,
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderColor: "red",
                  margin: 1
                }}
              >
                {" "}
                {remover(index)}
              </div>
            </div>
          );
        })}
      </ul>
    );
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>To-do List</h1>
      <div
        style={{
          marginTop: "5%",
          display: "block",
          textAlignLast: "center",
          margin: "auto",
          width: "80%"
        }}
      >
        <input
          style={{ padding: 5 }}
          placeholder="enter your task"
          onChange={tasks}
        />
        <input style={{ padding: 2.5 }} type="time" onChange={tasks1} />
        <input style={{ padding: 2.5 }} type="date" onChange={tasks2} />
        <button style={{ padding: 5 }} onClick={addit}>
          submit
        </button>
        <div style={{ marginTop: "10%" }}>{mapping()}</div>
      </div>
    </div>
  );
}
