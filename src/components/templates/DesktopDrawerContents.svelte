<script lang="ts">
  import { text } from "svelte/internal";
import CarouselDesktop from "../CarouselDesktop.svelte";
  import type { itemListType } from "../stores/productionsStore";
  export let data: itemListType;

</script>

<div>

  <div class="mb-[50px]">
    <h3>
      {data.name}
    </h3>
    {#if data.metadata}
    <div class="details">
      
      <div>
        <h4 class="credit heading">year</h4>
        <p class="credit description">{data.metadata.year}</p>
      </div>

      {#each data.metadata.credits as credit}
        <div>
          <h4 class="credit heading">{Object.keys(credit)[0]}</h4>
          <p class="credit description">{Object.values(credit)[0]}</p>
        </div>
      {/each}

    </div>
    {/if}
  </div>
  <div class="project_description">
    {#if data.text}
    {#each data.text as para}
      <p>
        {para}
      </p>
    {/each}
    {/if}
  </div>
  <div class="pb-[100px]">
    <CarouselDesktop data={data} slideshowFor={"productions"}/>
  </div>
</div>

<style>
  h3 {
    text-transform: lowercase;
    margin-left: 5%;
  }
  .credit {
    font-size: 13px;
    line-height: 17px;
  }
  .heading {
    letter-spacing: 3%;
  }
  .details {
    margin-top: 50px;
    display: flex;
    column-gap: 50px;
    width: 609px;
    border-top: 1px solid #020202;
    border-bottom: 1px solid #020202;
    padding: 30px 0;
    margin-left: 5%;
  }
  .project_description {
    display: grid;
    row-gap: 15px;
    width: 484px;
    margin-bottom: 50px;
    margin-left: 5%;
  }
</style>
