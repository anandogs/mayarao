import { atom } from "nanostores";

export const isSoloGroupCreationsOpen = atom(false);
export const isTheatreInEducationOpen = atom(false);
export const isKathakaliOpen = atom(false);
export const isActingOpen = atom(false);
export const isAwardsGrantsOpen = atom(false);
export const isChoreographyOpen = atom(false);
export const isCommittesOpen = atom(false);
export const isEducationOpen = atom(false);
export const isFestivalsOpen = atom(false);
export const isFilmsOnMayaOpen = atom(false);
export const isFilmsTvOpen = atom(false);
export const isPositionsHeldOpen = atom(false);
export const isWorkshopsOpen = atom(false);

export const allItems = [
  isSoloGroupCreationsOpen,
  isTheatreInEducationOpen,
  isKathakaliOpen,
  isActingOpen,
  isAwardsGrantsOpen,
  isChoreographyOpen,
  isCommittesOpen,
  isEducationOpen,
  isFestivalsOpen,
  isFilmsOnMayaOpen,
  isFilmsTvOpen,
  isPositionsHeldOpen,
  isWorkshopsOpen,
];

interface dataType {
  heading: string;
  body: string;
  link?: string;
  parent?: string;
}

export const soloGroupCreationsData: Array<dataType> = [
  {
    heading: "Loose Woman",
    body: "multi media show in episodes, 2018",
    link: "Loose Woman",
    parent: "productions",
  },
  { heading: "Protest", body: "various performances, 2012 onwards" },
  {
    heading: "Walk",
    body: "in response to Delhi bus gang rape 2012 onwards, several performances in schools, colleges, street, living rooms, shopping malls, NGOs, rallies",
    link: "Walk",
    parent: "street-theatre",
  },
  {
    heading: "The Non Stop Feel Good Show",
    body: "commissioned by Park Hotel for 6-city tour Mumbai, Delhi, Hyderabad, Bangalore, Chennai, Kolkata, 2011",
    link: "The-Non-Stop-Feel-Good-Show",
    parent: "productions",
  },
  {
    heading: "Small Fry",
    body: "created for Maximum India festival, Kennedy Centre, Washington DC, 2011",
  },
  {
    heading: "Ravanama",
    body: "solo, commissioned by Ramayana festival, Adishakti, Pondicherry, India 2011",
    link: "Ravanama",
    parent: "productions",
  },
  {
    heading: "Quality Street",
    body: "solo, by Chimamanda Ngozi Adichie, 2010",
    link: "Quality Street",
    parent: "productions",
  },
  { heading: "Lady Macbeth", body: "Revisited cross media performance, 2010" },
  {
    heading: "Are You Home Lady Macbeth?",
    body: "performance art project for Khoj, Delhi, 2008",
    link: "Are You Home Lady Macbeth",
    parent: "productions",
  },
  {
    heading: "Hand Over Fist",
    body: "perspectives on masculinities cross media performance as launch of UN programme in India, commissioned by UNDP and UNIFEM, Delhi, 2007",
    link: "Hand Over Fist",
    parent: "productions",
  },
  {
    heading: "Heads Are Meant for Walking Into",
    body: "cross media performance, 2005",
    link: "Heads Are Meant for Walking Into",
    parent: "productions",
  },
  {
    heading: "Comedy",
    body: "solo, various event-specific creations, Hindi/English 1992 onwards.",
    parent: "comedy",
  },
  {
    heading: "A Deep Fried Jam and A Deeper Fried Jam",
    body: "socio-political cabaret, regenerated versions, 2002 onwards.",
  },
  {
    heading: "Departures",
    body: "commissioned by London International Festival of Theatre (LIFT),London, 1999",
    link: "Departures",
    parent: "productions",
  },
  {
    heading: "4-Wheel-Drive-“Come-to-me- Mr.Sharma”- Body-Fat-Murdered-Show",
    body: "comedy in episodes, several versions, 1998 onwards",
  },
  {
    heading: "Rainmaker",
    body: "solo, inspired by Assamese short story, Delhi,1998",
  },
  {
    heading: "The Job",
    body: "solo, based on a short-story by Bertolt Brecht, commissioned by Max Mueller Bhavan, Delhi,1997.",
    link: "The Job",
    parent: "productions",
  },
  {
    heading: "Khol Do",
    body: "solo, dance-theatre, inspired by Saadat Hasan Manto’s short story, Delhi, 1993.",
    link: "Khol Do",
    parent: "productions",
  },
  {
    heading: "Street theatre",
    body: "as founder-member of group,‘ Theatre Union’, scripted, directed, performed Om Swaha on dowry and Dafa no.180 on the Indian law on rape, several shows in colleges, parks, non-formal spaces, 1979-82",
    parent: "street-theatre",
  },
];

export const theatreInEducationData: Array<dataType> = [
  {
    heading: "Drama syllabus",
    body: "formulated for B.El.Ed (Bachelor in Elementary Education), Delhi University, 2008",
  },
  {
    heading: "Drama syllabus classes",
    body: "I – XII, for central govt. body NCERT (National Council for Educational Resources and Training, Delhi), Member, drafting committee, 2007",
  },
  {
    heading: "Story Spinners’ and Piece At Any Price",
    body: "Co-devised, performed and toured theatre shows member, Perspectives Theatre Company, Nottingham, England, to different parts of England, Nottingham, England, 1984",
  },
  {
    heading: "Heiretikos, Or The One Who Chooses",
    body: "Leeds Playhouse TIE Company, as member, devised and/or performed in, Leeds 1983; performed in ‘Pow-Wow’, Leeds, England, 1982",
  },
  {
    heading: "School Teacher Workshops",
    body: "for National School of Drama and schools in Delhi  2003 onwards; for Delhi University, 2003 onwards; and other teacher training institutions all over India, 1986 onwards",
  },
];

export const festivalsData: Array<dataType> = [
  {
    heading: "London International Festival of Theatre (LIFT)",
    body: "London, U.K., 1997, 1999",
  },
  { heading: "Sahmat", body: "several comedy shows, 1993 onwards" },
  { heading: "American Dance Festival", body: "Durham, USA, 1992" },
  { heading: "Nandikar", body: "Kolkata 1997" },
  { heading: "Prithvi", body: "Mumbai, 1997, 2003" },
  { heading: "Sahitya Kala Parishad", body: "Delhi, 1998" },
  { heading: "Amman Theatre Festival", body: "Amman, Jordan, 1998" },
  { heading: "The Other Festival", body: "Chennai 1998, 1999" },
  { heading: "Sangeet Natak Akademi", body: "Bangalore Trichur 1998, 1999" },
  {
    heading: "Centre for Performance Research",
    body: "Univ. Of Aberystwyth Wales, UK, 1999",
  },
  { heading: "Dancescenen Festival", body: "Munich Germany, 2000" },
  {
    heading: "National School of Drama Bharat Rang Mahotsav",
    body: "Delhi, 2000, '02, '06, '07, '10,'11,'12",
  },
  { heading: "Restless Gravity Aberystwyth", body: "Wales, England, 2000" },
  {
    heading: "Kobenhavns Internationale Teater",
    body: "Copenhagen, Denmark 2000, 2001",
  },
  { heading: "Kiasma Museum Helsinki", body: "Finland, 2001" },
  { heading: "Jomba!", body: "Durban, S.Africa, 2002" },
  { heading: "Poorva Womens Festival", body: "Delhi, 2003" },
  { heading: "Kulavai", body: "Chennai, 2003" },
  { heading: "House of World Cultures", body: "Berlin, Germany, 2003" },
  { heading: "Rangashankara", body: "Bangalore, 2005" },
  { heading: "Theatre Du Nord", body: "Lille, France, 2006" },
  { heading: "Kampnagel Hamburg", body: "Germany 2002, 2007" },
  { heading: "Frankfurt Book Fair", body: "2006" },
  { heading: "Khoj", body: "performance art, Delhi, 2008" },
  {
    heading: "National Theatre Festival",
    body: "Thiruvanathapuram, India, 2009",
  },
  { heading: "ARCO Fair Valladolid", body: "Spain, 2009" },
  { heading: "Ramayana festival Adishakti", body: "Pondicherry, 2011" },
  { heading: "New Park festival", body: "6 city-tour of comedy, 2011" },
  { heading: "Neelan Tiruchelvan Trust", body: "Srilanka, 2012" },
  { heading: "Women's Theatre Festival", body: "Chandigarh, 2012" },
  { heading: "Ramayana Festival", body: "Cologne, Germany, 2012" },
  { heading: "Ignite! Dance Festival", body: "Delhi, 2010, 2012" },
  {
    heading: "ITFOK (International Theatre Festival of Kerala)",
    body: "Trissur, Kerala, 2013, 2014",
  },
  { heading: "Moving Spaces", body: "Kolkata, 2013" },
  { heading: "Female Voices", body: "Cologne, Germany, 2016" },
  { heading: "Dramaturgies of Cultural Translation", body: "Amsterdam, 2016" },
  { heading: "Theatre Bonn", body: "Bonn, 2016" },
  { heading: "March Dance", body: "Chennai, 2019" },
];

export const workshopsData: Array<dataType> = [
  { heading: "Artists’ Workshop", body: "Kasauli, India 1981, 1982" },
  {
    heading: "ILEA (Inner London Education Authority) Childrens workshop",
    body: "London, 1983",
  },
  {
    heading: "Kathakali workshops",
    body: "U.K, Germany, USA, Singapore, India 1984 onwards",
  },
  {
    heading: "New Directions in Indian Dance",
    body: "Max Mueller Bhavan, Delhi, 1993",
  },
  { heading: "Faiz Centenary Celebrations", body: "Lahore 1988" },
  {
    heading: "Street plays for colleges",
    body: "Delhi University, 1987, ’88, ’97, 2000, ’01, ’02,",
  },
  {
    heading: "Woman In Us",
    body: "all-India theatre performers’ workshop, Mumbai, 1996",
  },
  { heading: "Theatreworks", body: "Kathakali workshop, Singapore, 1998" },
  {
    heading: "Drama-in-Education",
    body: "various schools in Delhi, Bangalore, Andhra Pradesh, 2002 onwards",
  },
  { heading: "Prakriti Foundation", body: "on gender, Chennai, 2002" },
  { heading: "Continuum Arts Project", body: "Luang Prabang, Laos, 2003" },
  {
    heading: "Kattaikuthu Youth Theatre School",
    body: "Kanchipuram, Tamilnadu, 2003",
  },
  {
    heading: "Women Unlimited",
    body: "young writers workshop, Delhi, Chennai, Bangalore, 2005",
  },
  { heading: "Sangat", body: "womens orgn., on gender, Kathmandu, 2007" },
  {
    heading: "Nireeksha",
    body: "womens’ group, workshop for children, Kottayam, 2005",
  },
  { heading: "Prithvi", body: "young people’s theatre workshop, Mumbai 2006" },
  {
    heading: "Punjab University",
    body: "Dept. of Theatre, Chandigarh, 2001, 2007",
  },
  {
    heading: "National School of Drama",
    body: "Madurai '99, Nagaland '08, Delhi '12",
  },
  {
    heading: "Srishti School of Design and Technology",
    body: "Bangalore, 2008, 2009",
  },
  {
    heading: "India Foundation for the Arts",
    body: "seminar and teachers workshop, Bangalore, 2010",
  },
  { heading: "Theatre Professionals", body: "Mumbai, 2011" },
  {
    heading: "U.S performance - cum - workshop tour",
    body: "Univ. of California (Irvine, Berkeley), Smith College, NYU, Barnard College, 2013, Stanford University, 2015, NSD TIE Institute, Agartala, Tripura – Drama in the classroom, 2012, 2013",
  },
  { heading: "TISS, Tata Inst. of Social Sciences", body: "Mumbai, 2014" },
  { heading: "Warwick University", body: "Summer School, teaching,  2016" },
  {
    heading: "Kolkata Sanved",
    body: "dance movement therapy workshop, Kolkata Jan. 29 - Feb. 4, 2017",
  },
  {
    heading: "Sahmat",
    body: "for visiting Palestinian actors of Freedom School, Delhi, 2015",
  },
  { heading: "Williams College", body: "USA, Apr. 2022" },
];

export const choreographyData: Array<dataType> = [
  {
    heading: "Viy",
    body: "stage play, based on a short story by Gogol, directed by Anamika Haksar, 1990",
  },
  {
    heading: "Dream of Reason",
    body: "stage play, based on the life of Goya, directed by Anamika Haksar, 1991",
  },
  {
    heading: "Subhadra",
    body: "co - choreographed, film, directed by Ein Lall, 1995",
  },
  { heading: "Kamasutra", body: "film, directed by Mira Nair" },
];

export const filmsTvData: Array<dataType> = [
  { heading: "The Rover", body: "play, Open University, BBC, London, 1994" },
  { heading: "Voice-over", body: "various films" },
];

export const filmsOnMayaData: Array<dataType> = [
  {
    heading: "Portrait of Maya Krishna Rao",
    body: "film, Doordarshan, Public Service Broadcast, India, 1997",
  },
  {
    heading: "Maya Krishna Rao",
    body: "video notes, Sparrow Women’s’ Documentation Centre, Mumbai",
  },
  {
    heading: "Women Who Dared",
    body: "ed. Ritu Menon, National Book Trust, 2002. (Maya featured as one among twenty notable living Indian women of last fifty years).",
  },
];

export const awardsGrantsData: Array<dataType> = [
  { heading: "Sangeet Natak Akademi Award", body: "Government of India, 2010" },
  {
    heading: "Australia Council of the Arts",
    body: "Australia, grant 2021-22",
  },
];

export const committeesData: Array<dataType> = [
  {
    heading: "National School of Drama Theatre-in-Education",
    body: "Company, member, advisory committee, Gati Summer Dance Residency, Advisor, Delhi, since 2008",
  },
  {
    heading: "National Council of Educational Research and Training",
    body: "(NCERT) – member, drama syllabus committee, 2006, Delhi University Academic Council, elected member, 1982",
  },
];

export const educationData: Array<dataType> = [
  { heading: "Modern School", body: "Delhi, 1970" },
  {
    heading: "Sociology B.A. (Hons)",
    body: "Miranda House, Delhi University, Delhi, 1974",
  },
  {
    heading: "Political Studies, M.A.",
    body: "Jawaharlal Nehru University, Delhi, 1977",
  },
  {
    heading: "Theatre Arts, M.A.",
    body: "Leeds University, Leeds, England, 1983",
  },
  {
    heading: "Drama - in - Education, Diploma",
    body: "Trinity College, Dublin, Ireland, 2012",
  },
];

export const positionsHeldData: Array<dataType> = [
  { heading: "Visiting faculty", body: "Ashoka University, 2020 -" },
  { heading: "Professor", body: "Shiv Nadar University, 2013 - 2017" },
  {
    heading: "Associate Professor",
    body: "Dept. of Acting, National School of Drama Delhi, 1985-90",
  },
  {
    heading: "Actor-Teacher",
    body: "Perspectives Theatre Company, Nottingham, England with a brief to create and tour programmes of community interest in Nottingham, UK, 1982-83",
  },
  {
    heading: "Actor-Teacher",
    body: "Leeds Playhouse Theatre-in-Education Company, Leeds, England, to create theatre programmes for schools, Leeds, UK, 1983-84",
  },
  {
    heading: "Lecturer",
    body: "Political Science, Kamala Nehru College, Delhi University, 1977-85.",
  },
];
