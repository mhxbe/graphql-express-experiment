const STOPS = {
  '2000': { name: 'Groenplaats Antwerpen' },
  '2440': { name: 'Stadspark Geel' },
  '2500': { name: 'Lier Veemarkt' },
  '2650': { name: 'Edegem Dorp' },
  '2800': { name: 'Vismarkt Mechelen' },
  '3500': { name: 'Kolonel Dusartplein Hasselt' },
};

export function getStops() {
  return Object.entries(STOPS).map(([id, stop]) => ({ id, ...stop }));
}

export function getStopById(stopId) {
  return { id: stopId, ...STOPS[stopId] };
}

export function createStop(stop) {
  const { stopId, name } = stop;
  STOPS[stopId] = { name };
  return getStops();
}
