<script lang="ts">

  export let numberOfSlides: number;
  import chevronLeft from "../images/chevron_left.svg";
  import chevronRight from "../images/chevron_right.svg";

  let currentSlide = 1;

  const toggleSlide = (direction: string) => {
    if (direction === "left") {
      if (currentSlide === 1) {
        currentSlide = numberOfSlides;
      } else {
        currentSlide--;
      }
    } else {
      if (currentSlide === numberOfSlides) {
        currentSlide = 1;
      } else {
        currentSlide++;
      }
    }
    let slideId = `desktop-slide-${currentSlide}`;
    document.getElementById(slideId)!.scrollIntoView({
      behavior: "smooth",
    });
  };
</script>

<div class="slider ">
  <div class="slides">
    {#each Array(numberOfSlides) as _, i}
      <div class="carousel-slide" id={`desktop-slide-${i + 1}`}/>
    {/each}
  </div>
  <div class="flex">
    <div class="slider-box">
      {#each Array(numberOfSlides) as _, i}
        <a
          href={`#desktop-slide-${i + 1}`}
          id={`slider-${i + 1}`}
          class="slider-dot"
          style={i + 1 === currentSlide
            ? "color: #000; border-bottom-color:#020202"
            : ""}
          on:click={() => (currentSlide = i + 1)}>{`0${i + 1}`}</a
        >
      {/each}
    </div>
    <div class="slider-chevron">
      <img
        src={chevronLeft}
        alt="chevron left"
        on:click={() => toggleSlide("left")}
      />
      <img
        src={chevronRight}
        alt="chevron right"
        on:click={() => toggleSlide("right")}
      />
    </div>
    </div>
</div>

<style>
  .slider {
    width: 100vw;
  }

  .slides {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }



  .slides::-webkit-scrollbar {
    display: none;
  }

  .slides > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('../images/carousel_fullscreen_desktop.png');
    background-size: cover;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }

  .slider-box {
    display: flex;
    position: absolute;
    left: 5%;
    width: 50%;
    justify-content: flex-start;
    transform: translateY(-65px);
    z-index: 10;
  }

  .slider-chevron {
    display: flex;
    cursor: pointer;
    position: absolute;
    width: 50%;
    justify-content: flex-end;
    right: 5%;
    column-gap: 50px;
    transform: translateY(-65px);
  }

  .slider-box > a {
    position: relative;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    line-height: 17px;
    letter-spacing: 0.03em;
    text-align: center;
    color: #c4c4c4;
    border-bottom-width: 2px;
    border-bottom-style: solid;
  }

  .slider-box > a:active {
    color: #000;
  }

</style>
