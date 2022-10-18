<script lang="ts">
  import { onMount } from "svelte";
  export let slideshowWidth: number;
  import chevronLeft from "../images/chevron_left.svg";
  import chevronRight from "../images/chevron_right.svg";
  export let images:Array<{src:string, alt:string, width:number, left:number, top:number}>;
  import LM3 from "../images/applied_theatre/slideshow/LM3.png";
  import playButton from "../images/play.svg";
  import AudioPlayer from "./AudioPlayer.svelte";
  import { isOverlappingDesktopCarousel } from '../components/stores/buttonStore';

  let currentSlide: number = 1;
  let numberOfSlides: number;
  let slidesToShow: number;

  onMount(() => {
    const calculateNumberOfSlides = () => {
      let windowWidth = window.innerWidth;
      let slideRatio = slideshowWidth / windowWidth;
      let roundedSlideRatio = Math.round(slideRatio);
      if (roundedSlideRatio < slideRatio) {
        roundedSlideRatio += 1;
      }
      return roundedSlideRatio;
    };
    numberOfSlides = calculateNumberOfSlides();
    slidesToShow = numberOfSlides - 1;
    const slideshowStart = document.getElementById("slideshow-start");


    const slideshowOptions = {
      threshold: 0.9
      
    }

    const slideshowObserver = new IntersectionObserver((entry) => {
          if (entry[0].boundingClientRect.y < 160){
            isOverlappingDesktopCarousel.set(true);  
          }
          
                else {
          isOverlappingDesktopCarousel.set(false);
        }

    }, slideshowOptions);
    if (slideshowStart) {
      slideshowObserver.observe(slideshowStart);
    }

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
    let slideId = `desktop-slide-${currentSlide}`;
    document.getElementById(slideId)!.scrollIntoView({
      behavior: "smooth",
    });
  };
</script>


  <div class="slider" id="slideshow-start">
    <div class="slides">
      <div class="carousel-slide" id="desktop-slide-1">
        <div class="relative h-full" style={`width: ${slideshowWidth}px;`}>
        {#each images as image}
          <a href="/productions/full-screen/1">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            style={`left: ${image.left}px; position: absolute; top: ${image.top}px;`}
            class="absolute top-0"
          />
        </a>
        
        {/each}
        
<!--         
        
          <a href="/full-screen">
          <img
            src={LM1}
            alt="slide 1"
            width="759px"
            class="absolute top-0 left-0"
          />
        </a>
        <a href="/full-screen">
          <img
            src={LM2}
            alt="slide 1"
            width="418px"
            class="absolute top-[50px] left-[759px]"
          />
        </a>
        <a href="/full-screen">
          <img
            src={LM4}
            alt="slide 1"
            width="759px"
            class="absolute top-0 left-[1177px]"
          />
        </a>
        <a href="/full-screen">
          <img
            src={LM5}
            alt="slide 1"
            width="715px"
            class="absolute top-[70px] left-[1936px]"
          />
        </a> -->

          <div class="top-[520px] left-[93px] absolute w-full">
            <AudioPlayer />
          </div>
          <a href="/video">
            <div class="absolute top-[480px] left-[298px]">
              <div class="relative w-full">
                <img src={LM3} alt="slide 1" width="751px" />
                <img
                  src={playButton}
                  alt="play button"
                  class="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </a>
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
              (currentSlide = i + 1)
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
    max-width:100%;
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
