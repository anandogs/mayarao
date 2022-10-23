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

<div
  class="h-screen overflow-hidden"
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
            <p>paru</p>
            <p>dinner table</p>
            <p>melon woman</p>
            <p>jogger</p>
            <p>body makeover</p>
            <p>cooking</p>
            <p>mamata</p>
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
            <p>theatre programmes for schools</p>
            <p>teaching teachers</p>
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
          ? "top: 58.17%; left:16.22%; z-index:10;"
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
          ? "top: 57.47%; left:36.60%; z-index:10;"
          : "display:none;"}
        on:mouseenter={() => mouseEnterEvent(categories.digitalCreations)}
        on:focus={() => mouseEnterEvent(categories.digitalCreations)}
        on:mouseleave={() => mouseLeaveEvent(categories.digitalCreations)}
      >
        <img
          src={digitalCreations}
          alt="Digital Creations"
          style={`width: 33.87vw; max-width: 487.67px; ${
            categories.digitalCreations.hover
              ? "filter: brightness(0) invert(1);"
              : ""
          }`}
        />
        </a>
      <div
        class="category_image"
        style={categories.events.display
          ? "top: 57.47%; left:71.75%; z-index:10;"
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
  .box_right > p {
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
