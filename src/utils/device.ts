import DeviceDetector from 'device-detector-js';

type Device = {
  type: string,
  model: string,
  os: string,
}

export const getDevice = (): Device  => {
  const deviceDetector = new DeviceDetector();
  const { client, device, os: osDetector } = deviceDetector.parse(navigator.userAgent);

  const type = device?.type ? device?.type : '';

  let model = client?.name ? client?.name : '';
  model = client?.version ? `${model} ${client?.version}` : model;

  let os = osDetector?.name ? osDetector?.name : '';
  os = osDetector?.version ? `${os} ${osDetector?.version}` : os;
  os = osDetector?.platform ? `${os} ${osDetector?.platform}` : os;

  return { type, model, os }
}
