/// <reference types="react-scripts" />

interface DeviceMotionData {
    acceleration: DeviceMotionEventAcceleration | null;
    accelerationIncludingGravity: DeviceMotionEventAcceleration | null;
    rotationRate: DeviceMotionEventRotationRate | null;
    interval: number;
}

interface RoundedDeviceMotionData {
    acceleration: DeviceMotionEventAcceleration;
    accelerationIncludingGravity: DeviceMotionEventAcceleration;
    rotationRate: DeviceMotionEventRotationRate;
    interval: number;
}

interface DeviceMotionEventWithRequestPermission extends DeviceMotionEvent {
    requestPermission?: () => Promise<'granted' | 'denied'>;
}
