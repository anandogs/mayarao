<script lang="ts">
  import { isTeacherEducationOpen } from "../stores/appliedTheatreStore";
  import { isTheatreProgramOpen } from "../stores/appliedTheatreStore";
  import AppliedTheatreInsideDetailFirst from "./AppliedTheatreInsideDetailFirst.svelte";
  import AppliedTheatreInsideMobile from "./AppliedTheatreInsideMobile.svelte";
  import AppliedTheatreInsideDesktop from "./AppliedTheatreInsideDesktop.svelte";
  const setStage = () => {
    if (isTheatreProgramOpen.get().stage === 1) {
      isTeacherEducationOpen.set(false);
      isTheatreProgramOpen.set({
        stage: 2,
      });
    } else {
      isTheatreProgramOpen.set({
        stage: 1,
      });
    }
  };

  const toggleTeachingProgram = () => {
    if (isTeacherEducationOpen.get() === true) {
      isTeacherEducationOpen.set(false);
    } else {
      isTeacherEducationOpen.set(true);
      isTheatreProgramOpen.set({
        stage: 1,
      });
    }
  };
</script>

<div class="w-full">
  {#if $isTheatreProgramOpen.stage === 1}
    <div class="drawer">
      <h4 on:click={() => setStage()}>theatre programmes for schools</h4>
      <div class="lg:hidden">
        <AppliedTheatreInsideMobile />
      </div>
      <div class="border_bottom" />
    </div>
  {:else if $isTheatreProgramOpen.stage === 2}
    <div class="drawer">
      <h4 class="second_stage" on:click={() => setStage()}>
        theatre programmes for schools
      </h4>
      <div class="lg:hidden">
        <AppliedTheatreInsideMobile />
      </div>
    </div>
  {:else}
    <div class="drawer">
      <h4 class="third_stage" on:click={() => setStage()}>
        theatre programmes for schools
      </h4>
      <div class="lg:hidden">
        <AppliedTheatreInsideMobile />
      </div>
    </div>
  {/if}

  <div class="drawer">
    {#if $isTeacherEducationOpen}
      <h4 on:click={() => toggleTeachingProgram()} class="second_stage">
        teacher educations
      </h4>
      <AppliedTheatreInsideDetailFirst />
    {:else}
      <h4 on:click={() => toggleTeachingProgram()}>teacher educations</h4>
    {/if}
  </div>
  {#if $isTheatreProgramOpen.stage === 2 }
  <div class="border_bottom_large" />
  <div class="hidden lg:block">
  <AppliedTheatreInsideDesktop/>
</div>

    
  {/if}
</div>

<style>
  h4 {
    text-align: center;
    color: #468fb8;
    text-transform: lowercase;
  }
  .drawer {
    padding-bottom: 25px;
    cursor: pointer;
  }
  .border_bottom {
    margin: auto;
    width: 217px;
    border-bottom: 1px;
    border-bottom-color: #020202;
    border-bottom-style: solid;
    padding-top: 25px;
  }
  .second_stage {
    color: #020202;
    font-size: 1.5625rem;
    line-height: 1.875rem;
    padding-left: 20px;
    padding-right: 20px;
  }
  .third_stage {
    color: #020202;
  }
  .border_bottom_large {
    display: none;    
  }
  @media (min-width: 1024px) {
    .border_bottom {
      display: none;
    }
    .border_bottom_large {
    display: block;
    width: 100%;
    border-bottom: 1px;
    border-bottom-color: #020202;
    border-bottom-style: solid;
    margin-bottom: 50px;    
  }

    h4 {
      font-size: 28px;
      text-align: start;
      line-height: 36.4px;
    }
    .second_stage {
      line-height: 36.4px;
      font-size: 28px;
      text-align: start;
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>
