import { atom, WritableAtom } from "nanostores";


export const isParuOpen = atom(false)
export const isLockdownStoriesOpen = atom(false)
export const isVideosOpen = atom(false)

export const allItems = [isParuOpen, isLockdownStoriesOpen, isVideosOpen]


//camera
import camera1 from '../../images/making/slideshow/camera/1.jpg';
import camera2 from '../../images/making/slideshow/camera/2.jpg';
import camera3 from '../../images/making/slideshow/camera/3.jpg';
import camera4 from '../../images/making/slideshow/camera/4.jpg';
import camera5 from '../../images/making/slideshow/camera/5.jpg';
import camera6 from '../../images/making/slideshow/camera/6.png';
import camera7 from '../../images/making/slideshow/camera/7.png';
import camera8 from '../../images/making/slideshow/camera/8.jpg';
import camera9 from '../../images/making/slideshow/camera/9.jpg';

import cameraVideo1 from '../../images/making/videos/camera/camera.mp4';

import cameraVideoBackground1 from '../../images/making/slideshow/camera/background_1.png';


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

export interface itemListType {
  name: string;
  metadata?: {
    year: number;
    credits?: Array<Object>;
  };
  id: number;
  text?: Array<string>;
  display: WritableAtom;
  images?: Array<ImageClass>;
  videos?: Array<VideoClass>;
  audio?: Array<ImageClass>;
  slideshowWidth: number;
  quote?: string;
  quoteMobile?: string;
}

class ImageClass {
    src: string;
    alt: string;
    width: number;
    left: number;
    top: number;
    constructor(src: string, alt: string, width: number, left: number, top:number) {
        this.src = src;
        this.alt = alt;
        this.width = width;
        this.left = left;
        this.top = top;
    }
}

class VideoClass extends ImageClass {
    videoImage: string;
    videoId: string;
    constructor(src: string, alt: string, width: number, left: number, top:number, videoImage: string, videoId: string) {
        super(src, alt, width, left, top);
        this.videoImage = videoImage;
        this.videoId = videoId;
    }
}

export const itemList = [
  {
    name: "Paru",
    id: 1,
    display: atom(false),
    images: [
        new ImageClass(paru1, "Paru 1", 759, 0, 0),
        new ImageClass(paru2, "Paru 2", 418, 0+759, 50),
        new ImageClass(paru3, "Paru 3", 759, 0+759+418, 0),
    ],
    videos: [
        new VideoClass(paruVideo1, "Paru Video 1", 650, 50, 506, paruVideoBackground1, '1'),
        new VideoClass(paruVideo2, "Paru Video 2", 650, 850, 506, paruVideoBackground2, '2'),
        new VideoClass(paruVideo3, "Paru Video 3", 650, 2000, 506, paruVideoBackground3, '3'),
    ],
    slideshowWidth: 2500,
  },
  {
    name: "Lockdown Stories",
    id: 2,
    display: atom(false),
    audio: [
        new ImageClass(lockdownStoriesAudio1, "Lockdown Stories Audio 1", 0, 100, 400),
        new ImageClass(lockdownStoriesAudio2, "Lockdown Stories Audio 2", 0, 250, 300),
        new ImageClass(lockdownStoriesAudio3, "Lockdown Stories Audio 3", 0, 400, 200),
        new ImageClass(lockdownStoriesAudio4, "Lockdown Stories Audio 4", 0, 550, 100),
        new ImageClass(lockdownStoriesAudio5, "Lockdown Stories Audio 5", 0, 700, 400),
        new ImageClass(lockdownStoriesAudio6, "Lockdown Stories Audio 6", 0, 850, 300),
        new ImageClass(lockdownStoriesAudio7, "Lockdown Stories Audio 7", 0, 1000, 200),
        new ImageClass(lockdownStoriesAudio8, "Lockdown Stories Audio 8", 0, 1150, 100),
    ],
    slideshowWidth: 1500,
  },
  {
    name: "Videos",
    id: 3,
    display: atom(false),
    videos: [
        new VideoClass(videosVideo1, "Videos Video 1", 650, 50, 506, paruVideoBackground1, '1'),
        new VideoClass(videosVideo2, "Videos Video 2", 650, 800, 200, paruVideoBackground2, '2'),
    ],
    slideshowWidth: 1500,
  },
];
