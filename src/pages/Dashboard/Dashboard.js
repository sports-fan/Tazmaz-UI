import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      navigate('/auth/login')
    }
  }, [navigate])

  return (
    <div>
      Welcome to TazMaz
    </div>
  )
}

export default Dashboard
