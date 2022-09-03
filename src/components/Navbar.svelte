<script lang='ts'>
  import logo from "../images/logo.svg";
  export let menuPage:boolean;
</script>

<nav class="fixed top-0 left-0 right-0 lg:px-[75px]">
  <div class="lg:pt-[100px] lg:flex lg:justify-between lg:items-start">

    <p>
      <img src={logo} alt="logo" class="h-[92px] w-[168px]" />
    </p>
    <div class="flex gap-x-5">
    {#if menuPage}
      <div>
      <button on:click={()=>history.back()}>close</button>
    </div>
    {:else}
    <a href="/menu">
    <div>
      <button>menu</button>
    </div>
  </a>
    {/if}
    <div>
      <button>email maya</button>
    </div>
  </div>
  </div>
</nav>