import { atom } from "nanostores";
import { ImageClass, itemListType } from "./helpers";
//gati
import gati1 from '../../images/teaching/slideshow/performances/gati/1.jpg';
import gati2 from '../../images/teaching/slideshow/performances/gati/2.jpg';

//srishti
import srishti1 from '../../images/teaching/slideshow/performances/srishti/1.jpg';
import srishti2 from '../../images/teaching/slideshow/performances/srishti/2.jpg';

//theatreworks
import theatreworks1 from '../../images/teaching/slideshow/performances/theatreworks/1.jpg';
import theatreworks2 from '../../images/teaching/slideshow/performances/theatreworks/2.jpg';


//mummy
import mummy1 from '../../images/teaching/slideshow/mummy/1.jpg';
import mummy2 from '../../images/teaching/slideshow/mummy/2.jpg';
import mummy3 from '../../images/teaching/slideshow/mummy/3.jpg';



export let stage = atom(0);

export const teachingList:Array<itemListType> = [
    {
        name: "Mummy",
        
        id: 1,
        text: [
          "Mummy was a devised theatre piece created by students of the National School of Drama, New Delhi",
        ],
        display: atom(false),
        images: [
            new ImageClass(mummy1, "Mummy 1", 759, 481, 0, 0),
            new ImageClass(mummy2, "Mummy 2", 418, 332, 0+759, 50),
            new ImageClass(mummy3, "Mummy 3", 759, 730, 0+759+418, 0),
        ],
        slideshowWidth: 2000,
      },
]

export const itemList:Array<itemListType> = [
  {
    name: "Gati",
    id: 1,
    display: atom(false),
    images: [
        new ImageClass(gati1, "Gati 1", 759, 481, 0, 0),
        new ImageClass(gati2, "Gati 2", 418, 332, 0+759, 50),
        
    ],
    slideshowWidth: 1000,
  },
  {
    name: "Srishti",
    id: 2,
    display: atom(false),
    images: [
        new ImageClass(srishti1, "Srishti 1", 759, 481, 0, 0),
        new ImageClass(srishti2, "Srishti 2", 418, 332, 0+759, 50),
    ],
    slideshowWidth: 1200,
  },
  {
    name: "Theatreworks",
    id: 3,
    display: atom(false),
    images: [
        new ImageClass(theatreworks1, "Theatreworks 1", 759, 481, 0, 0),
        new ImageClass(theatreworks2, "Theatreworks 2", 418, 332, 0+759, 50),
        
    ],
    slideshowWidth: 1200,
  },

];
