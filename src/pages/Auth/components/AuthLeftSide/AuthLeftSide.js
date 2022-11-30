import { Typography } from '@mui/material'
import useStyles from './styles'
import cn from 'classnames'

const AuthLeftSide = ({icon, title, className, titleColor}) => {
  const classes = useStyles()

  return (
    <div className={cn(classes.main, className)}>
      <div className={classes.titleDiv}>
        <Typography variant='h4' className={titleColor}>{title}</Typography>
      </div>
      <div className={classes.imageDiv}>
        <img className={classes.image} src={icon} alt='logo' />
      </div>
    </div>
  )
}

export default AuthLeftSide
