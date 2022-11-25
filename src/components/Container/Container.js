import useStyles from './styles'

const Container = ({children}) => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      {children}
    </div>
  )
}

export default Container
