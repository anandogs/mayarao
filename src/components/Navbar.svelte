<script lang='ts'>
  import logo from "../images/logo.svg";
  export let menuPage:boolean;
  export let darkMode:boolean;
  export let email:boolean = true;
  export let closeUrl:string = "back";


	let clicked = false;
	let copyEmail = () => {
		if (typeof window != 'undefined') {
      console.log(darkMode)
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
  const navgigateTo = () => {
    if (closeUrl === "back") {

      window.history.back();
    } else {
      window.location.href = closeUrl;
    }
  }


</script>

<nav>
  <div>
    <a href="/">
      <img src={logo} alt="logo" class="h-[44px] w-[81px] lg:h-[92px] lg:w-[168px]" style={darkMode ? "filter: brightness(0) invert(1);" : ""} />
    </a>
    <div class="flex gap-x-5">
    {#if menuPage}
      <div>
      <button style={darkMode?";":"border-color:#020202; color:#020202"} on:click={()=>navgigateTo()}>close</button>
    </div>
    {:else}
    <a href="/menu">
    <div>
      <button style={darkMode?"":"border-color:#020202; color:#020202"}>menu</button>
    </div>
  </a>
    {/if}
    {#if email}
    <div class="hidden lg:block">
      <button style={darkMode?"":"border-color:#020202; color:#020202"} on:click={copyEmail}>
      {#if clicked}
      copied!
      {:else}
      email maya
      {/if}
      </button>
    </div>
    {/if}
  </div>
  </div>
</nav>

<style>
  nav {
  
    z-index: 10;
    position: absolute;
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