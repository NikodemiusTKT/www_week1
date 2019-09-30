import React from 'react'
import { css } from 'emotion'
const Square = ({
 value,
 colIndex=1,
 rowIndex=2,
  size,
 onClick
}) => {
    const squareStyle = css({

      // display: 'inline-flex',
      // justifyContent: 'center',
      // alignContent: 'center',
      fontSize: size * 0.75,
      border: '1px solid black',
      height: '80px',
      width: '80px',
    });
  const indexes = { rowIndex, colIndex };
  return (
    <td  className={squareStyle} onClick={() => onClick(indexes)}>
    {value}
    </td>
  );
}

export default Square;