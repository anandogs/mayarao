import { atom } from "nanostores";
import { ImageClass, VideoClass } from "./helpers";


//paru
import paru1 from '../../images/digital/slideshow/paru/1.jpg';
import paru2 from '../../images/digital/slideshow/paru/2.jpg';
import paru3 from '../../images/digital/slideshow/paru/3.jpg';

import paruVideo1 from '../../images/digital/videos/paru/paru1.mp4';
import paruVideo2 from '../../images/digital/videos/paru/paru2.mp4';
import paruVideo3 from '../../images/digital/videos/paru/paru3.mp4';

import paruVideoBackground1 from '../../images/digital/slideshow/paru/background_1.png';
import paruVideoBackground2 from '../../images/digital/slideshow/paru/background_2.png';
import paruVideoBackground3 from '../../images/digital/slideshow/paru/background_3.png';

import paruAudio1 from '../../images/digital/audio/paru/paru1.mp3';
import paruAudio2 from '../../images/digital/audio/paru/paru2.mp3';
import paruAudio3 from '../../images/digital/audio/paru/paru3.mp3';

//lockdown_stories
import lockdownStoriesAudio1 from '../../images/digital/audio/lockdown_stories/lockdown_stories1.mp3';
import lockdownStoriesAudio2 from '../../images/digital/audio/lockdown_stories/lockdown_stories2.mp3';
import lockdownStoriesAudio3 from '../../images/digital/audio/lockdown_stories/lockdown_stories3.mp3';
import lockdownStoriesAudio4 from '../../images/digital/audio/lockdown_stories/lockdown_stories4.mp3';
import lockdownStoriesAudio5 from '../../images/digital/audio/lockdown_stories/lockdown_stories5.mp3';
import lockdownStoriesAudio6 from '../../images/digital/audio/lockdown_stories/lockdown_stories6.mp3';
import lockdownStoriesAudio7 from '../../images/digital/audio/lockdown_stories/lockdown_stories7.mp3';
import lockdownStoriesAudio8 from '../../images/digital/audio/lockdown_stories/lockdown_stories8.mp3';

//videos
import videosVideo1 from '../../images/digital/videos/videos/videos1.mp4';
import videosVideo2 from '../../images/digital/videos/videos/videos2.mp4';

export const itemList = [
  {
    name: "Paru",
    id: 1,
    display: atom(false),
    images: [
        new ImageClass(paru1, "Paru 1", 759, 481, 0, 0),
        new ImageClass(paru2, "Paru 2", 418, 332, 0+759, 50),
        new ImageClass(paru3, "Paru 3", 759, 730, 0+759+418, 0),
    ],
    videos: [
        new VideoClass(paruVideo1, "Paru Video 1", 650, 379, 298, 481, paruVideoBackground1, '1'),
        new VideoClass(paruVideo2, "Paru Video 2", 650, 379, 1900, 481, paruVideoBackground2, '2'),
        new VideoClass(paruVideo3, "Paru Video 3", 650, 379, 1900, 0, paruVideoBackground3, '3'),
    ],
    audio: [
      new ImageClass(paruAudio1, "Paru Audio 1", 0, 0, 1950, 335),
      new ImageClass(paruAudio2, "Paru Audio 2", 0, 0, 2100, 335),
      new ImageClass(paruAudio3, "Paru Audio 3", 0, 0, 2250, 335),
    ],

    slideshowWidth: 2500,
  },
  {
    name: "Lockdown Stories",
    id: 2,
    display: atom(false),
    audio: [
        new ImageClass(lockdownStoriesAudio1, "Lockdown Stories Audio 1", 0, 0, 100, 400),
        new ImageClass(lockdownStoriesAudio2, "Lockdown Stories Audio 2", 0, 0, 250, 300),
        new ImageClass(lockdownStoriesAudio3, "Lockdown Stories Audio 3", 0, 0, 400, 200),
        new ImageClass(lockdownStoriesAudio4, "Lockdown Stories Audio 4", 0, 0, 550, 100),
        new ImageClass(lockdownStoriesAudio5, "Lockdown Stories Audio 5", 0, 0, 700, 400),
        new ImageClass(lockdownStoriesAudio6, "Lockdown Stories Audio 6", 0, 0, 850, 300),
        new ImageClass(lockdownStoriesAudio7, "Lockdown Stories Audio 7", 0, 0, 1000, 200),
        new ImageClass(lockdownStoriesAudio8, "Lockdown Stories Audio 8", 0, 0, 1150, 100),
    ],
    slideshowWidth: 1500,
  },
  {
    name: "Videos",
    id: 3,
    display: atom(false),
    videos: [
        new VideoClass(videosVideo1, "Videos Video 1", 650, 379, 50, 506, paruVideoBackground1, '1'),
        new VideoClass(videosVideo2, "Videos Video 2", 650, 379, 800, 200, paruVideoBackground2, '2'),
    ],
    slideshowWidth: 1500,
  },
];
