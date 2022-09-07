import React from 'react';
import ChairList from '../ChairList';
import ChairSelectList from '../ChairSelectList';
import dataSeat from '../../data/danhSachGhe.json';

function Home(props) {
    return (
        <div style={ {display: 'flex', maxWidth: 1280, position: 'relative'}}>
        <div style={ {width: '70%'}}>
          <h1 style={{ textAlign: 'center', color: 'yellow'}}>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
          <div className='screen'></div>
          <ChairList/>
        </div>
        <div style={ {width: '30%'}}>
          <ChairSelectList />
        </div>
    </div>
    );
}

export default Home;