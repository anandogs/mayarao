<script lang="ts">
  import { onMount } from "svelte";
  import type { itemListType } from "./stores/helpers";
  export let data: itemListType | undefined;
  export let slideshowFor: string;
  import playButton from "../images/play.svg";
  import AudioPlayer from "./AudioPlayer.svelte";

  let allData: any = [];
  const id = data?.id;
  if (data) {
    if (data.images) {
      allData = allData.concat(data.images);
    }
    if (data.videos) {
      allData = allData.concat(data.videos);
    }
    if (data.audio) {
      allData = allData.concat(data.audio);
    }
  }

  let numberOfSlides = allData.length;
  let currentSlide = 1;

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
</script>

<div class="slider">
  <div class="slides">
    {#if allData}
      {#each allData as data, i}
        <div class="carousel-slide" id={`slide-${i + 1}`}>
          {#if data.videoId}
            <a href="/{slideshowFor}/video/{id}/{data.videoId}">
              <div class="relative w-full">
                <img src={data.videoImage} alt={data.alt} />
                <img
                  src={playButton}
                  alt="play button"
                  class="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </a>
            {:else if data.src.split('.')[1] === "mp3"}
            
            
              <div class="relative w-full">
                <div class="w-full flex justify-center items-center">
                  <AudioPlayer soundtrack={data.src} />
                </div>                
              </div>
            
            
            
          {:else}
            <a href="/{slideshowFor}/full-screen/{id}">
              <img
                src={data.src}
                alt={data.alt}
                style="width: 100%; height: 100%; object-fit: cover;"
              />
            </a>
          {/if}
        </div>
      {/each}
    {/if}
  </div>
  <div class="slider-box">
    {#each Array(numberOfSlides) as _, i}
      <a
        href={`#slide-${i + 1}`}
        id={`slider-${i + 1}`}
        class="slider-dot"
        style={i + 1 === currentSlide
          ? "color: #000; border-bottom-color:#020202"
          : ""}
        on:click={() => (currentSlide = i + 1)}
      >
        {#if i < 9}
          {`0${i + 1}`}
        {:else}
          {i + 1}
        {/if}
      </a>
    {/each}
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
    height: 480px;
    background: #020202;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }

  .slider-box {
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 20px;
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
    color: #020202;
    border-bottom-width: 2px;
    border-bottom-style: solid;
  }

  .slider-box > a:active {
    color: #000;
  }
</style>
