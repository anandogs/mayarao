<script lang='ts'>
    export let category:string;
    export let imgWidth:string;
    export let img:string;


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

<a href="/menu">
    <img
      src={img}
      style={`${hoveredStates[category] ? "filter: brightness(0) invert(1);" : ""}`}
      alt="Productions"
      width={imgWidth}
      on:mouseover={() => toggleHover(category)}
      on:focus={() => toggleHover(category)}
      on:mouseleave={() => toggleHover(category)}
    /></a
  >

