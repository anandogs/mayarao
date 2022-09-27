<script lang="ts">
  export let toggleItem: any;
  import { allItems } from "./stores/aboutStore";
  const handleClick = () => {
    for (const item of allItems) {
      if (item !== toggleItem) {
        item.set(false);
      }
    }
    toggleItem.set(!$toggleItem);
  };
</script>

<header on:click={() => handleClick()} style={"display: grid; justify-content:center;"}>
  <slot name="heading" />
</header>
{#if $toggleItem}
  <div>
    <slot name="content"/>
  </div>
{/if}
<div class="border-b border-[#020202] mt-6 w-[216px] m-auto"></div>
<style>
    header {
        display: grid;
        justify-content: center;
    }
</style>