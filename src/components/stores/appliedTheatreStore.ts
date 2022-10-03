import { map, atom } from 'nanostores';


export const isTheatreProgramOpen = map({
    stage: 1,
})

export const heiretikos = atom(false)
export const igloo = atom(false)
export const razia = atom(false)
export const sciva = atom(false)
export const pandita = atom(false)

export const isTeacherEducationOpen = atom(false)

export const allItems = [heiretikos, igloo, razia, sciva, pandita]


