import React from 'react';
import ChairSelected from '../ChairSelected';
import style from './style.module.css';
import { useSelector} from 'react-redux';
import { seatListOrderSelector } from '../../redux/selectors';


function ChairSelectList(props) {
    const seatListSelect = useSelector(seatListOrderSelector);
    const sumTotal = () => {
        let total = 0;
        seatListSelect.map(item => total += item.gia);
        return total;
    }
    return (
        <div>
            <h1 style={{color: '#fff'}}>Danh sách ghế được chọn</h1>
            <div style={{ display: 'flex' }}>
                <div className= {style.gheDadat}></div>
                <span style={{color: '#fff'}}>Ghế đã đặt</span>
            </div>
            <div style={{ display: 'flex' }}>
                <div className={style.gheDangChonStyle}></div>
                <span style={{color: '#fff'}}>Ghế đang chọn</span>
            </div>
            <div style={{ display: 'flex' }}>
                <div className={style.gheChuadat}></div>
                <span style={{color: '#fff'}}>Ghế chưa đặt</span>
            </div>
            <table  style={{border: '1px solid #fff', width: '100%'}}>
                <thead>
                    <tr>
                        <th>Số ghê</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                    </tr>
                </thead>
                <tbody>
                    {seatListSelect.map( (item) =>  <ChairSelected key={item.soGhe} soGhe={item.soGhe} gia={item.gia}/>)}
                    <tr>
                        <th>Tổng cộng</th>
                        <th colSpan={2}>
                         { sumTotal()}
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ChairSelectList;