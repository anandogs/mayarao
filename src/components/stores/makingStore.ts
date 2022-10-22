import { atom, WritableAtom } from "nanostores";


export const isImprovisationOpen = atom(false)
export const isObjectsOpen = atom(false)
export const isCameraOpen = atom(false)

export const allItems = [isImprovisationOpen, isObjectsOpen, isCameraOpen]


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

//improvisation
import improvisation1 from '../../images/making/slideshow/improvisation/1.jpg';
import improvisation2 from '../../images/making/slideshow/improvisation/2.png';
import improvisation3 from '../../images/making/slideshow/improvisation/3.jpg';
import improvisation4 from '../../images/making/slideshow/improvisation/4.jpg';
import improvisation5 from '../../images/making/slideshow/improvisation/5.jpg';
import improvisation6 from '../../images/making/slideshow/improvisation/6.jpg';
import improvisation7 from '../../images/making/slideshow/improvisation/7.jpg';
import improvisation8 from '../../images/making/slideshow/improvisation/8.jpg';

import improvisationVideo1 from '../../images/making/videos/improvisation/improvisation.mp4';

import improvisationVideoBackground1 from '../../images/making/slideshow/improvisation/background_1.png';

//objects
import objects1 from '../../images/making/slideshow/objects/1.jpg';
import objects2 from '../../images/making/slideshow/objects/2.jpg';
import objects3 from '../../images/making/slideshow/objects/3.jpg';
import objects4 from '../../images/making/slideshow/objects/4.jpg';
import objects5 from '../../images/making/slideshow/objects/5.jpg';
import objects6 from '../../images/making/slideshow/objects/6.jpg';
import objects7 from '../../images/making/slideshow/objects/7.jpg';


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
    name: "Camera",
    id: 1,
    display: atom(false),
    images: [
        new ImageClass(camera1, "Camera 1", 759, 0, 0),
        new ImageClass(camera2, "Camera 2", 418, 0+759, 50),
        new ImageClass(camera3, "Camera 3", 759, 0+759+418, 0),
        new ImageClass(camera4, "Camera 4", 715, 0+759+418+759, 70),
        new ImageClass(camera5, "Camera 5", 759, 2651, 0),
        new ImageClass(camera6, "Camera 6", 418, 2651+759, 50),
        new ImageClass(camera7, "Camera 7", 759, 2651+759+418, 0),
        new ImageClass(camera8, "Camera 8", 715, 2651+759+418+759, 70),
        new ImageClass(camera9, "Camera 9",759, 5302, 0),
    ],
    videos: [
        new VideoClass(cameraVideo1, "Camera Video 1", 650, 50, 506, cameraVideoBackground1, '1'),
    ],
    slideshowWidth: 6500,
  },
  {
    name: "Improvisation",
    id: 2,
    display: atom(false),
    images: [
        new ImageClass(improvisation1, "Improvisation 1", 759, 0, 0),
        new ImageClass(improvisation2, "Improvisation 2", 418, 0+759, 50),
        new ImageClass(improvisation3, "Improvisation 3", 759, 0+759+418, 0),
        new ImageClass(improvisation4, "Improvisation 4", 715, 0+759+418+759, 70),
        new ImageClass(improvisation5, "Improvisation 5", 759, 2651, 0),
        new ImageClass(improvisation6, "Improvisation 6", 418, 2651+759, 50),
        new ImageClass(improvisation7, "Improvisation 7", 759, 2651+759+418, 0),
        new ImageClass(improvisation8, "Improvisation 8", 715, 2651+759+418+759, 70),
    ],
    videos: [
        new VideoClass(improvisationVideo1, "Improvisation Video 1", 650, 50, 506, improvisationVideoBackground1, '2'),
    ],
    slideshowWidth: 5302,
  },
  {
    name: "Objects",
    id: 3,
    display: atom(false),
    images: [
        new ImageClass(objects1, "Objects 1", 759, 0, 0),
        new ImageClass(objects2, "Objects 2", 418, 0+759, 50),
        new ImageClass(objects3, "Objects 3", 759, 0+759+418, 0),
        new ImageClass(objects4, "Objects 4", 715, 0+759+418+759, 70),
        new ImageClass(objects5, "Objects 5", 759, 2651, 0),
        new ImageClass(objects6, "Objects 6", 418, 2651+759, 50),
        new ImageClass(objects7, "Objects 7", 759, 2651+759+418, 0),
    ],
    slideshowWidth: 2651,
  }
];
