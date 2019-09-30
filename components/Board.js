import React, { Component } from 'react';
import Row from './Row';
import { css } from "emotion";

const boardStyle = css({
  marginTop: '40px'
})
const Board = ({
  rows,
  onClick
}) => (
    <table cellSpacing="0" cellPadding="0" align="center" className={boardStyle}>
    <tbody>
      {rows.map((row, index) => (
        <Row
        key={index}
        rowIndex={index}
        squares={row}
        onClick={onClick}
      />
      ))}
      </tbody>
      </table>
  );

export default Board;
