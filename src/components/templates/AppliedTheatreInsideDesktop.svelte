<script lang="ts">
  import type { WritableAtom } from "nanostores";
  import AppliedTheatreInsideDetailDesktop from "./AppliedTheatreInsideDetailDesktop.svelte";
import {
    heiretikos,
    igloo,
    razia,
    sciva,
    pandita,
    allItems,
  } from "../stores/appliedTheatreStore";

  let clickedItem: WritableAtom | undefined = undefined;
  let hoveredItem: WritableAtom | undefined = undefined;


  const hoverDisplayEnter = (hoveredVal: WritableAtom) => {
    hoveredVal.set(true);
    hoveredItem = hoveredVal;
    
  }
  const hoverDisplayLeave = (hoveredVal: WritableAtom) => {
    if (hoveredVal !== clickedItem) {
      hoveredVal.set(false);
      hoveredItem = undefined;
    }
  }
  const valueClicked = (val: WritableAtom) => {
    for (const item of allItems) {
      if (item !== val) {
        item.set(false);
      }
    }
    val.set(true);
    clickedItem = val;
  }
</script>
<div>
    <div class="drawer">
        <h4 on:mouseenter={() => hoverDisplayEnter(heiretikos)} on:mouseleave={() => hoverDisplayLeave(heiretikos)} on:click={() => valueClicked(heiretikos)} style={(clickedItem === heiretikos || hoveredItem === heiretikos) ? "color:#020202":""}>
            Heiretikos, Or the One Who Chooses
        </h4>
        <h4 on:mouseenter={() => hoverDisplayEnter(igloo)} on:mouseleave={() => hoverDisplayLeave(igloo)} on:click={() => valueClicked(igloo)} style={(clickedItem === igloo || hoveredItem === igloo) ? "color:#020202":""}>
            igloo igloo
          </h4>
          <h4 on:mouseenter={() => hoverDisplayEnter(razia)} on:mouseleave={() => hoverDisplayLeave(razia)} on:click={() => valueClicked(razia)} style={(clickedItem === razia || hoveredItem === razia) ? "color:#020202":""}>
            razia
          </h4>
          <h4 on:mouseenter={() => hoverDisplayEnter(sciva)} on:mouseleave={() => hoverDisplayLeave(sciva)} on:click={() => valueClicked(sciva)} style={(clickedItem === sciva || hoveredItem === sciva) ? "color:#020202":""}>
            sciva and jagli
          </h4>
          <h4 on:mouseenter={() => hoverDisplayEnter(pandita)} on:mouseleave={() => hoverDisplayLeave(pandita)} on:click={() => valueClicked(pandita)} style={(clickedItem === pandita || hoveredItem === pandita) ? "color:#020202":""}>
            pandita ramabai
          </h4>
      </div>
      <div class="border_bottom_large mt-[50px]" />
      

      {#if $heiretikos}
      <AppliedTheatreInsideDetailDesktop title={'Heiretikos, Or the One Who Chooses'}/>
      {/if}
        {#if $igloo}
        <AppliedTheatreInsideDetailDesktop title={'igloo igloo'}/>
        {/if}
        {#if $razia}
        <AppliedTheatreInsideDetailDesktop title={'razia'}/>
        {/if}
        {#if $sciva}
        <AppliedTheatreInsideDetailDesktop title={'sciva and jagli'}/>
        {/if}
        {#if $pandita}
        <AppliedTheatreInsideDetailDesktop title={'pandita ramabai'}/>
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