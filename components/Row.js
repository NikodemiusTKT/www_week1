import React, { Component } from 'react';
import {css } from 'emotion'
import Square from './Square';

const Row = ({squares,rowIndex,onClick}) => {
  const rowStyle = css({
    display: 'flex',
    justifyContent: 'center'
  }
  )
  return (
    <tr>
      {squares.map((square, index) => {
        return <Square
          value={square}
          colIndex={index}
          rowIndex={rowIndex}
          key={index}
          size={60}
          onClick={onClick}
        />
      })}
    </tr>
  )
}

export default Row;