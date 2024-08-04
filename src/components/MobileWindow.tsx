import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { PointerArea } from './PointerArea';
import { InformationArea } from './InformationArea';
import { useDeviceMotion } from '../hooks/useDeviceMotion';
import { Button } from 'semantic-ui-react';

const useStyles = createUseStyles({})

export const MobileWindow: FC = () => {
  const classes = useStyles()

  const { x, y, z, handleDeviceMotion } = useDeviceMotion()

  return (
    <>
      <PointerArea />
      <InformationArea
        x={x}
        y={y}
        z={z}
      />
      <Button
        onClick={() => {window.addEventListener('devicemotion', handleDeviceMotion, true)}}
      >
        devicemotion をイベントリスナーに追加
      </Button>
    </>
  )
}