import React, { useState, useEffect } from "react";
import { Route, Routes, NavLink } from 'react-router-dom'
import { MyLinkButton, MyLinkButtonGroup } from './../../../mystyle'
import { Button, ButtonGroup } from '@mui/material';


function MyMenu() {
  //const [active, setActive] = useState({ bgcolor: "#361F36", "&:hover": { bgcolor: "primary.dark" }, height: 30 })
  const active = ({isActive}) => (isActive ? 'menu__item-active' : '' )

  return (
    <div>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <MyLinkButtonGroup link='/drift' className={active} >DRIFT</MyLinkButtonGroup>
        <MyLinkButtonGroup link='/timeattack' assName={active}>TIMEATTACK</MyLinkButtonGroup>
        <MyLinkButtonGroup link='/forza' assName={active}>FORZA</MyLinkButtonGroup>
      </ButtonGroup>
    </div>
  );
}

export default MyMenu