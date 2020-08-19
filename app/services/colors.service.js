const LINES_COLORS = {
  '500': {
    background: '#229922',
    border: '#229922',
    text: '#FFFFFF',
  },
  '32': {
    background: '#FFCC11',
    border: '#FFCC11',
    text: '#000000',
  },
  '130': {
    background: '#8899AA',
    border: '#8899AA',
    text: '#000000',
  },
  '561': {
    background: '#DD0077',
    border: '#DD0077',
    text: '#FFFFFF',
  },
  '299': {
    background: '#FF88AA',
    border: '#FF88AA',
    text: '#000000',
  },
};

export function getLinesColors() {
  return Object.entries(LINES_COLORS).map(([id, lineColors]) => ({
    id,
    ...lineColors,
  }));
}

export function getLineColorsByLineId(lineId) {
  return { id: lineId, ...LINES_COLORS[lineId] };
}
