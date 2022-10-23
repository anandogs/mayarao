<script lang="ts">
  import { onMount } from "svelte";
  export let slideshowFor: string;
  import chevronLeft from "../images/chevron_left.svg";
  import chevronRight from "../images/chevron_right.svg";
  import type { itemListType } from "./stores/productionsStore";

  export let data: itemListType;
  import playButton from "../images/play.svg";
  import AudioPlayer from "./AudioPlayer.svelte";
  import { isOverlappingDesktopCarousel } from "../components/stores/buttonStore";

  let currentSlide: number = 1;
  let numberOfSlides: number;
  let slidesToShow: number;

  onMount(() => {
    console.log(data);
  });


  $: {
    const calculateNumberOfSlides = (slideshowWidth:number) => {
      let windowWidth = window.innerWidth;
      if (slideshowWidth < windowWidth) {
        return 1
      } else {
        let slideRatio = slideshowWidth / windowWidth;
      let roundedSlideRatio = Math.round(slideRatio);
      if (roundedSlideRatio < slideRatio) {
        roundedSlideRatio += 1;
      }
      return roundedSlideRatio;
    };
      }
      
    numberOfSlides = calculateNumberOfSlides(data.slideshowWidth);
    slidesToShow = numberOfSlides - 1;
    const slideshowStart = document.getElementById("slideshow-start");

    const slideshowOptions = {
      threshold: 0.9,
    };

    const slideshowObserver = new IntersectionObserver((entry) => {
      if (entry[0].boundingClientRect.y < 160) {
        isOverlappingDesktopCarousel.set(true);
      } else {
        isOverlappingDesktopCarousel.set(false);
      }
    }, slideshowOptions);
    if (slideshowStart) {
      slideshowObserver.observe(slideshowStart);
    }
    
     // will only get called when the `color` changed.
  }


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

<div class="slider" id="slideshow-start">
  <div class="slides">
    <div class="carousel-slide" id="desktop-slide-1">
      <div class="relative h-full" style={`width: ${data.slideshowWidth}px;`}>
        {#if data.images}
        {#each data.images as image}
          <a href="/{slideshowFor}/full-screen/{data.id}">
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}              
              style={`left: ${image.left}px; position: absolute; top: ${image.top}px;`}
            />
          </a>
        {/each}
        {/if}
        
        {#if data.audio}
        {#each data.audio as audio}
        
        <div class="w-full" style={`left: ${audio.left}px; position: absolute; top: ${audio.top}px;`}>
          <AudioPlayer soundtrack={audio.src}/>
        </div>
        {/each}
        {/if}
        {#if data.videos}
          {#each data.videos as video}
            <a href="/{slideshowFor}/video/{data.id}/{video.videoId}">
              <div
                style={`left: ${video.left}px; position: absolute; top: ${video.top}px; width: ${video.width}px;`}
              >
                <div class="relative w-full">
                  <img
                    src={video.videoImage}
                    alt={video.alt}
                    width={video.width}
                  />
                  <img
                    src={playButton}
                    alt="play button"
                    class="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
            </a>
          {/each}
        {/if}
      </div>
    </div>

    {#each Array(slidesToShow) as _, i}
      <div class="carousel-slide" id={`desktop-slide-${i + 2}`} />
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
          on:click={() => {
            currentSlide = i + 1;
          }}>{`0${i + 1}`}</a
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
    max-width: 100%;
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

  .carousel-slide {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 100vw;
    height: 860px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }

  .slider-box {
    transform: translateX(75px);
    display: flex;
    width: 100%;
    justify-content: flex-start;
    padding-top: 70px;
    padding-left: 78px;
  }

  .slider-chevron {
    cursor: pointer;
    display: flex;
    z-index: 20;
    column-gap: 50px;
    padding-top: 70px;
    padding-right: 80px;
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
    border-bottom-color: #c4c4c4;
  }
</style>
