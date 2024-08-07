import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { PointerArea } from './PointerArea';
import { InformationArea } from './InformationArea';
import { useDeviceMotion } from '../hooks/useDeviceMotion';
import { Button } from 'semantic-ui-react';

const useStyles = createUseStyles({})

export const MobileWindow: FC = () => {
  const classes = useStyles()

  const {
    acceleration,
    accelerationIncludingGravity,
    rotationRate,
    interval,
    handleRequestDeviceMotionPermission,
  } = useDeviceMotion()

  return (
    <>
      <PointerArea />
      <InformationArea
        acceleration={acceleration}
        accelerationIncludingGravity={accelerationIncludingGravity}
        rotationRate={rotationRate}
        interval={interval}
      />
      <Button
        onClick={handleRequestDeviceMotionPermission}
      >
        DeviceMotionEvent.requestPermission()
      </Button>
    </>
  )
}