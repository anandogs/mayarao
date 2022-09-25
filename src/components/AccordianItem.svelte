<script lang="ts">
  export let toggleItem: any;
  
</script>

<header on:click={() => toggleItem.set(!$toggleItem)} style={"display: grid; justify-content:center;"}>
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