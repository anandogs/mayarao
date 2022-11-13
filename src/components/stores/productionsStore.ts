import { atom } from "nanostores";
import { ImageClass, VideoClass } from "./helpers";

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

//ravanama
import ravanama1 from '../../images/productions/slideshow/ravanama/1.jpg';
import ravanama2 from '../../images/productions/slideshow/ravanama/2.jpg';

import ravanamaVideo1 from '../../images/productions/videos/ravanama/ravanama.mp4';

import ravanamaVideoBackground1 from '../../images/productions/slideshow/ravanama/background_1.png';

//quality_street
import qualityStreet1 from '../../images/productions/slideshow/quality_street/1.jpg';
import qualityStreet2 from '../../images/productions/slideshow/quality_street/2.jpg';

import qualityStreetVideo1 from '../../images/productions/videos/quality_street/quality_street.mp4';

import qualityStreetVideoBackground1 from '../../images/productions/slideshow/quality_street/background_1.png';

//lady_macbeth
import ladyMacbeth1 from '../../images/productions/slideshow/lady_macbeth/1.png';
import ladyMacbeth2 from '../../images/productions/slideshow/lady_macbeth/2.png';
import ladyMacbeth3 from '../../images/productions/slideshow/lady_macbeth/3.png';
import ladyMacbeth4 from '../../images/productions/slideshow/lady_macbeth/4.png';

//hand_over_fist
import handOverFist1 from '../../images/productions/slideshow/hand_over_fist/1.jpg';
import handOverFist2 from '../../images/productions/slideshow/hand_over_fist/2.jpg';
import handOverFist3 from '../../images/productions/slideshow/hand_over_fist/3.jpg';
import handOverFist4 from '../../images/productions/slideshow/hand_over_fist/4.jpg';
import handOverFist5 from '../../images/productions/slideshow/hand_over_fist/5.jpg';
import handOverFist6 from '../../images/productions/slideshow/hand_over_fist/6.jpg';

import handOverFistVideo1 from '../../images/productions/videos/hand_over_fist/hand_over_fist.mp4';

import handOverFistVideoBackground1 from '../../images/productions/slideshow/hand_over_fist/background_1.png';

//heads_are
import headsAre1 from '../../images/productions/slideshow/heads_are/1.jpg';
import headsAre2 from '../../images/productions/slideshow/heads_are/2.jpg';
import headsAre3 from '../../images/productions/slideshow/heads_are/3.jpg';
import headsAre4 from '../../images/productions/slideshow/heads_are/4.jpg';
import headsAre5 from '../../images/productions/slideshow/heads_are/5.jpg';
import headsAre6 from '../../images/productions/slideshow/heads_are/6.jpg';
import headsAre7 from '../../images/productions/slideshow/heads_are/7.jpg';

import headsAreVideo1 from '../../images/productions/videos/heads_are/heads_are.mp4';

import headsAreVideoBackground1 from '../../images/productions/slideshow/heads_are/background_1.png';

//departures
import departures1 from '../../images/productions/slideshow/departures/1.jpg';
import departures2 from '../../images/productions/slideshow/departures/2.jpg';
import departures3 from '../../images/productions/slideshow/departures/3.jpg';
import departures4 from '../../images/productions/slideshow/departures/4.jpg';
import departures5 from '../../images/productions/slideshow/departures/5.jpg';
import departures6 from '../../images/productions/slideshow/departures/6.jpg';

//the_job
import theJob1 from '../../images/productions/slideshow/the_job/1.jpg';
import theJob2 from '../../images/productions/slideshow/the_job/2.jpg';
import theJob3 from '../../images/productions/slideshow/the_job/3.jpg';
import theJob4 from '../../images/productions/slideshow/the_job/4.jpg';
import theJob5 from '../../images/productions/slideshow/the_job/5.jpg';
import theJob6 from '../../images/productions/slideshow/the_job/6.jpg';
import theJob7 from '../../images/productions/slideshow/the_job/7.jpg';
import theJob8 from '../../images/productions/slideshow/the_job/8.jpg';

import theJobVideo1 from '../../images/productions/videos/the_job/the_job.mp4';

import theJobVideoBackground1 from '../../images/productions/slideshow/the_job/background_1.png';

//khol_do
import kholDo1 from '../../images/productions/slideshow/khol_do/1.jpg';
import kholDo2 from '../../images/productions/slideshow/khol_do/2.jpg';
import kholDo3 from '../../images/productions/slideshow/khol_do/3.jpg';
import kholDo4 from '../../images/productions/slideshow/khol_do/4.jpg';
import kholDo5 from '../../images/productions/slideshow/khol_do/5.jpg';
import kholDo6 from '../../images/productions/slideshow/khol_do/6.jpg';
import kholDo7 from '../../images/productions/slideshow/khol_do/7.jpg';
import kholDo8 from '../../images/productions/slideshow/khol_do/8.jpg';
import kholDo9 from '../../images/productions/slideshow/khol_do/9.jpg';
import kholDo10 from '../../images/productions/slideshow/khol_do/10.jpg';
import kholDo11 from '../../images/productions/slideshow/khol_do/11.jpg';

import kholDoVideo1 from '../../images/productions/videos/khol_do/khol_do.mp4';

import kholDoVideoBackground1 from '../../images/productions/slideshow/khol_do/background_1.png';

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
        new ImageClass(loosewoman1, "Loose Woman 1", 759, 481, 0, 0),
        new ImageClass(loosewoman2, "Loose Woman 2", 418, 332, 0+759, 50),
        new ImageClass(loosewoman3, "Loose Woman 3", 759, 730, 0+759+418, 0),
        new ImageClass(loosewoman4, "Loose Woman 4", 715, 477, 0+759+418+759, 70),
        new ImageClass(loosewoman5, "Loose Woman 5", 759, 481, 2651, 0),
        new ImageClass(loosewoman6, "Loose Woman 6", 418, 332, 2651+759, 50),
        new ImageClass(loosewoman7, "Loose Woman 7", 759, 730, 2651+759+418, 0),
        new ImageClass(loosewoman8, "Loose Woman 8", 715, 477, 2651+759+418+759, 70),
    ],
    videos: [
        new VideoClass(loosewomanVideo1, "Loose Woman Video 1", 650, 379, 298, 481, loosewomanVideoBackground1, '1'),
        new VideoClass(loosewomanVideo2, "Loose Woman Video 2", 650, 379, 2800, 481, loosewomanVideoBackground2, '2'),
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
      new ImageClass(nonStop1, "Non Stop 1", 759, 481, 0, 0),
      new ImageClass(nonStop2, "Non Stop 2", 418, 332, 0+759, 50),
      new ImageClass(nonStop3, "Non Stop 3", 759, 730, 0+759+418, 0),
      new ImageClass(nonStop4, "Non Stop 4", 715, 477, 0+759+418+759, 70),
      new ImageClass(nonStop5, "Non Stop 5", 759, 481, 2651, 0),
      new ImageClass(nonStop6, "Non Stop 6", 418, 332, 2651+759, 50),
      new ImageClass(nonStop7, "Non Stop 7", 759, 730, 2651+759+418, 0),
      

    ],
    videos: [
        new VideoClass(nonStopVideo1, "Non Stop Feel Good Show Video", 650, 379, 298, 481, nonStopVideoBackground1, '1'),
    ],
    slideshowWidth: 4600,
  },
  {
    name: "Ravanama",
    metadata: {
      year: 2011,
      credits: [
        { "Sound Design": "Samar Grewal" },
        { Vocal: "S . Radhakrishnan, S . Radhakrishnan, Maddalam Murugan Jyoti" },
        { "Video Design": "Surajit Sarkar" },
        { Images: " S. Thyagarajan" },
      ],
    },
    id: 3,
    text: [
      "Ravanama is about the search for the mythological character, Ravana, through the many stories associated with him. On stage we see a performer in the process of making a show. Every time she decides on a way to start the show, a fresh version takes her in a different direction. Is there a connection in all these stories? It is only at the end of the performance that she discovers the ideal start for the show.",
      "This show is deeply inspired by Kathakali both as a form and its particular portrayal of Ravana."
    ],
    display: atom(false),
    images: [
      new ImageClass(ravanama1, "Ravanama 1", 759, 481, 0, 0),
      new ImageClass(ravanama2, "Ravanama 2", 418, 332, 0+759, 50),      
    ],
    videos: [
      new VideoClass(ravanamaVideo1, "Ravanama Video 1", 650, 379, 298, 481, ravanamaVideoBackground1, '1'),
    ],
    slideshowWidth: 1200,
  },
  {
    name: "Quality Street",
    metadata: {
      year: 2010,
      credits: [
        { "Sound Design": "Samar Grewal" },
        { Lights: "Rajesh Singh" },
        { Story: "Chimamanda Ngozi Adichie" },
        { "Directed and performed by": "Maya Krishna Rao" },
      ],
    },
    id: 4,
    text: [
      "This is a delightful short story, by Chimamanda Ngozi Addichie, about a mother and daughter, set in Lagos, Nigeria, but it can be transposed, with a few details changed, to several cities across the world. At a deeper level, it is a story that looks at issues that lie at the core of people’s lives – of culture, values, relationships within a family.",
      "Mrs. Njoku’s daughter, Sochienne, has just arrived back having completed higher studies in the U.S. She is a changed person – the trip abroad has brought home to her the value of her roots in Nigerian culture. She disapproves of her mother’s ‘bourgeois’ ways. Mrs. Njoku is quite aghast to see this transformation in her daughter. The entire story is a non - stop ‘boxing match’ between mother daughter, done with great humour, yet deeply moving.",
    ],
    display: atom(false),
    images: [
      new ImageClass(qualityStreet1, "Quality Street 1", 759, 481, 0, 0),
      new ImageClass(qualityStreet2, "Quality Street 2", 418, 332, 0+759, 50),
    ],
    videos: [
      new VideoClass(qualityStreetVideo1, "Quality Street Video 1", 650, 379, 298, 481, qualityStreetVideoBackground1, '1'),
    ],
    slideshowWidth: 1200,
  },
  {
    name: "Are You Home Lady Macbeth?",
    metadata: {
      year: 2008,
      credits: [
        { "Video Design": "Amitesh Grover" },
        { "Sound Design": "Ish Malhotra" },
        { "Costume & Props": "Tabasheer Zutshi" },
        {Stage:"Amitesh Grover"},
        {Images:"S. Thyagarajan"},
        {"Created and performed by":"Maya Krishna Rao"},
      ],
    },
    id: 5,
    text: [
      "Lady Macbeth was revisited through a series of improvisations with live camera, objects, fragments of Shakespeare's text, live sound. What emerged was an altogether different woman. She's actually the 4th witch..."
    ],
    display: atom(false),
    images: [
      new ImageClass(ladyMacbeth1, "Are You Home Lady Macbeth 1", 759, 481, 0, 0),
      new ImageClass(ladyMacbeth2, "Are You Home Lady Macbeth 2", 418, 332, 0+759, 50),
      new ImageClass(ladyMacbeth3, "Are You Home Lady Macbeth 3", 759, 730, 0+759+418, 0),
      new ImageClass(ladyMacbeth4, "Are You Home Lady Macbeth 4", 715, 477, 0+759+418+759, 70),
    ],
    slideshowWidth: 2000,
  },
  {
    name: "Hand Over Fist",
    metadata: {
      year: 2007,
      credits: [
        { "Music": "Ashim Ghosh" },
        { Video: "Amitesh Grover"},
        { Lights: "Rajesh Singh" },
        { Stage: "Amitesh Grover"},
        { Images: "S. Thyagarajan"},
        { "Scripted, directed and performed by": "Maya Krishna Rao" },
      ],
    },
    id: 6,
    text: [
      "Live sound, text, action, song and video come together to draw out and reflect on the many facets of masculinities - the many ways these lie embedded in our sense of identity, relationships, work and attitudes.",
      "These short episodes are an attempt to pick up some of the strands that constitute the larger maze of masculinities.",
      "This show was commissioned by UNIFEM to launch a campaign on the theme of masculinities."
    ],
    display: atom(false),
    images: [
      new ImageClass(handOverFist1, "Hand Over Fist 1", 759, 481, 0, 0),
      new ImageClass(handOverFist2, "Hand Over Fist 2", 418, 332, 0+759, 50),
      new ImageClass(handOverFist3, "Hand Over Fist 3", 759, 730, 0+759+418, 0),
      new ImageClass(handOverFist4, "Hand Over Fist 4", 715, 477, 0+759+418+759, 70),
      new ImageClass(handOverFist5, "Hand Over Fist 5", 759, 481, 0+759+418+759+715, 0),
      new ImageClass(handOverFist6, "Hand Over Fist 6", 418, 332, 0+759+418+759+715+759, 50),
    ],
    videos: [
      new VideoClass(handOverFistVideo1, "Hand Over Fist Video 1", 650, 379, 298, 481, handOverFistVideoBackground1, '1'),
    ],
    slideshowWidth: 4000,
  },
  {
    name: "Heads Are Meant For Walking Into",
    metadata: {
      year: 2005,
      credits: [
        { "Video design": "Surajit Sarkar" },
        { Sound: "Ashim Ghosh" },
        { "Props and space": "Rajesh Singh" },
        { "Performed and directed by": "Maya Krishna Rao" },
      ],
  },
    id: 7,
    text: [
      "A woman sits at her desk with bits of a puzzle – a puzzle that is indeed the world, where life can be hard and its contradictions sharp. She must figure out her puzzle, just like any of us. So she must leave her desk and step out into the wider world to make sense of these pieces.",
      "The journey is not easy. Sometimes it can be devastating. The world of power, of women’s degradation, of hardship and of those who survive it through work, is revealed to her.",
      "Action, text, music and live feed were brought together to create a multi media show about our times. Close- circuit cameras that project images on multiple surfaces combine with exciting use of objects, action and sound."
    ],
    display: atom(false),
    images: [
      new ImageClass(headsAre1, "Heads Are Meant For Walking Into 1", 759, 481, 0, 0),
      new ImageClass(headsAre2, "Heads Are Meant For Walking Into 2", 418, 332, 0+759, 50),
      new ImageClass(headsAre3, "Heads Are Meant For Walking Into 3", 759, 730, 0+759+418, 0),
      new ImageClass(headsAre4, "Heads Are Meant For Walking Into 4", 715, 477, 0+759+418+759, 70),
      new ImageClass(headsAre5, "Heads Are Meant For Walking Into 5", 759, 481, 0+759+418+759+715, 0),
      new ImageClass(headsAre6, "Heads Are Meant For Walking Into 6", 418, 332, 0+759+418+759+715+759, 50),
      new ImageClass(headsAre7, "Heads Are Meant For Walking Into 7", 759, 730, 0+759+418+759+715+759+418, 0),
    ],
    videos: [
      new VideoClass(headsAreVideo1, "Heads Are Meant For Walking Into Video 1", 650, 379, 298, 481, headsAreVideoBackground1, '1'),
    ],
    slideshowWidth: 4500,
  },
  {
    name: "Departures",
    metadata: {
      year: 1999,
      credits: [
        { "Live Sound": "Gavin O'Shea" },
        { "Live Feed": "Bea Haut" },
        { Lights: "Abhilash Pillai" },
        { "Performer": "Maya K. Rao" },
      ],
    },
    id: 8,
    text: [
      "The word, Departure, conjures up multiple images - of leaving a world behind, of packing, mixed feelings, of arriving. Of the traveller herself who is already changed because she is crossing ‘worlds’.",
      "There is another way in which we use the word departures - of making departures in thinking, habit, life-style, work. Often we make these departures without realising we are transforming. Only over time do these changes ‘reveal’ themselves. Such departures seem intangible, yet often leave a firm imprint on our lives.",
      "The artists who came together to make this show explored the term through images, moments in history, sound and object.",
      "This show was commissioned by LIFT - London International Festival of Theatre"
    ],
    display: atom(false),
    images: [
      new ImageClass(departures1, "Departures 1", 759, 481, 0, 0),
      new ImageClass(departures2, "Departures 2", 418, 332, 0+759, 50),
      new ImageClass(departures3, "Departures 3", 759, 730, 0+759+418, 0),
      new ImageClass(departures4, "Departures 4", 715, 477, 0+759+418+759, 70),
      new ImageClass(departures5, "Departures 5", 759, 481, 0+759+418+759+715, 0),
      new ImageClass(departures6, "Departures 6", 418, 332, 0+759+418+759+715+759, 50),
    ],
    slideshowWidth: 4000,
  },
  {
    name: "The Job",
    metadata: {
      year: 1997,
      credits: [
        { "Sound design": "Vikram Joglekar" },
        { "Lights and Video": " Dilip Varma"},
        { "Space & Properties": "Badri Narayanan & Dhruv Ghose"},
        { "Costume": "Sonia Khurana"},
        { "Performed and directed by": "Maya Krishna Rao" },
      ],
    },
    id: 9,
    text: [
      "The story, typically of Brecht, is rich in theatre possibilities. Brecht himself based his story on a real life account published in a German newspaper, of a woman who transformed herself into her dead husband only to seize a job as a night watchman in a factory. These are the days of the Depression and she has two children and herself to keep alive. Another jobless woman willingly agrees to live with her as ‘wife’. This 'ordinary' family survived for four long years, until 'his' secret was found out quite by accident.",
      "In recreating this story for theatre, the performer creates a contemporary character, who, while going about her daily chores, finds events of the story ‘revealed’ through  her actions. Somewhere, the character, her routine tasks and Mrs. Hausmann and her predicament get ‘caught’ in one another inextricably."
    ],
    display: atom(false),
    images: [
      new ImageClass(theJob1, "The Job 1", 759, 481, 0, 0),
      new ImageClass(theJob2, "The Job 2", 418, 332, 0+759, 50),
      new ImageClass(theJob3, "The Job 3", 759, 730, 0+759+418, 0),
      new ImageClass(theJob4, "The Job 4", 715, 477, 0+759+418+759, 70),
      new ImageClass(theJob5, "The Job 5", 759, 481, 2651, 0),
      new ImageClass(theJob6, "The Job 6", 418, 332, 2651+759, 50),
      new ImageClass(theJob7, "The Job 7", 759, 730, 2651+759+418, 0),
      new ImageClass(theJob8, "The Job 8", 715, 477, 2651+759+418+759, 70),
    ],
    videos: [
      new VideoClass(theJobVideo1, "The Job Video", 650, 379, 298, 481, theJobVideoBackground1, '1')
    ],
  slideshowWidth: 5310,
  },
  {
    name: "Khol Do",
    metadata: {
      year: 1993,
      credits: [
        { "Sound Design": "Vikram Joglekar" },
        { "Music selections": "Glassworks, Philip Glass" },
        { Images: "S. Thyagarajan"},
        { "Created and performed by": "Maya Krishna Rao" },
      ],
    },
    id: 10,
    text: [
      "Khol Do’ is inspired by a short story by Saadat Hasan Manto. It is set in the riots of 1946 - 47 that finally led to the breakup of India and the creation of Pakistan.",
      "A father has lost his daughter somewhere in the crowds of fleeing people on a railway platform. All he has left of her is her veil.",
      "For him the search for his daughter is so intense, so deep that he begins to find her, bit by bit, in his own body - In the beauty of dance, where lovers find each other.",
      "This is a piece created exclusively in movement, with no words. The body expresses, in fragments, the atmosphere on the railway platform, the inner anxiety of the father, the search, the daughter, the eight men, the rape, and finally a still portrait of the daughter - a girl, lost in the crowd, one among us."
    ],
    display: atom(false),
    images: [
      new ImageClass(kholDo1, "Khol Do 1", 759, 481, 0, 0),
      new ImageClass(kholDo2, "Khol Do 2", 418, 332, 0+759, 50),
      new ImageClass(kholDo3, "Khol Do 3", 759, 730, 0+759+418, 0),
      new ImageClass(kholDo4, "Khol Do 4", 715, 477, 0+759+418+759, 70),
      new ImageClass(kholDo5, "Khol Do 5", 759, 481, 2651, 0),
      new ImageClass(kholDo6, "Khol Do 6", 418, 332, 2651+759, 50),
      new ImageClass(kholDo7, "Khol Do 7", 759, 730, 2651+759+418, 0),
      new ImageClass(kholDo8, "Khol Do 8", 715, 477, 2651+759+418+759, 70),
      new ImageClass(kholDo9, "Khol Do 5", 759, 481, 5302, 0),
      new ImageClass(kholDo10, "Khol Do 6", 418, 332, 5302+759, 50),
      new ImageClass(kholDo11, "Khol Do 7", 759, 730, 5302+759+418, 0),
    ],
    videos: [
      new VideoClass(kholDoVideo1, "Khol Do Video", 650, 379, 298, 481, kholDoVideoBackground1, '1')
    ],
  slideshowWidth: 7358,

  },


];
