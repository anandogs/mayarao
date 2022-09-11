<script lang="ts">
  import productions from "../images/menu/productions.svg";
  import productionsHovered from "../images/menu/productions_white.svg";
  import comedy from "../images/menu/comedy.svg";
  import comedyHovered from "../images/menu/comedy_white.svg";
  import street from "../images/menu/street.svg";
  import streetHovered from "../images/menu/street_white.svg";
  import appliedTheatre from "../images/menu/applied_theatre.svg";
  import appliedTheatreHovered from "../images/menu/applied_theatre_white.svg";
  import kathakali from "../images/menu/kathakali.svg";
  import kathakaliHovered from "../images/menu/kathakali_white.svg";
  import making from "../images/menu/making.svg";
  import makingHovered from "../images/menu/making_white.svg";
  import teaching from "../images/menu/teaching.svg";
  import teachingHovered from "../images/menu/teaching_white.svg";
  import digitalCreations from "../images/menu/digital_creations.svg";
  import digitalCreationsHovered from "../images/menu/digital_creations_white.svg";
  import events from "../images/menu/events.svg";
  import eventsHovered from "../images/menu/events_white.svg";
  import about from "../images/menu/about.svg";
  import aboutHovered from "../images/menu/about_white.svg";
  import MenuMobileItem from './MenuMobileItem.svelte';

  interface hoverType {
    [index: string]: boolean;
  }

  let hoveredStates: hoverType = {
    productions: false,
    comedy: false,
    street: false,
    appliedTheatre: false,
    kathakali: false,
    making: false,
    teaching: false,
    digitalCreations: false,
    events: false,
    about: false,
  };

  let toggleHover = (categoryToggle:string) => {
    hoveredStates[categoryToggle] = !hoveredStates[categoryToggle]
  }

</script>


<menu>
  <MenuMobileItem category="productions" imgWidth="210px" img={productions} imgHover={productionsHovered} />
  <MenuMobileItem category="comedy" imgWidth="119.89px" img={comedy} imgHover={comedyHovered} />
  <MenuMobileItem category="street" imgWidth="118px" img={street} imgHover={streetHovered} />
  <MenuMobileItem category="appliedTheatre" imgWidth="261.14px" img={appliedTheatre} imgHover={appliedTheatreHovered} />
  <MenuMobileItem category="kathakali" imgWidth="174.77px" img={kathakali} imgHover={kathakaliHovered} />
  <MenuMobileItem category="making" imgWidth="130.85px" img={making} imgHover={makingHovered} />
  <MenuMobileItem category="teaching" imgWidth="163.8px" img={teaching} imgHover={teachingHovered} />
  <MenuMobileItem category="digitalCreations" imgWidth="275.63px" img={digitalCreations} imgHover={digitalCreationsHovered} />
  <MenuMobileItem category="events" imgWidth="99px" img={events} imgHover={eventsHovered} />
  <MenuMobileItem category="about" imgWidth="108.24px" img={about} imgHover={aboutHovered} />


</menu>

<style>
  menu {
    background-color: #000;
    min-height: 100vh;
    width: 100vw;
    padding-top: 20vh;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 18px;
    padding-bottom: 36px;;
  }
</style>
