import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { List, ListItem, ListList } from 'semantic-ui-react';

const useStyles = createUseStyles({})

type InformationAreaProps = DeviceMotionData

export const InformationArea: FC<InformationAreaProps> = ({
  acceleration,
  accelerationIncludingGravity,
  rotationRate,
  interval,
}) => {
  const classes = useStyles()
  return (
    <List bulleted>
      <ListItem>
        acceleration
        <ListList>
          x: {acceleration?.x}
        </ListList>
        <ListList>
          y: {acceleration?.y}
        </ListList>
        <ListList>
          z: {acceleration?.z}
        </ListList>
      </ListItem>
      <ListItem>
        accelerationIncludingGravity
        <ListList>
          x: {accelerationIncludingGravity?.x}
        </ListList>
        <ListList>
          y: {accelerationIncludingGravity?.y}
        </ListList>
        <ListList>
          z: {accelerationIncludingGravity?.z}
        </ListList>
      </ListItem>
      <ListItem>
        rotationRate
        <ListList>
          alpha: {rotationRate?.alpha}
        </ListList>
        <ListList>
          beta: {rotationRate?.beta}
        </ListList>
        <ListList>
          gamma: {rotationRate?.gamma}
        </ListList>
      </ListItem>
      <ListItem>
        interval: {interval}
      </ListItem>
    </List>
  )
}