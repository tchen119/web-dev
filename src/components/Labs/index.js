import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";

const Labs = () => {
    return(
      <>
          <h1>Labs</h1>
          <TodoList/>
          <ConditionalOutput/>
          <Styles/>
          <Classes/>
          <Link to="/hello">
              Hello
          </Link> |
          <Link to="/tuiter">
              Tuiter
          </Link>
      </>
    )
};

export default Labs;