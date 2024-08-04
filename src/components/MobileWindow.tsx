import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { PointerArea } from './PointerArea';
import { InformationArea } from './InformationArea';
import { useDeviceMotion } from '../hooks/useDeviceMotion';

const useStyles = createUseStyles({})

export const MobileWindow: FC = () => {
  const classes = useStyles()

  const { x, y, z } = useDeviceMotion()

  return (
    <>
      <PointerArea />
      <InformationArea
        x={x}
        y={y}
        z={z}
      />
    </>
  )
}