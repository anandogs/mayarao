import { atom, WritableAtom } from "nanostores";
import looseWoman1 from "/src/images/productions/slideshow/loose_woman/1.jpg";
import looseWoman2 from "/src/images/productions/slideshow/loose_woman/2.jpg";
import looseWoman3 from "/src/images/productions/slideshow/loose_woman/3.jpg";
import looseWoman4 from "/src/images/productions/slideshow/loose_woman/4.jpg";
import looseWoman5 from "/src/images/productions/slideshow/loose_woman/5.jpg";
import looseWoman6 from "/src/images/productions/slideshow/loose_woman/6.jpg";
import looseWoman7 from "/src/images/productions/slideshow/loose_woman/7.jpg";
import looseWoman8 from "/src/images/productions/slideshow/loose_woman/8.jpg";
import looseWoman9 from "/src/images/productions/slideshow/loose_woman/9.jpg";

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
        new ImageClass("/src/images/productions/slideshow/loose_woman/1.jpg", "Loose Woman 1", 759, 0, 0),
        new ImageClass("/src/images/productions/slideshow/loose_woman/2.jpg", "Loose Woman 2", 418, 0+759, 50),
        new ImageClass("/src/images/productions/slideshow/loose_woman/3.jpg", "Loose Woman 3", 759, 0+759+418, 0),
        new ImageClass("/src/images/productions/slideshow/loose_woman/4.jpg", "Loose Woman 4", 715, 0+759+418+759, 70),
        new ImageClass("/src/images/productions/slideshow/loose_woman/5.jpg", "Loose Woman 5", 759, 2651, 0),
        new ImageClass("/src/images/productions/slideshow/loose_woman/6.jpg", "Loose Woman 6", 418, 2651+759, 50),
        new ImageClass("/src/images/productions/slideshow/loose_woman/7.jpg", "Loose Woman 7", 759, 2651+759+418, 0),
        new ImageClass("/src/images/productions/slideshow/loose_woman/8.jpg", "Loose Woman 8", 715, 2651+759+418+759, 70),
    ],
  },

];
