import { atom } from 'nanostores';


export const isSoloGroupCreationsOpen = atom(false)
export const isTheatreInEducationOpen = atom(false)
export const isKathakaliOpen = atom(false)

export const allItems = [isSoloGroupCreationsOpen, isTheatreInEducationOpen, isKathakaliOpen]

