<script lang="ts">
  import { onMount } from 'svelte';
  export let drawerFor:string|null = null;
  import type { itemListType } from '../stores/helpers';
  export let categoryColor: string = "#468FB8"
  export let itemList: Array<itemListType>;
  import DesktopDrawerContents from "./DesktopDrawerContents.svelte";
  let clickedItem: itemListType | undefined = undefined;
  let hoveredItem: itemListType | undefined = undefined;


  onMount(() => {
    if(document.location.hash === '#drawer') {
      setTimeout(()=> {document.querySelector("#drawer")?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 300)
    }

    itemList.forEach((item) => {
      if (item.display.value) {
        clickedItem = item;
      }
    });
  });

  const valueClicked = (val: itemListType) => {
    for (const item of itemList) {
      if (item.display !== val.display) {
        item.display.value = false;
      }
    }
    if (drawerFor)
    {
      location.href = "./" + drawerFor +"/" + val.id + "#drawer";
    }
    else {
      location.href = "./" + val.id + "#drawer";
    }

  }
  const valueHovered = (val: itemListType) => {
    hoveredItem = val;
  }
  const valueUnhovered = () => {
    hoveredItem = undefined;
  }
</script>
<div>
  <div class="border_bottom_large mt-[50px]" />  
  <div class="drawer" id="drawer">
      {#each itemList as item}
      <h4 on:click={() => valueClicked(item)} style={clickedItem ? clickedItem.name === item.name ? "color:#020202":`color:${categoryColor}`:`color:${categoryColor}`} on:mouseenter={() => valueHovered(item)} on:mouseleave={() => valueUnhovered()}>
        {item.name}
      </h4>
      
      {/each}
      </div>
      <div class="border_bottom_large mt-[50px]" />

      {#if hoveredItem}
      <DesktopDrawerContents data={hoveredItem}/>
      {/if}

      
      {#if !hoveredItem && clickedItem}
      <DesktopDrawerContents data={clickedItem}/>
      {/if}
      
        {#if clickedItem?.quote}
        <div class="flex justify-center items-center mb-[87px]">
        <img src={clickedItem.quote} alt="quote" class="quote" />
      </div>
        {/if}
         
</div>
<style>
    h4 {
        color: #468FB8;
        text-transform: lowercase;
        font-size: 1.75rem;
        line-height: 36.4px;
        cursor: pointer;
    }
    .drawer {
      margin-left: 5%;
      margin-right: 5%;
         display: flex;
         column-gap: 30px;
         row-gap: 20px;
         flex-wrap: wrap; 

    }
    .border_bottom_large {
    display: block;
    width: 90%;
    border-bottom: 1px;
    border-bottom-color: #020202;
    border-bottom-style: solid;
    margin-bottom: 50px;
    margin-left: 5%;
    margin-right: 5%;
  }
</style>