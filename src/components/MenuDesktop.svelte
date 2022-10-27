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
    street: new Category(false, true, "#205F39"),
    appliedTheatre: new Category(false, true, "#4F6395"),
    kathakali: new Category(false, true, "#9B2F2F"),
    making: new Category(false, true, "#CE9628"),
    teaching: new Category(false, true, "#024C5C"),
    digitalCreations: new Category(false, true, "#BE8565"),
    events: new Category(false, true, "#557A8E"),
    about: new Category(false, true, "#672649"),
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

<div
  class="h-[110vh] overflow-hidden"
  style={`background-color: ${backgroundColour};`}
>
  <menu style={`background-color: ${backgroundColour};`}>
    <div class="menu_container">
      <a
        href="/productions"
        class="category_image"
        style={categories.production.display
          ? "top: 39.06%; left:20.84%; z-index:10;"
          : "display:none;"}
        on:mouseenter={() => mouseEnterEvent(categories.production)}
        on:focus={() => mouseEnterEvent(categories.production)}
        on:mouseleave={() => mouseLeaveEvent(categories.production)}
      >
        <img
          src={productions}
          alt="Productions"
          style={`width: 25.43vw; max-width: 366.15px; ${
            categories.production.hover
              ? "filter: brightness(0) invert(1);"
              : ""
          }`}
        />
        <div
          class="category_details"
          style={categories.production.hover
            ? "position:absolute;  top:0%; left:100%;"
            : "display:none;"}
        >
          <div>
            <a href="/productions/1#drawer"><p>loose woman</p></a>
            <a href="/productions/2#drawer"><p>non-stop feel good show</p></a>
            <a href="/productions/3#drawer"><p>ravanama</p></a>
            <a href="/productions/4#drawer"><p>quality street</p></a>
            <a href="/productions/5#drawer"
              ><p>are you home, lady macbeth?</p></a
            >
            <a href="/productions/6#drawer"><p>hand over fist</p></a>
            <a href="/productions/7#drawer"
              ><p>heads are meant for walking into</p></a
            >
            <a href="/productions/8#drawer"><p>departures</p></a>
            <a href="/productions/9#drawer"><p>the job</p></a>
            <a href="/productions/10#drawer"><p>khol do</p></a>
          </div>
        </div>
      </a>
      <a
        href="/comedy"
        class="category_image"
        style={categories.comedy.display
          ? "top: 39.61%; left:47.76%; z-index:10;"
          : "display:none;"}
        on:mouseenter={() => mouseEnterEvent(categories.comedy)}
        on:focus={() => mouseEnterEvent(categories.comedy)}
        on:mouseleave={() => mouseLeaveEvent(categories.comedy)}
      >
        <img
          src={comedy}
          alt="Comedy"
          style={`width: 16.36vw; max-width: 235.65px; ${
            categories.comedy.hover ? "filter: brightness(0) invert(1);" : ""
          }`}
        />
        <div
          class="category_details"
          style={categories.comedy.hover
            ? "position:absolute; top:0%; left:100%;"
            : "display:none;"}
        >
          <div>
            <a href="/comedy/1#drawer"><p>paru</p></a>
            <a href="/comedy/2#drawer"><p>dinner table</p></a>
            <a href="/comedy/3#drawer"><p>melon woman</p></a>
            <a href="/comedy/4#drawer"><p>jogger</p></a>
            <a href="/comedy/5#drawer"><p>body makeover</p></a>
            <a href="/comedy/6#drawer"><p>cooking</p></a>
            <a href="/comedy/7#drawer"><p>mamata</p></a>
          </div>
        </div>
      </a>
      <a
        href="/street-theatre"
        class="category_image"
        style={categories.street.display
          ? "top: 39.1%; left:64.83%; z-index:10;"
          : "display:none;"}
        on:mouseenter={() => mouseEnterEvent(categories.street)}
        on:focus={() => mouseEnterEvent(categories.street)}
        on:mouseleave={() => mouseLeaveEvent(categories.street)}
      >
        <img
          src={street}
          alt="Street"
          style={`width: 14.29vw; max-width: 205.75px; ${
            categories.street.hover ? "filter: brightness(0) invert(1);" : ""
          }`}
        />
        <div
          class="category_details category_details_right"
          style={categories.street.hover
            ? "position:absolute;  top:0%; right:100%;"
            : "display:none;"}
        >
          <div class="box_right">
            <a href="/street-theatre/1#drawer"><p>om swaha</p></a>
            <a href="/street-theatre/2#drawer"><p>dafa no. 180</p></a>
            <a href="/street-theatre/3#drawer"><p>walk</p></a>
            <a href="/street-theatre/4#drawer"><p>rti</p></a>
            <a href="/street-theatre/5#drawer"><p>not in my name</p></a>
            <a href="/street-theatre/6#drawer"><p>artists unite!</p></a>
            <a href="/street-theatre/7#drawer"><p>shaheen bagh</p></a>
            <a href="/street-theatre/8#drawer"><p>the preamble</p></a>
            <a href="/street-theatre/8#drawer"><p>farmer’s strike</p></a>
          </div>
        </div>
      </a>
      <a
        href="/applied-theatre"
        class="category_image"
        style={categories.appliedTheatre.display
          ? "top: 49.55%; left:15.85%; z-index:10;"
          : "display:none;"}
        on:mouseenter={() => mouseEnterEvent(categories.appliedTheatre)}
        on:focus={() => mouseEnterEvent(categories.appliedTheatre)}
        on:mouseleave={() => mouseLeaveEvent(categories.appliedTheatre)}
      >
        <img
          src={appliedTheatre}
          alt="Applied Theatre"
          style={`width: 31.83vw; max-width: 458.32px; ${
            categories.appliedTheatre.hover
              ? "filter: brightness(0) invert(1);"
              : ""
          }`}
        />
        <div
          class="category_details"
          style={categories.appliedTheatre.hover
            ? "position:absolute; top:0%; left:100%;"
            : "display:none;"}
        >
          <div>
            <a href="/applied-theatre/#drawer"
              ><p>theatre programmes for schools</p></a
            >
            <a href="/applied-theatre/#drawer"><p>teaching teachers</p></a>
          </div>
        </div>
      </a>
      <a
        href="/kathakali"
        class="category_image"
        style={categories.kathakali.display
          ? "top: 49.05%; left:48.69%; z-index:10;"
          : "display:none;"}
        on:mouseenter={() => mouseEnterEvent(categories.kathakali)}
        on:focus={() => mouseEnterEvent(categories.kathakali)}
        on:mouseleave={() => mouseLeaveEvent(categories.kathakali)}
      >
        <img
          src={kathakali}
          alt="Kathakali"
          style={`width: 18.63vw; max-width: 268.32px; ${
            categories.kathakali.hover ? "filter: brightness(0) invert(1);" : ""
          }`}
        />
      </a>
      <a
        href="/making"
        class="category_image"
        style={categories.making.display
          ? "top: 48.85%; left:68.32%; z-index:10;"
          : "display:none;"}
        on:mouseenter={() => mouseEnterEvent(categories.making)}
        on:focus={() => mouseEnterEvent(categories.making)}
        on:mouseleave={() => mouseLeaveEvent(categories.making)}
      >
        <img
          src={making}
          alt="Making"
          style={`width: 15.84vw; max-width: 228.15px; ${
            categories.making.hover ? "filter: brightness(0) invert(1);" : ""
          }`}
        />
      </a>
      <a
        href="/teaching"
        class="category_image"
        style={categories.teaching.display
          ? "top: 58.17%; left:26.95%; z-index:10;"
          : "display:none;"}
        on:mouseenter={() => mouseEnterEvent(categories.teaching)}
        on:focus={() => mouseEnterEvent(categories.teaching)}
        on:mouseleave={() => mouseLeaveEvent(categories.teaching)}
      >
        <img
          src={teaching}
          alt="Teaching"
          style={`width: 19.83vw; max-width: 285.6px; ${
            categories.teaching.hover ? "filter: brightness(0) invert(1);" : ""
          }`}
        />
      </a>
      <a
        href="/digital"
        class="category_image"
        style={categories.digitalCreations.display
          ? "top: 57.91%; left:47.84%; z-index:10;"
          : "display:none;"}
        on:mouseenter={() => mouseEnterEvent(categories.digitalCreations)}
        on:focus={() => mouseEnterEvent(categories.digitalCreations)}
        on:mouseleave={() => mouseLeaveEvent(categories.digitalCreations)}
      >
        <img
          src={digitalCreations}
          alt="Digital Creations"
          style={`width: 11.7vw; max-width: 169.79px; ${
            categories.digitalCreations.hover
              ? "filter: brightness(0) invert(1);"
              : ""
          }`}
        />
      </a>
      <div
        class="category_image"
        style={categories.events.display
          ? "top: 57.47%; left:61.11%; z-index:10;"
          : "display:none;"}
        on:mouseenter={() => mouseEnterEvent(categories.events)}
        on:focus={() => mouseEnterEvent(categories.events)}
        on:mouseleave={() => mouseLeaveEvent(categories.events)}
      >
        <img
          src={events}
          alt="Events"
          style={`width: 11.99vw; max-width: 172.61px; ${
            categories.events.hover ? "filter: brightness(0) invert(1);" : ""
          }`}
        />
      </div>
      <a
        href="/about"
        class="category_image"
        style={categories.about.display
          ? "top: 66.21%; left:43.46%; z-index:10;"
          : "display:none;"}
        on:mouseenter={() => mouseEnterEvent(categories.about)}
        on:focus={() => mouseEnterEvent(categories.about)}
        on:mouseleave={() => mouseLeaveEvent(categories.about)}
      >
        <img
          src={about}
          alt="About"
          style={`width: 13.11vw; max-width: 188.73px; ${
            categories.about.hover ? "filter: brightness(0) invert(1);" : ""
          }`}
        />
      </a>
    </div>
  </menu>
</div>

<style>
  menu {
    /* min-height: 100vh; */
    height: 1024px;
    /* overflow: hidden; */
    /* width: 100vw; */
  }
  p {
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    background-image: linear-gradient(white, white);
    background-repeat: no-repeat;
    background-size: 217px 1px;
    background-position: left bottom;
  }
  .box_right > a > p {
    background-position: right bottom;
    text-align: right;
  }
  .category_image {
    position: absolute;
    cursor: pointer;
  }
  .category_details {
    padding-left: 3.47vw;
    padding-top: 2vw;
    width: 20vw;
  }
  .category_details_right {
    padding-left: 0vw;
    padding-right: 3.47vw;
  }
  .menu_container {
    width: 100%;
    height: 100%;
    max-width: 1440px;
    margin: auto;
    position: relative;
  }
</style>
