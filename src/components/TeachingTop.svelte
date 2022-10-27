<script lang="ts">
  import { onMount } from "svelte";
  let drawerFor: string | null = 'teaching';
  export let itemId: string | number | undefined | null = null;
  import Carousel from "./Carousel.svelte";
  import CarouselDesktop from "./CarouselDesktop.svelte";
  import { itemList, teachingList } from "./stores/teachingStore";
  import DesktopDrawer from "./templates/DesktopDrawer.svelte";
  import MobileDrawer from "./templates/MobileDrawer.svelte";
  let programsStage = 0;
  let teachingStage = 0;

  onMount(() => {
    if (document.location.hash === "#drawer") {
      drawerFor = null;
      setTimeout(() => {
        document
          .querySelector("#drawer")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
    if (itemId) {
      programsStage = 1;
      teachingStage = 0;
      itemList.forEach((item) => {
        item.display.set(false);
      });
      itemList.filter((item) => item.id == itemId)[0].display.set(true);
    }
  });

  const toggleProgramsStage = () => {
    if (programsStage !== 0) {
      itemList.forEach((item) => {
        item.display.value = false;
      });
      programsStage = 0;
    } else {
      teachingStage = 0;
      programsStage = 1;
    }
  };

  const toggleTeachingStage = () => {
    if (teachingStage !== 0) {
      teachingStage = 0;
    } else {
      programsStage = 0;
      teachingStage = 1;
    }
  };

  const checkIfClicked = () => {
    programsStage = 1;
    teachingStage = 0;
    itemList.forEach((item) => {
      if (item.display.value) {
        programsStage = 2;
      }
    });
  };
</script>

<div class="w-full">
  <div class="hidden lg:block">
    <div class="border_bottom_large mt-[50px]" />
  </div>
  <div class="drawer" on:click={() => toggleProgramsStage()}>
    <div class="lg:hidden mt-[30px]">
      {#if programsStage === 2}
        <h4 style="color:#020202; font-size: 1rem;">performance</h4>
      {:else}
        <h4
          class="text-[2.25rem]"
          style={programsStage !== 0 ? "color:#020202; font-size: 25px;" : ""}
        >
          performance
        </h4>
      {/if}
    </div>
    <div class="hidden lg:block">
      <h4
        class="text-[2.25rem]"
        style={programsStage !== 0 ? "color:#020202" : ""}
      >
        performance
      </h4>
    </div>
  </div>
  <div class="hidden lg:block">
    <div
      class="drawer mt-[20px] mb-[60px]"
      on:click={() => toggleTeachingStage()}
    >
      <h4 class="text-[2.25rem]">mummy</h4>
    </div>
  </div>
  {#if programsStage !== 0}
    <div class="hidden lg:block">
      <DesktopDrawer {itemList} categoryColor={"#024C5C"} {drawerFor} />
    </div>
    <div
      class="lg:hidden mt-[30px] mb-[30px]"
      on:click={() => checkIfClicked()}
    >
      <MobileDrawer {itemList} slideshowFor="applied-theatre" />
    </div>
  {/if}
  <div class="lg:hidden">
    <div
      class="border_bottom_large"
      style={programsStage === 0
        ? "padding-bottom:25px;"
        : "padding-bottom:0px; transform: translateY(-28px);"}
    />
  </div>

  <div
    class="lg:hidden mt-[25px] mb-[46px]"
    on:click={() => toggleTeachingStage()}
  >
    <h4>mummy</h4>
  </div>
  {#if teachingStage !== 0}
    <div class="mb-[45px] lg:mb-[60px]">
      <div class="lg:hidden">
        <Carousel data={teachingList[0]} slideshowFor="teaching-teachers" />
      </div>
      <div class="hidden lg:block">
        <CarouselDesktop
          data={teachingList[0]}
          slideshowFor="teaching-teachers"
        />
      </div>
    </div>
  {/if}
</div>

<style>
  h4 {
    color: #024c5c;
    text-transform: lowercase;
    font-size: 1rem;
    line-height: 20.8px;
    text-align: center;
    cursor: pointer;
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
  .drawer {
    margin-left: 19px;
    margin-right: 19px;
  }
  @media (min-width: 1024px) {
    h4 {
      font-size: 2.25rem;
      line-height: 36.4px;
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
    .drawer {
      font-size: x-large;
      margin-left: 5%;
      margin-right: 5%;
      display: flex;
      column-gap: 30px;
      flex-wrap: wrap;
    }
  }
</style>
