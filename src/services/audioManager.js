import caseCloseSoundUrl from "../audio/case close.wav";
import clickSoundUrl from "../audio/click.wav";
import openingBgmUrl from "../audio/opening.mp3";
import wrongSoundUrl from "../audio/wrong.mp3";

const soundUrls = {
  caseClose: caseCloseSoundUrl,
  click: clickSoundUrl,
  wrong: wrongSoundUrl
};

const volumes = {
  bgm: 0.42,
  caseClose: 0.58,
  click: 0.34,
  wrong: 0.5
};

const soundPool = new Map();
let openingBgm = null;
let isMuted = false;

function createAudio(url, { loop = false, volume = 1 } = {}) {
  const audio = new Audio(url);
  audio.preload = "auto";
  audio.loop = loop;
  audio.volume = volume;
  return audio;
}

function getSound(name) {
  if (!soundPool.has(name)) {
    const url = soundUrls[name];
    if (!url) {
      return null;
    }

    soundPool.set(name, createAudio(url, { volume: volumes[name] ?? 0.4 }));
  }

  return soundPool.get(name);
}

export function setAudioMuted(nextMuted) {
  isMuted = nextMuted;

  if (openingBgm) {
    openingBgm.muted = isMuted;
  }

  soundPool.forEach((audio) => {
    audio.muted = isMuted;
  });
}

export function startOpeningBgm() {
  if (isMuted) {
    return;
  }

  if (!openingBgm) {
    openingBgm = createAudio(openingBgmUrl, { loop: true, volume: volumes.bgm });
  }

  openingBgm.muted = false;
  openingBgm.play().catch(() => {
    // Browsers require a user gesture before audio can start.
  });
}

export function stopOpeningBgm() {
  if (!openingBgm) {
    return;
  }

  openingBgm.pause();
  openingBgm.currentTime = 0;
}

export function playSound(name = "click") {
  if (isMuted) {
    return;
  }

  const sound = getSound(name);
  if (!sound) {
    return;
  }

  sound.pause();
  sound.currentTime = 0;
  sound.play().catch(() => {
    // Ignore blocked playback; the next user gesture can try again.
  });
}

export function playQuestionClick() {
  playSound("click");
}

export function playWrongAnswer() {
  playSound("wrong");
}

export function playCaseClose() {
  playSound("caseClose");
}
