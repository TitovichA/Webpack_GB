import { Howl } from './howler.core.js';

const soundEnd = new Howl({
    src: ['src/mediaSound/endTimerSound.mp3'],
    html5: true,
    volume: 0.3,
});

soundEnd.play();

// не смог реализовать
