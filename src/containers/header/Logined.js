import React from 'react';
export const Logined = (props) => (
  <div className="style.container1">
    <p>欢迎：{props.loginedInfo}</p>
    {/* <p className={style.centerP}>光临我的博客~</p> */}
  </div>
)