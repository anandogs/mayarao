<script lang="ts">
  import type { WritableAtom } from "nanostores";

  export let toggleItem: any;
  export let marginTop: number = 24
  export let allItems:WritableAtom[]
  export let lastItem:Boolean = false

  const handleClick = () => {
    for (const item of allItems) {
      if (item !== toggleItem) {
        item.set(false);
      }
    }
    toggleItem.set(!$toggleItem);
    setTimeout(()=> {document.querySelector("#drawer")?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 300)
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
  {#if lastItem}
  <div class="lg:pb-20"/>
  {:else}
<div class="border-b border-[#020202] w-[216px] lg:w-[90%] m-auto" style={`margin-top: ${marginTop}px`}></div>
{/if}
<style>

</style>