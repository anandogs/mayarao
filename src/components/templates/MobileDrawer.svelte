<script lang="ts">
  import Carousel from "../Carousel.svelte";
  import type { itemListType } from "../stores/helpers";
  export let itemList: Array<itemListType>;
  export let categoryColor:string = '#020202';
  export let slideshowFor: string;
  let clickedItem: itemListType | undefined = undefined;
  let quoteSrc: string | null = null;
  const valueClicked = (val: itemListType) => {
    quoteSrc = null
    for (const item of itemList) {
      if (item.display !== val.display) {
        item.display.value = false;
      }
      else {
        if (item.quoteMobile) {
          quoteSrc = item.quoteMobile;
        }
      }
    }
    val.display.value = !val.display.value;
    if (val.display.value) {
      clickedItem = val;
    } else {
      clickedItem = undefined;
    }

    
  };
</script>

<div>
  <div class="drawer">
    {#each itemList as item, i}
      <h4
        on:click={() => valueClicked(item)}
        style={clickedItem
          ? clickedItem.name === item.name
            ? "color:#020202; font-size: 1.5625rem; line-height: 30px;"
            : ""
          : `color:${categoryColor}`}
      >
        {item.name}
      </h4>
      {#if item.display.value}
      <div class="mb-[25px]">
        {#if item.metadata}
          <div>
            <h4 class="credits">year</h4>
            <p>{item.metadata.year}</p>
          </div>
          {/if}
        {#if item.text}
        {#each  item.text as text }
        <p>{text}</p>  
        {/each }       
        {/if}
        {#if item.images}
        <Carousel data={item} slideshowFor={slideshowFor}/>
        {/if}
      </div>
      

      {/if}
      {#if i !== itemList.length - 1}
      <div class="border_bottom_large" />
      {/if}
      
      {/each}
      {#if quoteSrc}
      <div class="flex justify-center items-center px-4">
      <img src={quoteSrc} alt="quote">
    </div>
      {/if}
  </div>
  
</div>

<style>
  h4 {
    text-align: center;
    text-transform: lowercase;
    font-size: 1rem;
    line-height: 20.8px;
    cursor: pointer;
    margin-bottom: 25px;
  }
  .drawer {
    /* margin-left: 5%; */
    /* margin-right: 5%; */
    display: grid;
    justify-content: center;
    /* column-gap: 30px; */
    /* flex-wrap: wrap; */
  }
  .border_bottom_large {
    display: block;
    width: 217px;
    border-bottom: 1px;
    border-bottom-color: #020202;
    border-bottom-style: solid;
    margin: auto;
    margin-bottom: 25px;
  }
  p {
    text-align: center;
    margin-left: 19px;
    margin-right: 19px;
    margin-bottom: 25px;
  }
  .credits {
    margin-bottom: 0px;
    font-size: 0.8125rem;
    line-height: 17px;
    letter-spacing: 3%;
    color: #020202;
  }
</style>
