import React from "react";

function ChairSelected({soGhe, gia}) {
  return (
    <tr style={{textAlign: 'center'}}>
      <td style={{ color: 'yellow'}}>{soGhe}</td>
      <td style={{ color: 'yellow'}}>{gia}</td>
      <td><button>X</button></td>
    </tr>
  );
}

export default ChairSelected;
