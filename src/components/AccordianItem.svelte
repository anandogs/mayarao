<script lang="ts">
  import type { WritableAtom } from "nanostores";


  export let toggleItem: any;
  export let marginTop: number = 24
  export let allItems:WritableAtom[]
  
  const handleClick = () => {
    for (const item of allItems) {
      if (item !== toggleItem) {
        item.set(false);
      }
    }
    toggleItem.set(!$toggleItem);
  };
</script>

<header on:click={() => handleClick()} >
  <slot name="heading" />
</header>
{#if $toggleItem}
  <div>
    <slot name="content"/>
  </div>
{/if}
<div class="border-b border-[#020202] w-[216px] lg:w-[90%] m-auto" style={`margin-top: ${marginTop}px`}></div>
<style>

</style>