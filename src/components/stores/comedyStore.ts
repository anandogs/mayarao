import { atom, WritableAtom } from "nanostores";

import bodyMakeover1 from '../../images/comedy/slideshow/body_makeover/1.png';
import bodyMakeover2 from '../../images/comedy/slideshow/body_makeover/2.jpg';
import bodyMakeover3 from '../../images/comedy/slideshow/body_makeover/3.jpg';
import bodyMakeover4 from '../../images/comedy/slideshow/body_makeover/4.jpg';

// cooking
import cooking1 from '../../images/comedy/slideshow/cooking/1.jpg';
import cooking2 from '../../images/comedy/slideshow/cooking/2.jpg';
import cooking3 from '../../images/comedy/slideshow/cooking/3.jpg';

//dinner_table
import dinnerTable1 from '../../images/comedy/slideshow/dinner_table/1.jpg';
import dinnerTable2 from '../../images/comedy/slideshow/dinner_table/2.jpg';
import dinnerTable3 from '../../images/comedy/slideshow/dinner_table/3.jpg';

//jogger
import jogger1 from '../../images/comedy/slideshow/jogger/1.jpg';
import jogger2 from '../../images/comedy/slideshow/jogger/2.jpg';
import jogger3 from '../../images/comedy/slideshow/jogger/3.jpg';
import jogger4 from '../../images/comedy/slideshow/jogger/4.jpg';
import jogger5 from '../../images/comedy/slideshow/jogger/5.jpg';

//mamta
import mamta1 from '../../images/comedy/slideshow/mamta/1.jpg';
import mamta2 from '../../images/comedy/slideshow/mamta/2.jpg';
import mamta3 from '../../images/comedy/slideshow/mamta/3.jpg';
import mamta4 from '../../images/comedy/slideshow/mamta/4.jpg';

//melon_woman
import melonWoman1 from '../../images/comedy/slideshow/melon_woman/1.jpg';
import melonWoman2 from '../../images/comedy/slideshow/melon_woman/2.jpg';
import melonWoman3 from '../../images/comedy/slideshow/melon_woman/3.jpg';

//paru
import paru1 from '../../images/comedy/slideshow/paru/1.jpg';
import paru2 from '../../images/comedy/slideshow/paru/2.jpg';
import paru3 from '../../images/comedy/slideshow/paru/3.jpg';


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
        new ImageClass(paru2, "Paru", 418, 0+759, 50),
        new ImageClass(paru3, "Paru", 759, 0+759+418, 0),
    ],

    slideshowWidth: 2500,
  },
  {
    name: "Dinner Table",
    id: 2,
    display: atom(false),
    images: [
        new ImageClass(dinnerTable1, "Dinner Table 1", 759, 0, 0),
        new ImageClass(dinnerTable2, "Dinner Table 2", 759, 0+759, 0),
        new ImageClass(dinnerTable3, "Dinner Table 3", 759, 0+759+759, 0),
    ],
    slideshowWidth: 2500,
  },
  {
    name: "Melon Woman",
    id: 3,
    display: atom(false),
    images: [
        new ImageClass(melonWoman1, "Melon Woman 1", 759, 0, 0),
        new ImageClass(melonWoman2, "Melon Woman 2", 759, 0+759, 0),
        new ImageClass(melonWoman3, "Melon Woman 3", 759, 0+759+759, 0),
    ],
    slideshowWidth: 2500,

  },
  {
    name: "Jogger",
    id: 4,
    display: atom(false),
    images: [
        new ImageClass(jogger1, "Jogger 1", 759, 0, 0),
        new ImageClass(jogger2, "Jogger 2", 759, 0+759, 0),
        new ImageClass(jogger3, "Jogger 3", 759, 0+759+759, 0),
        new ImageClass(jogger4, "Jogger 4", 759, 0+759+759+759, 0),
        new ImageClass(jogger5, "Jogger 5", 759, 0+759+759+759+759, 0),
    ],
    slideshowWidth: 3000,
  },
  {
    name: "Body Makeover",
    id: 5,
    display: atom(false),
    images: [
        new ImageClass(bodyMakeover1, "Body Makeover 1", 759, 0, 0),
        new ImageClass(bodyMakeover2, "Body Makeover 2", 759, 0+759, 0),
        new ImageClass(bodyMakeover3, "Body Makeover 3", 759, 0+759+759, 0),
        new ImageClass(bodyMakeover4, "Body Makeover 4", 759, 0+759+759+759, 0),
    ],
    slideshowWidth: 2500,
  },
  {
    name: "Cooking",
    id: 6,
    display: atom(false),
    images: [
        new ImageClass(cooking1, "Cooking 1", 759, 0, 0),
        new ImageClass(cooking2, "Cooking 2", 759, 0+759, 0),
        new ImageClass(cooking3, "Cooking 3", 759, 0+759+759, 0),
    ],
    slideshowWidth: 2500,
  },
  {
    name: "Mamta",
    id: 7,
    display: atom(false),
    images: [
        new ImageClass(mamta1, "Mamta 1", 759, 0, 0),
        new ImageClass(mamta2, "Mamta 2", 759, 0+759, 0),
        new ImageClass(mamta3, "Mamta 3", 759, 0+759+759, 0),
        new ImageClass(mamta4, "Mamta 4", 759, 0+759+759+759, 0),
    ],
    slideshowWidth: 3000,
  },


];
