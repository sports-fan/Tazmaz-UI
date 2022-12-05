import React, { Suspense, useEffect, useState} from 'react'
import { CssBaseline } from '@mui/material'
import axios from "axios";

import Pages from './pages'
import Loader from 'components/Loader';
import { AuthContext } from 'contexts/AuthContext'

function App() {
  const [data, setData] = useState({
    loginPage: {
      title: '3-5 דקות ביום ואתם מסודריםם',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Cartoon_space_rocket.png',
      background: '#4287f5'
    },
    registerDetailsPage: {
      title: 'היועצת שלנו אוהבת לשחק מחבואים',
      image: 'https://www.pngall.com/wp-content/uploads/5/3D-Mask-PNG-Free-Download.png',
      background: '#1cb891'
    },
    registerPage: {
      title: 'היועצת שלנו אוהבת לשבת על עצים',
      image: 'https://pngimg.com/uploads/tree/tree_PNG92741.png',
      background: '#c5f739'
    }
  })
  useEffect(() => {
    axios({
      url: '/public/get-banners',
      method: "GET",
      headers: {
        "accept": 'application/json',
        "content-type": 'application/json'
      },
    })
    .then(res => {
      console.log(res.data.data)
      setData(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <React.Fragment>
      <AuthContext.Provider value={data}>
        <CssBaseline />
        <Suspense fallback={<Loader />}>
          <Pages />
        </Suspense>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
