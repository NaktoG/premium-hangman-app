import { Howl } from 'howler';
import { SOUNDS_CONFIG } from '@features/hangman/config/sounds.config';
import { getSoundEnabled } from '@features/hangman/audio/soundStorage';

type SoundName = keyof typeof SOUNDS_CONFIG.files;

const cache = new Map<string, Howl>();

function createHowl(name: SoundName): Howl {
  const src = `${SOUNDS_CONFIG.basePath}/${SOUNDS_CONFIG.files[name]}`;
  return new Howl({
    src: [src],
    volume: SOUNDS_CONFIG.volume.sfx,
    preload: true,
    html5: false,
  });
}

function getHowl(name: SoundName): Howl {
  let howl = cache.get(name);
  if (!howl) {
    howl = createHowl(name);
    cache.set(name, howl);
  }
  return howl;
}

export const soundManager = {
  play(name: SoundName): void {
    if (!getSoundEnabled()) return;
    getHowl(name).play();
  },

  stop(name: SoundName): void {
    getHowl(name).stop();
  },

  stopAll(): void {
    cache.forEach((howl) => howl.stop());
  },
};
