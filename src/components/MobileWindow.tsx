import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { PointerArea } from './PointerArea';
import { InformationArea } from './InformationArea';
import { useDeviceOrientation } from '../hooks/useDeviceOrientation';

const useStyles = createUseStyles({})

export const MobileWindow: FC = () => {
  const classes = useStyles()

  const { alpha, beta, gamma } = useDeviceOrientation()

  return (
    <>
      <PointerArea />
      <InformationArea
        alpha={alpha}
        beta={beta}
        gamma={gamma}
      />
    </>
  )
}