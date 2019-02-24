import React from "react";
import { css } from "@emotion/core";
import Data from "../data/data.JSON";

const Student = (props) => (
  <li css={css`
    width: 100px;
    height: 20px;
    border: 2px solid red;
    float: left;
    overflow: hidden;
  `}>
    {props.name}
  </li>
);

let studentsArr = Object.keys(Data.mentors['https://github.com/katekaranets'].students);

function generateChildren() {
    let children = [];
  
    for (let i = 0; i < studentsArr.length; i++){
        children.push(<Student name={studentsArr[i].slice(20)}/>);
    }
    return children;
};

const StudentsList = () => (
    <ul css={css`
        list-style: none;
        display: inline-block;
        margin: 0;
        padding: 0;
    `}>
        {generateChildren()}
    </ul>
);

export default StudentsList;