<script lang="ts">
  import { onMount } from "svelte";
  import type { itemListType } from "./stores/helpers"; 
  export let data: itemListType | undefined;
  let numberOfSlides: number = data?.images?.length || 10;

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

<div class="slider ">
  <div class="slides">
    {#if data?.images}
    {#each data.images as image, i}
      <div class="carousel-slide" id={`slide-${i + 1}`}>
      <img
        src={image.src}
        alt={image.alt}
        style="width: 100%; height: 100%; object-fit: cover;"
/>
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
        on:click={() => (currentSlide = i + 1)}>{`0${i + 1}`}</a
      >
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
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slider-box {
    display: flex;
    position: absolute;
    width: 100%;
    justify-content: center;
    /* padding-top: 20px; */
    transform: translateY(-65px);
    /* z-index: 20; */
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
