import s from './JsonFetch.module.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Button, Box } from '@mui/material';
import Header from './Pages/Header';
import Post from './Pages/Post';
import { getData } from './getData'
import NewPost from './Pages/NewPost';
import Correct from './Pages/Correct';


const url = 'https://jsonplaceholder.typicode.com/users'


const urlData = 'https://08backend.summer20100.repl.co/data'
const urlLoading = 'https://08backend.summer20100.repl.co/loading'
const urlErr = 'https://08backend.summer20100.repl.co/error'


const Crud = () => {
  const users = getData(url)

  let data = users.map((el) => <Post name={ el.name }/> )

  return (
    <div className='mainContainer'>
      <Header />
      <Post />
      <NewPost />
      <Correct />
    </div>
  )
}

export default Crud 