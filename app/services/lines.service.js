const LINES = {
  '500': {
    name: 'Antwerpen - Boom - Rumst - Mechelen',
    stops: ['2000', '2800'],
  },
  '32': {
    name: 'Edegem - Berchem Station - Centraal Station',
    stops: ['2650', '2000'],
  },
  '130': { name: 'UZA Edegem - Kontich - Lier', stops: ['2650', '2500'] },
  '561': {
    name: 'Lier - Berlaarbaan - Sint-Katelijne-Waver - Mechelen',
    stops: ['2500', '2800'],
  },
  '299': { name: 'Hasselt - Geel', stops: ['3500', '2440'] },
};

export function getLines() {
  return Object.entries(LINES).map(([id, line]) => ({ id, ...line }));
}

export function getLineById(lineId) {
  return { id: lineId, ...LINES[lineId] };
}
