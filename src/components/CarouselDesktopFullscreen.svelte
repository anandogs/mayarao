<script lang="ts">
  import { onMount } from "svelte";
  export let numberOfSlides: number;
  import chevronLeft from "../images/chevron_left.svg";
  import chevronRight from "../images/chevron_right.svg";

  let currentSlide = 1;
  let lastSlide = numberOfSlides;

  onMount(() => {
    const images = document.querySelectorAll(".carousel-slide");
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSlide = parseInt(entry.target.id.split("-")[1]);
          }
        });
      },
      { threshold: 0.2 }
    );
    images.forEach((image) => {
      observer.observe(image);
    });
  });
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
    let slideId = `slide-${currentSlide}`;
    document.getElementById(slideId)!.scrollIntoView({
      behavior: "smooth",
    });
  };
</script>

<div class="slider ">
  <div class="slides">
    {#each Array(numberOfSlides) as _, i}
      <div class="carousel-slide" id={`slide-${i + 1}`}/>
    {/each}
  </div>
  <div class="slider-box">
    <a
      style={currentSlide === 1 ? "color:#000;" : ""}
      href="#slide-1"
      class={currentSlide === 1 ? "first-selected" : "first-unselected"}>01</a
    >
    <a
      style={currentSlide === 2
        ? "color:#000; border-bottom-color: #000;"
        : "border-bottom-color: #C4C4C4;"}
      href="#slide-2">02</a
    >
    <a
      style={currentSlide === 3
        ? "color:#000; border-bottom-color: #000;"
        : "border-bottom-color: #C4C4C4;"}
      href="#slide-3">03</a
    >
    <a
      style={currentSlide === 4
        ? "color:#000; border-bottom-color: #000;"
        : "border-bottom-color: #C4C4C4;"}
      href="#slide-4">04</a
    >
    <a
      style={currentSlide === 5
        ? "color:#000; border-bottom-color: #000;"
        : "border-bottom-color: #C4C4C4;"}
      href="#slide-5">05</a
    >
    <a
      style={currentSlide === 6
        ? "color:#000; border-bottom-color: #000;"
        : "border-bottom-color: #C4C4C4;"}
      href="#slide-6">06</a
    >
    <a
      style={currentSlide === 7
        ? "color:#000; border-bottom-color: #000;"
        : "border-bottom-color: #C4C4C4;"}
      href="#slide-7">07</a
    >
    <a
      style={currentSlide === 8
        ? "color:#000; border-bottom-color: #000;"
        : "border-bottom-color: #C4C4C4;"}
      href="#slide-8">08</a
    >
    <a
      style={currentSlide === 9
        ? "color:#000; border-bottom-color: #000;"
        : "border-bottom-color: #C4C4C4;"}
      href="#slide-9">09</a
    >

    <a
      style={currentSlide === 10 ? "color:#000;" : ""}
      href="#slide-10"
      class={currentSlide === 10 ? "last-selected" : "last-unselected"}>10</a
    >
  </div>
  <div class="slider-chevron absolute">
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

  .last-unselected {
    border-bottom-color: transparent;
  }

  .last-selected {
    border-bottom-color: transparent;
  }

  .first-unselected {
    border-bottom-color: transparent;
  }

  .last-selected {
    border-bottom-color: transparent;
  }

  .last-selected:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: #000;
    border-radius: 30px 30px;
    transform: translateX(-0.3px);
  }

  .last-unselected:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: #c4c4c4;
    border-radius: 0 30px 30px 0;
  }

  .first-selected:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: #000;
    border-radius: 30px 30px;
    transform: translateX(0.3px);
  }

  .first-unselected:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: #c4c4c4;
    border-radius: 30px 0 0 30px;
  }
</style>
