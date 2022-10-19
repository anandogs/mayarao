<script lang="ts">
  import Carousel from "../Carousel.svelte";
import type { itemListType } from "../stores/productionsStore";
  export let itemList: Array<itemListType>;

  import DesktopDrawerContents from "./DesktopDrawerContents.svelte";

  let clickedItem: itemListType | undefined = undefined;

  const valueClicked = (val: itemListType) => {
    for (const item of itemList) {
      if (item.display !== val.display) {
        item.display.value = false;
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
          : ""}
      >
        {item.name}
      </h4>
      {#if item.display.value}
      <div class="mb-[25px]">
        
        {#each  item.text as text }
        <p>{text}</p>  
        {/each }        
        <Carousel data={item} slideshowFor={'productions'}/>
      </div>
      {#if item.quoteMobile}
      <div class="mb-[25px] flex justify-center items-center">
      <img src={item.quoteMobile} alt="quote">
    </div>
      {/if}

      {/if}
      {#if i !== itemList.length - 1}
      <div class="border_bottom_large" />
      {/if}
      {/each}
  </div>
  
  
  


</div>

<style>
  h4 {
    color: #468fb8;
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
</style>
