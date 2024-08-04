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

  const requestPermission = async () => {
    // 型キャストを使用してDeviceOrientationEvent.requestPermissionにアクセス
    const deviceOrientationEvent = window.DeviceOrientationEvent as any

    if (deviceOrientationEvent && typeof deviceOrientationEvent.requestPermission === 'function') {
      try {
        const permissionState = await deviceOrientationEvent.requestPermission()
        if (permissionState === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation)
        }
      } catch (error) {
        console.error('Device orientation permission denied:', error)
      }
    } else {
      // AndroidやiOS 13未満のデバイスではそのままイベントリスナーを追加
      window.addEventListener('deviceorientation', handleOrientation)
    }
  }

  useEffect(() => {
    requestPermission()
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
