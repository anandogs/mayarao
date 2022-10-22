import { atom, WritableAtom } from "nanostores";

//heiretikos
import heiretikos1 from '../../images/applied_theatre/slideshow/heiretikos/1.jpg';
import heiretikos2 from '../../images/applied_theatre/slideshow/heiretikos/2.jpg';
import heiretikos3 from '../../images/applied_theatre/slideshow/heiretikos/3.jpg';
import heiretikos4 from '../../images/applied_theatre/slideshow/heiretikos/4.jpg';

//kathakali
import kathakali1 from '../../images/kathakali/slideshow/1.jpg';
import kathakali2 from '../../images/kathakali/slideshow/2.jpg';
import kathakali3 from '../../images/kathakali/slideshow/3.jpg';
import kathakali4 from '../../images/kathakali/slideshow/4.jpg';
import kathakali5 from '../../images/kathakali/slideshow/5.jpg';
import kathakali6 from '../../images/kathakali/slideshow/6.jpg';
import kathakali7 from '../../images/kathakali/slideshow/7.jpg';
import kathakali8 from '../../images/kathakali/slideshow/8.jpg';

import kathakaliVideo1 from '../../images/kathakali/videos/kathakali.mp4'

import kathakaliBackground1 from '../../images/kathakali/slideshow/background_1.png';



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


export const itemList:Array<itemListType> = [
  {
    name: "Kathakali",
    id: 1,
    text: [
      "Kathakali is a dance theatre form from Kerala in southern India. The performer is trained to both act and dance. The training scheme is long and elaborate. At 7, Maya started learning it both in Kerala and New Delhi. Her first teacher, Guru Mampuzha Madhava Panicker, chose  to teach her the male role - the real cream of Kathakali. Later, she trained for long years with Guru Sadanam Balakrishnan. Kathakali has been a deep inspiration for Maya in the making of contemporary performances and teaching.",
    ],
    display: atom(false),
    images: [
        new ImageClass(kathakali1, "Kathakali 1", 759, 0, 0),
        new ImageClass(kathakali2, "Kathakali 2", 418, 0+759, 50),
        new ImageClass(kathakali3, "Kathakali 3", 759, 0+759+418, 0),
        new ImageClass(kathakali4, "Kathakali 4", 715, 0+759+418+759, 70),
        new ImageClass(kathakali5, "Kathakali 5", 759, 2651, 0),
        new ImageClass(kathakali6, "Kathakali 6", 418, 2651+759, 50),
        new ImageClass(kathakali7, "Kathakali 7", 759, 2651+759+418, 0),
        new ImageClass(kathakali8, "Kathakali 8", 715, 2651+759+418+759, 70),
    ],
    videos: [
        new VideoClass(kathakaliVideo1, "Kathakali Video 1", 650, 0, 506, kathakaliBackground1, '1'),
    ],
    slideshowWidth: 5500,
  },

];
