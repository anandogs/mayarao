<script lang='ts'>
  import logo from "../images/logo.svg";
  export let menuPage:boolean;

	let clicked = false;
	let copyEmail = () => {
		if (typeof window != 'undefined') {
			navigator.clipboard
				.writeText('mayamaze@gmail.com')
				.then(() => {
					clicked = true;
					setTimeout(() => {
						clicked = false;
					}, 2000);
				})
				.catch(() => {
					location.href = 'mailto:mayamaze@gmail.com';
				});
		}
	};


</script>

<nav>
  <div>

    <p>
      <img src={logo} alt="logo" class="h-[44px] w-[81px] lg:h-[92px] lg:w-[168px]" />
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
    <div class="hidden lg:block">
      <button on:click={copyEmail}>
      {#if clicked}
      copied!
      {:else}
      email maya
      {/if}
      </button>
    </div>
  </div>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 32px;
    padding-right: 48px;
  }
  nav > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 38px;
  }
  @media (min-width: 1024px) {
    nav {
      padding-left: 75px;
      padding-right: 75px;
    }
    nav > div {
      padding-top: 100px;
    }
  }
</style>