import React from "react";
import style from "./style.module.css";
import {useDispatch} from 'react-redux';
import { addSeatList } from "../../redux/actions";
function Chair({ soGhe, daDat, gia }) {
    const dispatch = useDispatch();
    const handleInputChange = (e) => {
        dispatch(addSeatList({
            soGhe,
            gia,
            daDat: true
        }))
    };
    // const mapSeat = () => {
    //     if (daDat) {
    //         return <input
    //             type="checkbox"
    //             value={soGhe}
    //             checked="checked"
    //             onChange={handleInputChange}
    //             className={style.seat}
    //         ></input>
    //     } else {
    //         return <input
    //             type="checkbox"
    //             value={soGhe}
    //             className={style.seat}
    //             onChange={handleInputChange}
    //         ></input>
    //     }
    // }
    return (
        <td className={style.ghe}>
            {daDat ? <input type="checkbox"  value={soGhe} checked="checked" disabled onChange={handleInputChange} className={style.seat}></input> :
            <input type="checkbox" value={soGhe} className={style.seat} onChange={handleInputChange} ></input>
            }

        </td>
    );
}

export default Chair;
