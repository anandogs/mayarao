import { atom, WritableAtom } from "nanostores";
import type { itemListType } from "./helpers";
import { ImageClass, VideoClass } from "./helpers";

//heiretikos
import heiretikos1 from '../../images/applied_theatre/slideshow/heiretikos/1.jpg';
import heiretikos2 from '../../images/applied_theatre/slideshow/heiretikos/2.jpg';
import heiretikos3 from '../../images/applied_theatre/slideshow/heiretikos/3.jpg';
import heiretikos4 from '../../images/applied_theatre/slideshow/heiretikos/4.jpg';

//igloo_igloo
import iglooIgloo1 from '../../images/applied_theatre/slideshow/igloo_igloo/1.jpg';
import iglooIgloo2 from '../../images/applied_theatre/slideshow/igloo_igloo/2.jpg';
import iglooIgloo3 from '../../images/applied_theatre/slideshow/igloo_igloo/3.jpg';
import iglooIgloo4 from '../../images/applied_theatre/slideshow/igloo_igloo/4.jpg';

//razia
import razia1 from '../../images/applied_theatre/slideshow/razia/1.jpg';
import razia2 from '../../images/applied_theatre/slideshow/razia/2.jpg';
import razia3 from '../../images/applied_theatre/slideshow/razia/3.jpg';
import razia4 from '../../images/applied_theatre/slideshow/razia/4.jpg';
import razia5 from '../../images/applied_theatre/slideshow/razia/5.jpg';
import razia6 from '../../images/applied_theatre/slideshow/razia/6.jpg';

//sciva_and_jagli
import scivaAndJagli1 from '../../images/applied_theatre/slideshow/sciva_and_jagli/1.jpg';
import scivaAndJagli2 from '../../images/applied_theatre/slideshow/sciva_and_jagli/2.jpg';
import scivaAndJagli3 from '../../images/applied_theatre/slideshow/sciva_and_jagli/3.jpg';
import scivaAndJagli4 from '../../images/applied_theatre/slideshow/sciva_and_jagli/4.jpg';

//pandita_ramabai
import panditaRamabai1 from '../../images/applied_theatre/slideshow/pandita_ramabai/1.jpg';
import panditaRamabai2 from '../../images/applied_theatre/slideshow/pandita_ramabai/2.jpg';
import panditaRamabai3 from '../../images/applied_theatre/slideshow/pandita_ramabai/3.jpg';
import panditaRamabai4 from '../../images/applied_theatre/slideshow/pandita_ramabai/4.jpg';
import panditaRamabai5 from '../../images/applied_theatre/slideshow/pandita_ramabai/5.jpg';

//teaching_teachers
import teachingTeachers1 from '../../images/applied_theatre/slideshow/teaching_teachers/1.jpg';
import teachingTeachers2 from '../../images/applied_theatre/slideshow/teaching_teachers/2.jpg';
import teachingTeachers3 from '../../images/applied_theatre/slideshow/teaching_teachers/3.jpg';
import teachingTeachers4 from '../../images/applied_theatre/slideshow/teaching_teachers/4.jpg';


export let stage = atom(0);

export const teachingList:Array<itemListType> = [
    {
        name: "Teacher Education",
        
        id: 1,
        text: [
          "Maya has worked with teachers in Delhi schools, the focus being on how to create imaginary worlds within the classroom that the teacher can generate and the children can learn from experientially. ",
        ],
        display: atom(false),
        images: [
            new ImageClass(teachingTeachers1, "Teaching Teachers 1", 759, 481, 0, 0),
            new ImageClass(teachingTeachers2, "Teaching Teachers 2", 418, 332, 0+759, 50),
            new ImageClass(teachingTeachers3, "Teaching Teachers 3", 759, 730, 0+759+418, 0),
            new ImageClass(teachingTeachers4, "Teaching Teachers 4", 715, 477, 0+759+418+759, 70),
        ],
        slideshowWidth: 2651,
      },
]

export const itemList:Array<itemListType> = [
  {
    name: "Heiretikos",
    metadata: {
      year: 1984,
    },
    id: 1,
    text: [
      "Heiretikos, participatory programme for high school students on identity and sexuality, devised with Leeds Playhouse Theatre-in-Education Company, Leeds, UK",
    ],
    display: atom(false),
    images: [
        new ImageClass(heiretikos1, "Heiretikos 1", 759, 481, 0, 0),
        new ImageClass(heiretikos2, "Heiretikos 2", 418, 332, 0+759, 50),
        new ImageClass(heiretikos3, "Heiretikos 3", 759, 730, 0+759+418, 0),
        new ImageClass(heiretikos4, "Heiretikos 4", 715, 477, 0+759+418+759, 70),
    ],
    slideshowWidth: 2651,
  },
  {
    name: "Igloo Igloo",
    metadata: {
        year: 2003,
    },
    id: 2,
    text: [
        "Participatory programme for 10-year olds on life of the Inuits, in harsh climactic conditions. Devised with members of National School of Drama TIE Company, New Delhi."
    ],
    display: atom(false),
    images: [
        new ImageClass(iglooIgloo1, "Igloo Igloo 1", 759, 481, 0, 0),
        new ImageClass(iglooIgloo2, "Igloo Igloo 2", 418, 332, 0+759, 50),
        new ImageClass(iglooIgloo3, "Igloo Igloo 3", 759, 730, 0+759+418, 0),
        new ImageClass(iglooIgloo4, "Igloo Igloo 4", 715, 477, 0+759+418+759, 70),
    ],
    slideshowWidth: 2651,
  },
  {
    name: "razia",
    metadata: {
        year: 2004,
    },
    id: 3,
    text: [
        "A participatory programme for 12 year olds around medieval Indian history and Razia, first queen of northern India"
    ],
    display: atom(false),
    images: [
        new ImageClass(razia1, "razia 1", 759, 481, 0, 0),
        new ImageClass(razia2, "razia 2", 418, 332, 0+759, 50),
        new ImageClass(razia3, "razia 3", 759, 730, 0+759+418, 0),
        new ImageClass(razia4, "razia 4", 715, 477, 0+759+418+759, 70),
        new ImageClass(razia5, "razia 5", 759, 481, 2651, 0),
        new ImageClass(razia6, "razia 6", 418, 332, 2651+759, 50),
    ],
    slideshowWidth: 5310,
  },
  {
    name: "Sciva and Jagli",
    metadata: {
        year: 2008,
    },
    id: 4,
    text: [
        "A participatory programme for 10+ years about how we generate and even perpetuate divisiveness amongst ourselves, without realising it",
    ],
    display: atom(false),
    images: [
        new ImageClass(scivaAndJagli1, "Sciva and Jagli 1", 759, 481, 0, 0),
        new ImageClass(scivaAndJagli2, "Sciva and Jagli 2", 418, 332, 0+759, 50),
        new ImageClass(scivaAndJagli3, "Sciva and Jagli 3", 759, 730, 0+759+418, 0),
        new ImageClass(scivaAndJagli4, "Sciva and Jagli 4", 715, 477, 0+759+418+759, 70),
    ],
    slideshowWidth: 2651,

  },
  {
    name: "Pandita Ramabai",
    metadata: {
        year: 2009,
    },
    id: 5,
    text: [
        "Colonial India as seen through the eyes of the amazing trail blazer and educator, Pandita Ramabai. Devised with members of National School of Drama TIE Company, New Delhi."
    ],
    display: atom(false),
    images: [
        new ImageClass(panditaRamabai1, "Pandita Ramabai 1", 759, 481, 0, 0),
        new ImageClass(panditaRamabai2, "Pandita Ramabai 2", 418, 332, 0+759, 50),
        new ImageClass(panditaRamabai3, "Pandita Ramabai 3", 759, 730, 0+759+418, 0),
        new ImageClass(panditaRamabai4, "Pandita Ramabai 4", 715, 477, 0+759+418+759, 70),
        new ImageClass(panditaRamabai5, "Pandita Ramabai 5", 759, 481, 2651, 0),
    ],
    slideshowWidth: 3599,
  }

];
