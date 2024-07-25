import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { Orientation } from '../domain/type';
import { List, ListItem } from 'semantic-ui-react';

const useStyles = createUseStyles({})

type InformationAreaProps = Orientation

export const InformationArea: FC<InformationAreaProps> = ({alpha, beta, gamma }) => {
  const classes = useStyles()
  return (
    <List bulleted>
      <ListItem>alpha: {alpha}</ListItem>
      <ListItem>beta: {beta}</ListItem>
      <ListItem>gamma: {gamma}</ListItem>
  </List>
  )
}