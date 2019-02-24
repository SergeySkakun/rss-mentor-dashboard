import React from "react";
import { css } from "@emotion/core";
import Data from "../data/data.JSON";
import generateChildren from '../components/generateChildren';

const Score = (props) => (
  <li css={css`
  width: 100px;
  height: 20px;
  border: 2px solid red;
  `}>
    {props.point}
  </li>
);

let countStudents = Object.keys(Data.mentors['https://github.com/katekaranets'].students).length;
let scoresStudent = Object.values(Data.mentors['https://github.com/katekaranets'].students);
let currentStudent = 0;

function generateStudentScoreList() {
  let children = [];
  
    for (let i = 0; i < scoresStudent[currentStudent].length; i++){
        children.push(<Score point={scoresStudent[currentStudent][i]}/>);
    }

    currentStudent++;

  return children;
};

const StudentScores = () => (
  <li css={css`
    float: left;
    list-style: none;
    padding: 0;
    margin: 0;
  `}>
    <ul css={css`
      list-style: none;
      padding: 0;
      margin: 0;
    `}>
      {generateStudentScoreList()}
    </ul>
  </li>
);

const something = () => (
  <ul css={css`
    display: inline-block;
    list-style: none;
  `}>
    {generateChildren(countStudents, <StudentScores />)}
  </ul>
);

export default something;