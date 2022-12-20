import { useEffect } from "react"

const UseScrollToTop = ({ children }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [children])

  return <div style={{minWidth: 375}}>{children}</div> || null
}

export default UseScrollToTop
