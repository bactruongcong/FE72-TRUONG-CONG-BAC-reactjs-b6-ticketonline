import React from "react";
import { useDispatch} from 'react-redux';
import { deleteSeatList} from '../../redux/actions'


function ChairSelected({soGhe, gia}) {
  const dispatch = useDispatch();
  const handleClickButton = () => {
    dispatch(deleteSeatList({soGhe}));
  }
  return (
    <tr style={{textAlign: 'center'}}>
      <td style={{ color: 'yellow'}}>{soGhe}</td>
      <td style={{ color: 'yellow'}}>{gia}</td>
      <td><button onClick={handleClickButton}>X</button></td>
    </tr>
  );
}

export default ChairSelected;
