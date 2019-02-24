import React from "react";
import { css } from "@emotion/core";
import Data from "../data/data.JSON";

const Li = (props) => (
  <li css={css`
    width: 100px;
    height: 20px;
    border: 2px solid red;
  `}>
    {props.point}
  </li>
);

function generateChildren() {
    let children = [];
  
    for (let i = 0; i < Data.tasks.length; i++){
        children.push(<Li point={Data.tasks[i]}/>);
    }
    return children;
};

const Tasks = () => (
  <ul css={css`
    display: inline-block;
    float: left;
    margin: 24px 0 0 0;
    padding: 0;
    list-style: none;

  `}>
      {generateChildren()}
  </ul>
);

export default Tasks;