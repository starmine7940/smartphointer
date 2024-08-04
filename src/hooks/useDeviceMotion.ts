import { useEffect, useState } from "react";
import { DeviceMotion } from "../domain/type";

export type UseDeviceMotion = DeviceMotion

export const useDeviceMotion = (): UseDeviceMotion => {
  const [deviceMotion, setDeviceMotion] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  const handleDeviceMotion = (event: DeviceMotionEvent) => {
    setDeviceMotion({
      x: event.acceleration?.x ?? 0,
      y: event.acceleration?.y ?? 0,
      z: event.acceleration?.z ?? 0,
    })
  }

  const requestPermission = async () => {
    try {
      // 許可を取得せず devicemotion をイベントリスナーに追加している
      window.addEventListener('devicemotion', handleDeviceMotion)
    } catch (error) {
      console.error('Device motion permission denied:', error)
    }
  }

  useEffect(() => {
    requestPermission()
  }, [])

  return {
    x: deviceMotion.x,
    y: deviceMotion.y,
    z: deviceMotion.z,
  }
}
