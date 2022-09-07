import React from 'react';
import Chair from '../Chair';
import style from './style.module.css';
import {useSelector} from 'react-redux';
import { seatListSelector } from '../../redux/selectors';
 
function ChairList(props) {
    const seatList = useSelector(seatListSelector);
    const seatListMapTbody = (thead) => {
        if(thead === 'thead'){
            return seatList.map( (item) => {
                if(item.hang === ""){
                    return <tr key={item.hang}>
                    <th style={{border: 'none'}}>{item.hang}</th>
                    {item.danhSachGhe.map( (seat) => {
                        return <th key={seat.soGhe} className={style.rowNumber}>{seat.soGhe}</th>
                    })}
                    </tr>
                }
            })
        }else{
            return seatList.map( (item) => {
                if(item.hang !== ""){
                    return <tr key={item.hang}>
                    <td className={style.rowNumber} >{item.hang}</td>
                    {item.danhSachGhe.map( (seat) => {
                        return <Chair key={seat.soGhe} soGhe={seat.soGhe} daDat={seat.daDat} gia= {seat.gia}/>
                    })}
                    </tr>
                }
               
            })
        }
    }
    return (
        <div >
            <table  style={{margin: '0 auto'}}>
                <thead>
                    {/* <tr>
                        <th className={style.rowNumber}></th>
                        <th className={style.rowNumber}>1</th>
                        <th className={style.rowNumber}>2</th>
                        <th className={style.rowNumber}>3</th>
                        <th className={style.rowNumber}>4</th>
                        <th className={style.rowNumber}>5</th>
                        <th className={style.rowNumber}>6</th>
                        <th className={style.rowNumber}>7</th>
                        <th className={style.rowNumber}>8</th>
                        <th className={style.rowNumber}>9</th>
                        <th className={style.rowNumber}>10</th>
                        <th className={style.rowNumber}>11</th>
                        <th className={style.rowNumber}>12</th>
                        
                    </tr> */}
                    {seatListMapTbody('thead')}
                </thead>
                <tbody>
                    {/* <tr>
                        <td className={style.rowNumber}>A</td>
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                    </tr>
                    <tr>
                        <td className={style.rowNumber}>B</td>
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                        <Chair />
                    </tr> */}
                       {seatListMapTbody()}
                </tbody>
            </table>
        </div>
    );
}

export default ChairList;