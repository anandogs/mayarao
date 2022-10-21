import { atom, WritableAtom } from "nanostores";

// loose woman imports --- these will go away once we have a cms

import loosewoman1 from '../../images/productions/slideshow/loose_woman/1.jpg';
import loosewoman2 from '../../images/productions/slideshow/loose_woman/2.jpg';
import loosewoman3 from '../../images/productions/slideshow/loose_woman/3.jpg';
import loosewoman4 from '../../images/productions/slideshow/loose_woman/4.jpg';
import loosewoman5 from '../../images/productions/slideshow/loose_woman/5.jpg';
import loosewoman6 from '../../images/productions/slideshow/loose_woman/6.jpg';
import loosewoman7 from '../../images/productions/slideshow/loose_woman/7.jpg';
import loosewoman8 from '../../images/productions/slideshow/loose_woman/8.jpg';

import loosewomanVideo1 from '../../images/productions/videos/loose_woman/loose_woman_1.mp4';
import loosewomanVideo2 from '../../images/productions/videos/loose_woman/loose_woman_2.mp4';

import loosewomanVideoBackground1 from '../../images/productions/slideshow/loose_woman/background_1.png';
import loosewomanVideoBackground2 from '../../images/productions/slideshow/loose_woman/background_2.png';

import loosewomanQuote from '../../images/productions/salt.svg'
import loosewomanQuoteMobile from '../../images/productions/salt_mobile.svg'

// non stop feel good show
import nonStop1 from '../../images/productions/slideshow/non_stop/1.jpeg';
import nonStop2 from '../../images/productions/slideshow/non_stop/2.jpeg';
import nonStop3 from '../../images/productions/slideshow/non_stop/3.jpeg';
import nonStop4 from '../../images/productions/slideshow/non_stop/4.png';
import nonStop5 from '../../images/productions/slideshow/non_stop/5.jpeg';
import nonStop6 from '../../images/productions/slideshow/non_stop/6.jpeg';
import nonStop7 from '../../images/productions/slideshow/non_stop/7.jpeg';

import nonStopVideo1 from '../../images/productions/videos/non_stop/non_stop.mp4';

import nonStopVideoBackground1 from '../../images/productions/slideshow/non_stop/background_1.png';


export interface itemListType {
  name: string;
  metadata: {
    year: number;
    credits: Array<Object>;
  };
  id: number;
  text: Array<string>;
  display: WritableAtom;
  images: Array<ImageClass>;
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
    name: "Loose Woman",
    metadata: {
      year: 2018,
      credits: [
        { "Sound Design": "Sumant Balakrishnan" },
        { Voice: "Sudheer Rikhari" },
        { "Video Design": "Santana Issar Anuj Chopra" },
        { Costume: "Pratima Pandey" },
        { Images: "Deepak Kumar" },
        { "Created and Performed By": "Maya Krishna Rao" },
      ],
    },
    id: 1,
    text: [
      "Loose Woman is about the travels of a woman – into and out of herself. To make this show, a performer, a video and a sound designer and a singer, through a series of improvisations, ‘looked for her’ in different places, in different manifestations. The stories that emerged were given an episodic form. They each stand alone, though a loose thread connects all of them.",
      "We see her at home getting ready for office and then, on a whim, stepping out of her cab and disappearing altogether. In ‘Dancer’ she discovers what it means to not walk the straight and narrow but to ‘side-step’. ‘The Line’ jolts her into the realisation of how precious her own looseness really is. And so on...",
    ],
    display: atom(false),
    images: [
        new ImageClass(loosewoman1, "Loose Woman 1", 759, 0, 0),
        new ImageClass(loosewoman2, "Loose Woman 2", 418, 0+759, 50),
        new ImageClass(loosewoman3, "Loose Woman 3", 759, 0+759+418, 0),
        new ImageClass(loosewoman4, "Loose Woman 4", 715, 0+759+418+759, 70),
        new ImageClass(loosewoman5, "Loose Woman 5", 759, 2651, 0),
        new ImageClass(loosewoman6, "Loose Woman 6", 418, 2651+759, 50),
        new ImageClass(loosewoman7, "Loose Woman 7", 759, 2651+759+418, 0),
        new ImageClass(loosewoman8, "Loose Woman 8", 715, 2651+759+418+759, 70),
    ],
    videos: [
        new VideoClass(loosewomanVideo1, "Loose Woman Video 1", 650, 50, 506, loosewomanVideoBackground1, '1'),
        new VideoClass(loosewomanVideo2, "Loose Woman Video 2", 650, 1550, 506, loosewomanVideoBackground2, '2'),
    ],
    slideshowWidth: 5310,
    quote: loosewomanQuote,
    quoteMobile: loosewomanQuoteMobile,
  },
  {
    name: "The-Non-Stop-Feel-Good-Show",
    metadata: {
      year: 2013,
      credits: [
        { "Stage assistance": "Sudheer Rikhari" },
        { Lights: "Sumesh" },
        { Images: "S. Thyagarajan" },
        { Costume: "Pratima Pandey" },
        { "Created and Performed By": "Maya Krishna Rao" },
      ],
    },
    id: 2,
    text: [
      "An unstoppable woman seeks to flee from the best clothes, food, top cars, super lifestyle and murky politics in the hope of making her life more meaningful. Yet, she is an expert on everything. It’s another thing that themes get a little jumbled in her head sometimes. But the final score is always deeply of the spirit and the mind.",
      "The show has episodes – short, sharp, affectionate, sometimes moving glimpses of the urban citizen’s idiosyncrasies and obsessions. Every few minutes she disappears into a dressing room, on stage, and emerges a completely different persona.",
      "The artist, with lightning speed - much like in a Hindi film - takes the audience on a roller coaster ride that goes from the spiritual journey of an NRI jogger to the car- obsessed travails of a beauty expert to an incomparable audio visual ‘autobiography’."
    ],
    display: atom(false),
    images: [
      new ImageClass(nonStop1, "Non Stop 1", 759, 0, 0),
      new ImageClass(nonStop2, "Non Stop 2", 418, 0+759, 50),
      new ImageClass(nonStop3, "Non Stop 3", 759, 0+759+418, 0),
      new ImageClass(nonStop4, "Non Stop 4", 715, 0+759+418+759, 70),
      new ImageClass(nonStop5, "Non Stop 5", 759, 2651, 0),
      new ImageClass(nonStop6, "Non Stop 6", 418, 2651+759, 50),
      new ImageClass(nonStop7, "Non Stop 7", 759, 2651+759+418, 0),
      

    ],
    videos: [
        new VideoClass(nonStopVideo1, "Non Stop Feel Good Show Video", 650, 1000, 506, nonStopVideoBackground1, '1'),
    ],
    slideshowWidth: 5310,
  },

];
