<script lang="ts">
  import productions from "../images/menu/productions.svg";
  import productionsHovered from "../images/menu/productions_white.svg";
  import comedy from "../images/menu/comedy.svg";
  import comedyHovered from "../images/menu/comedy_white.svg";
  import street from "../images/menu/street.svg";
  import streetHovered from "../images/menu/street_white.svg";
  import appliedTheatre from "../images/menu/applied_theatre.svg";
  import kathakali from "../images/menu/kathakali.svg";
  import making from "../images/menu/making.svg";
  import teaching from "../images/menu/teaching.svg";
  import digitalCreations from "../images/menu/digital_creations.svg";
  import events from "../images/menu/events.svg";
  import about from "../images/menu/about.svg";

  interface categoryType {
    [index: string]: Category;
  }


  class Category {
    hover: boolean;
    display: boolean;
    colour: string;

    constructor(hover: boolean, display: boolean, colour: string) {
      this.hover = hover;
      this.display = display;
      this.colour = colour;
    }
  }


  let backgroundColour: string = "#000000";

  let categories: categoryType = {
    production: new Category(false, true, "#2B948D"),
    comedy: new Category(false, true, "#DC5860"),
    street: new Category(false, true, "#658A65"),
    appliedTheatre: new Category(false, true, "#468FB8"),
    kathakali: new Category(false, true, "#C21111"),
    making: new Category(false, true, "#EAB040"),
    teaching: new Category(false, true, "#7A8225"),
    digitalCreations: new Category(false, true, "#8B88F4"),
    events: new Category(false, true, "#1DA069"),
    about: new Category(false, true, "#1DA069"),
  };


  let mouseEnterEvent = (hoveredValue: Category) => {
    hoveredValue.hover = true;
    for (const key in categories) {
      if (categories[key] !== hoveredValue) {
        categories[key].display = false;
      }
    }
    backgroundColour = hoveredValue.colour;
  };

  let mouseLeaveEvent = (hoveredValue: Category) => {
    hoveredValue.hover = false;
    for (const key in categories) {
      categories[key].display = true;
    }
    backgroundColour = "#000000";
  };
</script>

<div class="w-screen h-screen" style={`background-color: ${backgroundColour};`}>
  <div
    class="absolute cursor-pointer"
    style={`${categories.production.display?"top: 39.06%; left:20.84%; z-index:10;" :"display:none;"}`}
    on:mouseenter={() => mouseEnterEvent(categories.production)}
    on:focus={() => mouseEnterEvent(categories.production)}
    on:mouseleave={() => mouseLeaveEvent(categories.production)}
  >
    <img
      src={categories.production.hover ? productionsHovered : productions}
      alt="Productions"
      style="width: 25.43vw;"
    />
    <div
      style={`${
        categories.production.hover
          ? "position:absolute;  top:0%; left:100%;"
          : "display:none;"
      } padding-left:3.47vw; padding-top:2vw; width: 32vw;`}
    >
      <div style="display:grid;">
        <p>loose woman</p>
        <p>non-stop feel good show</p>
        <p>ravanama</p>
        <p>quality street</p>
        <p>are you home, lady macbeth?</p>
        <p>hand over fist</p>
        <p>heads are meant for walking into</p>
        <p>departures</p>
        <p>the job</p>
        <p>khol do</p>
      </div>
    </div>
  </div>
  <div
    class="absolute cursor-pointer"
    style={`${categories.comedy.display?"top: 39.61%; left:47.76%; z-index:10;" :"display:none;"}`}
    on:mouseenter={() => mouseEnterEvent(categories.comedy)}
    on:focus={() => mouseEnterEvent(categories.comedy)}
    on:mouseleave={() => mouseLeaveEvent(categories.comedy)}
  >
    <img
      src={categories.comedy.hover ? comedyHovered : comedy}
      alt="Comedy"
      style="width: 16.36vw;"
    />
    <div
      style={`${
        categories.comedy.hover
          ? "position:absolute;  top:0%; left:100%;"
          : "display:none;"
      } padding-left:3.47vw; padding-top:2vw; width: 32vw;`}
    >
      <div style="display:grid;">
        <p>paru</p>
        <p>dinner table</p>
        <p>melon woman</p>
        <p>jogger</p>
        <p>body makeover</p>
        <p>cooking</p>
        <p>mamata</p>
      </div>
    </div>
  </div>
  <div
    class="absolute cursor-pointer"
    style={`${categories.street.display?"top: 39.1%; left:64.83%; z-index:10;" :"display:none;"}`}
    on:mouseenter={() => mouseEnterEvent(categories.street)}
    on:focus={() => mouseEnterEvent(categories.street)}
    on:mouseleave={() => mouseLeaveEvent(categories.street)}
  >
    <img
      src={categories.street.hover ? streetHovered : street}
      alt="Street"
      style="width: 14.29vw;"
    />
    <div
      style={`${
        categories.street.hover
          ? "position:absolute;  top:0%; right:100%;"
          : "display:none;"
      } padding-right:3.47vw; padding-top:2vw; width: 32vw;`}
    >
      <div style="display:grid; text-align:right;" class="right">
        <p>om swaha</p>
        <p>dafa no. 180</p>
        <p>walk</p>
        <p>rti</p>
        <p>artists unite</p>
        <p>mob lynching</p>
        <p>shaheen bagh</p>
        <p>farmer’s strike</p>
        <p>on gandhi</p>
      </div>
    </div>
  </div>

</div>

<style>
  p {
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    background-image: linear-gradient(white, white);
    background-repeat: no-repeat;
    background-size: 217px 1px;
    background-position: left bottom;
  }
  .right > p {
    background-position: right bottom;
  }
</style>
