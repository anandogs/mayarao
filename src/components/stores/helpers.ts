import type { WritableAtom } from "nanostores";

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

export class ImageClass {
    src: string;
    alt: string;
    width: number;
    height: number; 
    left: number;
    top: number;
    backgroundColor?: string;
    constructor(src: string, alt: string, width: number, height:number, left: number, top:number, backgroundColor?: string) {
        this.src = src;
        this.alt = alt;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.backgroundColor = backgroundColor;
    }
}

export class VideoClass extends ImageClass {
    videoImage: string;
    videoId: string;
    constructor(src: string, alt: string, width: number, height:number, left: number, top:number, videoImage: string, videoId: string) {
        super(src, alt, width, height, left, top);
        this.videoImage = videoImage;
        this.videoId = videoId;
    }
}