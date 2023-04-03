import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#00FFFF',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './cleo.png',
  fullDecal: './cleo.png',
});

export default state;