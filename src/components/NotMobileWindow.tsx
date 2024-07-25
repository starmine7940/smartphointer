import { FC } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({})

export const NotMobileWindow: FC = () => {
  const classes = useStyles()
  return (
    <div>This application is only for a smartphone.</div>
  )
}