import { useEffect, useState } from "react";
import { DeviceMotion } from "../domain/type";

export type UseDeviceMotion = DeviceMotion & {
  handleRequestDeviceMotionPermission: () => void
}

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

  const handleRequestDeviceMotionPermission = () => {
    const DeviceMotionEvent = window.DeviceMotionEvent as unknown as DeviceMotionEventWithRequestPermission
    if (
      DeviceMotionEvent &&
      typeof DeviceMotionEvent.requestPermission === 'function'
    ) {
      // iOS 13+ の Safari
      // 許可を取得
      DeviceMotionEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          // 許可を得られた場合、devicemotionをイベントリスナーに追加
          window.addEventListener('devicemotion', e => {
            // devicemotionのイベント処理
            handleDeviceMotion(e)
          })
        } else {
          // 許可を得られなかった場合の処理
          window.alert('Device motion permission denied')
        }
      })
      .catch(console.error) // https通信でない場合などで許可を取得できなかった場合
    } else {
      // 上記以外のブラウザ
      window.addEventListener('devicemotion', e => {
        // devicemotionのイベント処理
        handleDeviceMotion(e)
      })
    }
  }
  
  useEffect(() => {
    handleRequestDeviceMotionPermission()
  },[])
  
  return {
    x: deviceMotion.x,
    y: deviceMotion.y,
    z: deviceMotion.z,
    handleRequestDeviceMotionPermission: handleRequestDeviceMotionPermission,
  }
}
