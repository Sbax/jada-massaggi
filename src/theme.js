const banana = '#FBE7B7';
const jon = '#443F3E';
const friarGray = '#85807D';
const provincialPink = '#FDF6F0';
const deepBlush = '#EE7A9A';
const roseBud = '#ffa99f';

const colors = {
  banana,
  jon,
  friarGray,
  provincialPink,
  deepBlush,
  roseBud,
};

export const theme = {
  ...colors,
  accent: deepBlush,
  primary: roseBud,
  secondary: banana,
  mainBg: provincialPink,
  text: jon,
  textFaded: friarGray,

  mainGradient: `linear-gradient(-225deg, ${banana}, ${roseBud} 48%, ${deepBlush})`,
};
