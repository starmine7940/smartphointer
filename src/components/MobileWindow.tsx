import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { PointerArea } from './PointerArea';
import { InformationArea } from './InformationArea';
import { useDeviceMotion } from '../hooks/useDeviceMotion';
import { Button } from 'semantic-ui-react';
import { useRoundedDeviceMotionData } from '../hooks/useRoundedDeviceMotionData';

const useStyles = createUseStyles({})

export const MobileWindow: FC = () => {
  const classes = useStyles()

  const {
    acceleration: originalAcceleration,
    accelerationIncludingGravity: originalAccelerationIncludingGravity,
    rotationRate: originalRotationRate,
    interval: originalInterval,
    handleRequestDeviceMotionPermission,
  } = useDeviceMotion()

  const {
    acceleration,
    accelerationIncludingGravity,
    rotationRate,
    interval,
  } = useRoundedDeviceMotionData({
    acceleration: originalAcceleration,
    accelerationIncludingGravity: originalAccelerationIncludingGravity,
    rotationRate: originalRotationRate,
    interval: originalInterval,
  })

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