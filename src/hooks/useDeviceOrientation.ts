import { useEffect, useState } from "react";
import { Orientation } from "../domain/type";

export type UseDeviceOrientation = Orientation

export const useDeviceOrientation = (): UseDeviceOrientation => {
  const [orientation, setOrientation] = useState({
    alpha: 0,
    beta: 0,
    gamma: 0,
  })

  const handleOrientation = (event: DeviceOrientationEvent) => {
    setOrientation({
      alpha: event.alpha || 0,
      beta: event.beta || 0,
      gamma: event.gamma || 0,
    })
  }

  useEffect(() => {
    window.addEventListener('deviceorientation', handleOrientation)
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation)
    }
  }, [])

  return {
    alpha: orientation.alpha,
    beta: orientation.beta,
    gamma: orientation.gamma,
  }
}
