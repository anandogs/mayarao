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

<menu style={`background-color: ${backgroundColour};`}>
  <div
    class="category_image"
    style={categories.production.display
      ? "top: 39.06%; left:20.84%; z-index:10;"
      : "display:none;"}
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
  </div>
  <div
    class="category_image"
    style={categories.comedy.display
      ? "top: 39.61%; left:47.76%; z-index:10;"
      : "display:none;"}
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
  </div>
  <div
    class="category_image"
    style={categories.street.display
      ? "top: 39.1%; left:64.83%; z-index:10;"
      : "display:none;"}
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
  </div>
  <div
    class="category_image"
    style={categories.appliedTheatre.display
      ? "top: 49.55%; left:15.85%; z-index:10;"
      : "display:none;"}
    on:mouseenter={() => mouseEnterEvent(categories.appliedTheatre)}
    on:focus={() => mouseEnterEvent(categories.appliedTheatre)}
    on:mouseleave={() => mouseLeaveEvent(categories.appliedTheatre)}
  >
    <img
      src={categories.appliedTheatre.hover
        ? appliedTheatreHovered
        : appliedTheatre}
      alt="Applied Theatre"
      style="width: 31.83vw;"
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
  </div>
  <div
    class="category_image"
    style={categories.kathakali.display
      ? "top: 49.05%; left:48.69%; z-index:10;"
      : "display:none;"}
    on:mouseenter={() => mouseEnterEvent(categories.kathakali)}
    on:focus={() => mouseEnterEvent(categories.kathakali)}
    on:mouseleave={() => mouseLeaveEvent(categories.kathakali)}
  >
    <img
      src={categories.kathakali.hover ? kathakaliHovered : kathakali}
      alt="Kathakali"
      style="width: 18.63vw;"
    />
  </div>
  <div
    class="category_image"
    style={categories.making.display
      ? "top: 48.85%; left:68.32%; z-index:10;"
      : "display:none;"}
    on:mouseenter={() => mouseEnterEvent(categories.making)}
    on:focus={() => mouseEnterEvent(categories.making)}
    on:mouseleave={() => mouseLeaveEvent(categories.making)}
  >
    <img
      src={categories.making.hover ? makingHovered : making}
      alt="Making"
      style="width: 15.84vw;"
    />
  </div>
  <div
    class="category_image"
    style={categories.teaching.display
      ? "top: 58.17%; left:16.22%; z-index:10;"
      : "display:none;"}
    on:mouseenter={() => mouseEnterEvent(categories.teaching)}
    on:focus={() => mouseEnterEvent(categories.teaching)}
    on:mouseleave={() => mouseLeaveEvent(categories.teaching)}
  >
    <img
      src={categories.teaching.hover ? teachingHovered : teaching}
      alt="Teaching"
      style="width: 19.83vw;"
    />
  </div>
  <div
    class="category_image"
    style={categories.digitalCreations.display
      ? "top: 57.47%; left:36.60%; z-index:10;"
      : "display:none;"}
    on:mouseenter={() => mouseEnterEvent(categories.digitalCreations)}
    on:focus={() => mouseEnterEvent(categories.digitalCreations)}
    on:mouseleave={() => mouseLeaveEvent(categories.digitalCreations)}
  >
    <img
      src={categories.digitalCreations.hover
        ? digitalCreationsHovered
        : digitalCreations}
      alt="Digital Creations"
      style="width: 33.87vw;"
    />
  </div>
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
      src={categories.events.hover ? eventsHovered : events}
      alt="Events"
      style="width: 11.99vw;"
    />
  </div>
  <div
    class="category_image"
    style={categories.about.display
      ? "top: 66.21%; left:43.46%; z-index:10;"
      : "display:none;"}
    on:mouseenter={() => mouseEnterEvent(categories.about)}
    on:focus={() => mouseEnterEvent(categories.about)}
    on:mouseleave={() => mouseLeaveEvent(categories.about)}
  >
    <img
      src={categories.about.hover ? aboutHovered : about}
      alt="About"
      style="width: 13.11vw;"
    />
  </div>
</menu>

<style>
  menu {
    height: 100vh;
    width: 100vw;
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
</style>
