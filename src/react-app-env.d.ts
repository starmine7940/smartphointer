/// <reference types="react-scripts" />
interface DeviceMotionEventWithRequestPermission extends DeviceMotionEvent {
    requestPermission?: () => Promise<'granted' | 'denied'>;
}
