<script lang="ts">
  import CarouselDesktop from "../CarouselDesktop.svelte";
  import type { itemListType } from "../stores/helpers";
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
        {#if data.metadata.credits}
          {#each data.metadata.credits as credit}
            <div>
              <h4 class="credit heading">{Object.keys(credit)[0]}</h4>
              <p class="credit description">{Object.values(credit)[0]}</p>
            </div>
          {/each}
        {/if}
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
  {#if data.images || data.audio || data.videos}
    <div class="pb-[100px]">
      <CarouselDesktop {data} slideshowFor={"productions"} />
    </div>
  {/if}
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
    letter-spacing: .03em;
    padding-bottom: 6px;
  }
  .details {
    margin-top: 50px;
    display: flex;
    column-gap: 50px;
    width: fit-content;
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
