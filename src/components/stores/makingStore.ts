import { atom } from 'nanostores';


export const isImprovisationOpen = atom(false)
export const isObjectsOpen = atom(false)
export const isCameraOpen = atom(false)

export const allItems = [isImprovisationOpen, isObjectsOpen, isCameraOpen]

