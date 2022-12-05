import {createContext} from 'react'

export const AuthContext = createContext({
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
