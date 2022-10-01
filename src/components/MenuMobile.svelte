<script lang="ts">
  import productions from "../images/menu/productions.svg";
  import comedy from "../images/menu/comedy.svg";
  import street from "../images/menu/street.svg";
  import appliedTheatre from "../images/menu/applied_theatre.svg";
  import kathakali from "../images/menu/kathakali.svg";
  import making from "../images/menu/making.svg";
  import teaching from "../images/menu/teaching.svg";
  import digitalCreations from "../images/menu/digital_creations.svg";
  import events from "../images/menu/events.svg";
  import about from "../images/menu/about.svg";
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
  <div style="transform: translateY(12px);"><MenuMobileItem category="productions" imgWidth="210px" img={productions}/></div>
  <MenuMobileItem category="comedy" imgWidth="119.89px" img={comedy}/>
  <MenuMobileItem category="street" imgWidth="118px" img={street} />
  <MenuMobileItem category="appliedTheatre" imgWidth="261.14px" img={appliedTheatre} url={'/applied-theatre'}/>
  <MenuMobileItem category="kathakali" imgWidth="174.77px" img={kathakali} />
  <MenuMobileItem category="making" imgWidth="130.85px" img={making} />
  <MenuMobileItem category="teaching" imgWidth="163.8px" img={teaching} />
  <MenuMobileItem category="digitalCreations" imgWidth="275.63px" img={digitalCreations} />
  <MenuMobileItem category="events" imgWidth="99px" img={events} />
  <MenuMobileItem category="about" imgWidth="108.24px" img={about} url={'/about'}/>


</menu>

<style>
  menu {
    background-color: #000;
    min-height: 100vh;
    width: 100vw;
    padding-top: 130px;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 16px;
    padding-bottom: 36px;;
  }
</style>
