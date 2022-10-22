<script>
  import {onMount} from 'svelte';

  import Carousel from "./Carousel.svelte";
  import CarouselDesktop from "./CarouselDesktop.svelte";
  import { itemList } from "./stores/kathakaliStore";
  
    let teachingStage = 0
    onMount(() => {
      teachingStage = 1
    })
</script>
<main>
    
{#if teachingStage !== 0}
<div class="mb-[45px] lg:mb-[60px]">
  <div class="lg:hidden">
    <Carousel data={itemList[0]} slideshowFor="kathakali" />
  </div>
  <div class="hidden lg:block">
    <CarouselDesktop
      data={itemList[0]}
      slideshowFor="kathakali"
    />
  </div>
</div>
{/if}
</main>

