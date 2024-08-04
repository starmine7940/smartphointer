import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { DeviceMotion } from '../domain/type';
import { List, ListItem } from 'semantic-ui-react';

const useStyles = createUseStyles({})

type InformationAreaProps = DeviceMotion

export const InformationArea: FC<InformationAreaProps> = ({x, y, z }) => {
  const classes = useStyles()
  return (
    <List bulleted>
      <ListItem>x: {x}</ListItem>
      <ListItem>y: {y}</ListItem>
      <ListItem>z: {z}</ListItem>
  </List>
  )
}