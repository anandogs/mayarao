import { atom } from "nanostores";
import type { itemListType } from "./helpers";
import { ImageClass, VideoClass } from "./helpers";


//om_swaha
import omswaha1 from '../../images/street_theatre/slideshow/om_swaha/1.jpg';
import omswaha2 from '../../images/street_theatre/slideshow/om_swaha/2.jpg';
import omswaha3 from '../../images/street_theatre/slideshow/om_swaha/3.jpg';
import omswaha4 from '../../images/street_theatre/slideshow/om_swaha/4.jpg';
import omswaha5 from '../../images/street_theatre/slideshow/om_swaha/5.jpg';

//dafa
import dafa1 from '../../images/street_theatre/slideshow/dafa/1.jpg';
import dafa2 from '../../images/street_theatre/slideshow/dafa/2.jpg';

//walk
import walk1 from '../../images/street_theatre/slideshow/walk/1.jpg';
import walk2 from '../../images/street_theatre/slideshow/walk/2.jpg';
import walk3 from '../../images/street_theatre/slideshow/walk/3.jpg';
import walk4 from '../../images/street_theatre/slideshow/walk/4.jpg';
import walk5 from '../../images/street_theatre/slideshow/walk/5.jpg';

import walkVideo1 from '../../images/street_theatre/videos/walk/walk1.mp4';
import walkVideo2 from '../../images/street_theatre/videos/walk/walk2.mp4';

import walkVideoBackground1 from '../../images/street_theatre/slideshow/walk/background_1.png';
import walkVideoBackground2 from '../../images/street_theatre/slideshow/walk/background_2.png';

//rti
import rti1 from '../../images/street_theatre/slideshow/rti/1.jpg';
import rti2 from '../../images/street_theatre/slideshow/rti/2.jpg';

import rtiVideo1 from '../../images/street_theatre/videos/rti/rti.mp4';

import rtiVideoBackground1 from '../../images/street_theatre/slideshow/rti/background_1.png';

//not_in_my_name
import notInMyName1 from '../../images/street_theatre/slideshow/not_in_my_name/1.jpg';
import notInMyName2 from '../../images/street_theatre/slideshow/not_in_my_name/2.jpg';
import notInMyName3 from '../../images/street_theatre/slideshow/not_in_my_name/4.jpg';
import notInMyName4 from '../../images/street_theatre/slideshow/not_in_my_name/3.jpg';

//artists_unite
import artistsUnite1 from '../../images/street_theatre/slideshow/artists_unite/1.jpg';
import artistsUnite2 from '../../images/street_theatre/slideshow/artists_unite/2.jpg';
import artistsUnite3 from '../../images/street_theatre/slideshow/artists_unite/3.jpg';
import artistsUnite4 from '../../images/street_theatre/slideshow/artists_unite/4.jpg';

import artistsUniteVideo1 from '../../images/street_theatre/videos/artists_unite/artists_unite.mp4';

import artistsUniteVideoBackground1 from '../../images/street_theatre/slideshow/artists_unite/background_1.png';

//shaheen_bagh
import shaheenBagh1 from '../../images/street_theatre/slideshow/shaheen_bagh/1.jpg';
import shaheenBagh2 from '../../images/street_theatre/slideshow/shaheen_bagh/2.jpg';
import shaheenBagh3 from '../../images/street_theatre/slideshow/shaheen_bagh/3.jpg';
import shaheenBagh4 from '../../images/street_theatre/slideshow/shaheen_bagh/4.jpg';
import shaheenBagh5 from '../../images/street_theatre/slideshow/shaheen_bagh/5.jpg';

import shaheenBaghVideo1 from '../../images/street_theatre/videos/shaheen_bagh/shaheen_bagh1.mp4';
import shaheenBaghVideo2 from '../../images/street_theatre/videos/shaheen_bagh/shaheen_bagh2.mp4';

import shaheenBaghVideoBackground1 from '../../images/street_theatre/slideshow/shaheen_bagh/background_1.png';
import shaheenBaghVideoBackground2 from '../../images/street_theatre/slideshow/shaheen_bagh/background_2.png';

//farmers_strike
import farmersStrike1 from '../../images/street_theatre/slideshow/farmers_strike/1.jpg';

import farmersStrikeVideo1 from '../../images/street_theatre/videos/farmers_strike/farmers_strike.mp4';

import farmersStrikeVideoBackground1 from '../../images/street_theatre/slideshow/farmers_strike/background_1.png';

// new ImageClass(loosewoman1, "Loose Woman 1", 759, 481, 0, 0),
// new ImageClass(loosewoman2, "Loose Woman 2", 418, 332, 0+759, 50),
// new ImageClass(loosewoman3, "Loose Woman 3", 759, 730, 0+759+418, 0),
// new ImageClass(loosewoman4, "Loose Woman 4", 715, 477, 0+759+418+759, 70),
// new ImageClass(loosewoman5, "Loose Woman 5", 759, 481, 2651, 0),
// new ImageClass(loosewoman6, "Loose Woman 6", 418, 332, 2651+759, 50),
// new ImageClass(loosewoman7, "Loose Woman 7", 759, 730, 2651+759+418, 0),
// new ImageClass(loosewoman8, "Loose Woman 8", 715, 477, 2651+759+418+759, 70),



export const itemList:Array<itemListType> = [
  {
    name: "Om Swaha",
    metadata: {
      year: 1979,
    },
    id: 1,
    text: [
      "In the late 1970s, the increasing number of incidents of deaths arising from dowry demands and harassment of the wife and her family were hitting headlines in the daily newspapers in Delhi. Some women's organisations got together and requested Maya to create a street play to raise awareness among the public.  Theatre director, Anuradha Kapur was invited and together, they set up improvisations with the women activists and male sympathisers who joined in. They scripted, directed and took on multiple roles in OM SWAHA, a play created around a real-life story.  The play travelled to several cities and towns in India and was translated into 13 Indian languages."
    ],
    display: atom(false),
    images: [
        new ImageClass(omswaha1, "Om Swaha 1", 759, 481, 0, 0),
        new ImageClass(omswaha2, "Om Swaha 2", 418, 332, 0+759, 50),
        new ImageClass(omswaha3, "Om Swaha 3", 759, 730, 0+759+418, 0),
        new ImageClass(omswaha4, "Om Swaha 4", 715, 477, 0+759+418+759, 70),
        new ImageClass(omswaha5, "Om Swaha 5", 759, 481, 2651, 0),
        
    ],
    slideshowWidth: 3500,
  },
  {
    name: "Dafa No. 180",
    metadata: {
      year: 1981,
    },
    id: 2,
    text: [
      "Dafa No. 180 After the overwhelming public response to Om Swaha, some of the performers decided to create a street theatre group. THEATRE UNION was born in late 1979. The group, in response to debates then going on in parliament created a street play,  DAFA NO. 180 to look at the issue of punishment for rape."
    ],
    display: atom(false),
    images: [
        new ImageClass(dafa1, "Dafa No. 180 1", 759, 481, 0, 0),
        new ImageClass(dafa2, "Dafa No. 180 2", 418, 332, 0+759, 50),
    ],
    slideshowWidth: 1518,
  },
  {
    name: "Walk",
    metadata: {
      year: 2012,
    },
    id: 3,
    text: [
      "Walk was created in response to the horrific gang rape of Jyoti Singh in a moving bus on Dec. 16, 2012 in Delhi, that shook people in India and the world beyond. For days young people poured out on to the streets and marched in Delhi and other cities and towns.",
      "On Dec. 30 Maya received a call from the Jawaharlal Nehru University, Delhi, inviting her to express a response through a performance on Dec. 31 - the very next day.  So, Walk was created in a few hours",
      "Possibly, because the event was so hard hitting, the piece came from a deeply quiet, reflective space.",
      "Walk simply draws the audience in to think, to reflect, to walk the city, everywhere, anytime to make it your own, for Jyoti  and all of us.",
      "Walk has done several performances in schools, colleges, on the street, offices, and living rooms - in small and big spaces. It has travelled to the US and UK.",
      "Over time, the content of Walk has changed in response to fresh events, changing attitudes and the nature of the event and audience it has been performed for. Part of it is even improvised during the performance.",
      "Walk went viral and within the first weeks of its creation, received more than 15,000 hits on social media"
    ],
    display: atom(false),
    images: [
        new ImageClass(walk1, "Walk 1", 759, 481, 0, 0),
        new ImageClass(walk2, "Walk 2", 418, 332, 0+759, 50),
        new ImageClass(walk3, "Walk 3", 759, 730, 0+759+418, 0),
        new ImageClass(walk4, "Walk 4", 715, 477, 0+759+418+759, 70),
        new ImageClass(walk5, "Walk 5", 759, 481, 2651, 0),

    ],
    videos: [
        new VideoClass(walkVideo1, "Walk Video 1", 650, 379, 298, 481, walkVideoBackground1, "walkVideo1"),
        new VideoClass(walkVideo2, "Walk Video 2", 650, 379, 1900, 481, walkVideoBackground2, "walkVideo2"),
    ],
    slideshowWidth: 3500,
  },
  {
    name: "RTI",
    metadata: {
      year: 2017,
    },
    id: 4,
    text: [
      "Right to Information Act, National Convention, 2017. The central motif of this piece was of a boat that will not sink even though it carries 60 lakhs of people. That’s the number of people who – upto 2017 - had sought information from the government under this Act. That boat will remain buoyant and will sink, instead, the false claims the government makes."
    ],
    display: atom(false),
    images: [
        new ImageClass(rti1, "RTI 1", 759, 481, 0, 0),
        new ImageClass(rti2, "RTI 2", 418, 332, 0+759, 50),
    ],
    videos: [
        new VideoClass(rtiVideo1, "RTI Video 1", 650, 379, 298, 481, rtiVideoBackground1, "rtiVideo1"),
    ],
    slideshowWidth: 1518,
  },
  {
    name: "Not In My Name",
    metadata: {
      year: 2018,
    },
    id: 5,
    text: [
      'Over time, Maya has made different performances to protest the killings of Muslims over cow slaughter. These have been performed in different kinds of spaces – on the street and in auditoria. “In the name of my cow, you drive a knife right through me?”'
    ],
    display: atom(false),
    images: [
        new ImageClass(notInMyName1, "Not In My Name 1", 759, 481, 0, 0),
        new ImageClass(notInMyName2, "Not In My Name 2", 418, 332, 0+759, 50),
        new ImageClass(notInMyName3, "Not In My Name 3", 759, 730, 0+759+418, 0),
        new ImageClass(notInMyName4, "Not In My Name 4", 715, 477, 0+759+418+759, 70),
    ],
    slideshowWidth: 3000,

  },
  {
    name: "Artists Unite!",
    metadata: {
      year: 2019,
    },
    id: 6,
    text: [
      "A performance at Lal Qila (Red Fort), Delhi, as part of a large number of artists expressing dissent over three days against the government’s anti-people policies. The walls of the fort formed the backdrop, behind which, many Indians had been tried for sedition during British rule in India. More than sixty years later - the performance noted - sedition was still being used as a weapon of the state against its people "
    ],
    display: atom(false),
    images: [
        new ImageClass(artistsUnite1, "Artists Unite 1", 759, 481, 0, 0),
        new ImageClass(artistsUnite2, "Artists Unite 2", 418, 322, 0+759, 50),
        new ImageClass(artistsUnite3, "Artists Unite 3", 759, 730, 0+759+418, 0),
        new ImageClass(artistsUnite4, "Artists Unite 4", 715, 477, 0+759+418+759, 70),
    ],
    videos: [
        new VideoClass(artistsUniteVideo1, "Artists Unite Video 1", 650, 379, 298, 481, artistsUniteVideoBackground1, "artistsUniteVideo1"),
    ],
    slideshowWidth: 3000,
  },
  {
    name: "Shaheen Bagh",
    metadata: {
      year: 2019,
    },
    id: 7,
    text: [
      "The amazing sit in by Muslim women for more than three months against the government’s denial of citizenship rights. Maya performed at protest sites spread across the city of Delhi. At the end of the performance, several veils, previously collected from the women on protest, were tied to create long ropes that were then thrown into the audience that the women held and moved with."
    ],
    display: atom(false),
    images: [
      new ImageClass(shaheenBagh1, "Shaheen Bagh 1", 759, 481, 0, 0),
      new ImageClass(shaheenBagh2, "Shaheen Bagh 2", 418, 322, 0+759, 50),
      new ImageClass(shaheenBagh3, "Shaheen Bagh 3", 759, 730, 0+759+418, 0),
      new ImageClass(shaheenBagh4, "Shaheen Bagh 4", 715, 477, 0+759+418+759, 70),
      new ImageClass(shaheenBagh5, "Shaheen Bagh 5", 759, 481, 2651, 0),
    ],
    videos: [
      new VideoClass(shaheenBaghVideo1, "Shaheen Bagh Video 1", 650, 379, 298, 481, shaheenBaghVideoBackground1, "shaheenBaghVideo1"),
      new VideoClass(shaheenBaghVideo2, "Shaheen Bagh Video 2", 650, 379, 1900, 481, shaheenBaghVideoBackground2, "shaheenBaghVideo2"),
    ],
    slideshowWidth:3500,
  },
  {
    name: "The Preamble",
    metadata: {
      year: 2019,
    },
    id: 8,
    text: [
      "To mark Womens’ Day in 2019, Maya slowly wrapped a sari around herself out on the street even as she picked out the essential freedoms of every citizen enshrined in the constitution"
    ],
    slideshowWidth:0,
    display: atom(false),
  },
  {
    name: "Farmers Strike",
    metadata: {
      year: 2021,
    },
    id: 9,
    text: [
      "To protest the anti-farmer laws of the government, thousands of farmers, largely from Punjab, come to the borders of the capital and lived in their trucks for seven months, “knocking on the doors of Delhi….open up, Mr Modi, we won’t budge till you let us in…”. Maya performed for more than 70,000 women farmers at Tikri on Womens’ Day, 2021"
    ],
    display: atom(false),
    images: [
      new ImageClass(farmersStrike1, "Farmers Strike", 759, 481, 0, 0),
    ],
    videos: [
      new VideoClass(farmersStrikeVideo1, "Farmers Strike Video 1", 650, 379, 298, 481, farmersStrikeVideoBackground1, "farmerStrikeVideo1"),
    ],
    slideshowWidth: 1000,
  },
];
