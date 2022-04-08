export const playerCoordinatesFinder = (level) => {
  let coordynates = {};

  level.forEach((row, y) => {
    row.forEach((tile, x) => {
      if (tile === 4) {
        coordynates.x = x;
        coordynates.y = y;
      }
    });
  });

  return coordynates;
};

export const checkWhatIsAboveMe = (level) => {
  const player = playerCoordinatesFinder(level);
  return level[player.y - 1][player.x];
};

export const checkWhatIsBellowMe = (level) => {
  const player = playerCoordinatesFinder(level);
  return level[player.y + 1][player.x];
};

export const checkWhatIsInFrontOfMe = (level) => {
  const player = playerCoordinatesFinder(level);
  return level[player.y][player.x + 1];
};

export const checkWhatIsBehindMe = (level) => {
  const player = playerCoordinatesFinder(level);
  return level[player.y][player.x - 1];
};
