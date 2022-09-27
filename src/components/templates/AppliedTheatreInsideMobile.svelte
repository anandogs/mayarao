<script lang="ts">
  import AppliedTheatreInsideDetail from "./AppliedTheatreInsideDetailLast.svelte";
  import {
    isTheatreProgramOpen,
    heiretikos,
    igloo,
    razia,
    sciva,
    pandita,
    allItems,
  } from "../stores/appliedTheatreStore";
  import type { WritableAtom } from "nanostores";

  const setStage = (val?: WritableAtom) => {
    if (isTheatreProgramOpen.get().stage === 2) {
      isTheatreProgramOpen.set({
        stage: 3,
      });
      // close all drawers
      for (const item of allItems) {
        if (item !== val) {
          item.set(false);
        }
      }
      val?.set(true);
      // open the drawer which is clicked
    } else {
      // if the user is clicking on the drawer to close it

      if (val?.get() === true) {
        val.set(false);
        isTheatreProgramOpen.set({
          stage: 2,
        });
      } else {
        for (const item of allItems) {
          if (item !== val) {
            item.set(false);
          }
        }
        val?.set(true);
      }
    }
  };
</script>

<div>
  {#if $isTheatreProgramOpen.stage == 1}
    <div />
  {:else if $isTheatreProgramOpen.stage == 2}  
  <div class="drawer">
      <h4 on:click={() => setStage(heiretikos)}>
        Heiretikos, Or the One Who Chooses
      </h4>
      <div class="border_bottom" />
    </div>
    <div class="drawer" on:click={() => setStage(igloo)}>
      <h4 on:click={() => setStage(igloo)}>igloo igloo</h4>
      <div class="border_bottom" />
    </div>
    <div class="drawer">
      <h4 on:click={() => setStage(razia)}>razia</h4>
      <div class="border_bottom" />
    </div>
    <div class="drawer">
      <h4 on:click={() => setStage(sciva)}>sciva and jagli</h4>
      <div class="border_bottom" />
    </div>
    <div class="drawer">
      <h4 on:click={() => setStage(pandita)}>pandita ramabai</h4>
      <div class="border_bottom" />
    </div>
  {:else}
    <div class="drawer">
      {#if $heiretikos}
        <h4 on:click={() => setStage(heiretikos)} class="second_stage">
          Heiretikos, Or the One Who Chooses
        </h4>
        <AppliedTheatreInsideDetail />
      {:else}
        <h4 on:click={() => setStage(heiretikos)}>
          Heiretikos, Or the One Who Chooses
        </h4>
      {/if}
      <div class="border_bottom" />
    </div>
    <div class="drawer">
      {#if $igloo}
        <h4 on:click={() => setStage(igloo)} class="second_stage">
          igloo igloo
        </h4>
        <AppliedTheatreInsideDetail />
      {:else}
        <h4 on:click={() => setStage(igloo)}>
          igloo igloo
        </h4>
      {/if}
      <div class="border_bottom" />
    </div>
    <div class="drawer">
      {#if $razia}
      <h4 on:click={() => setStage(razia)} class="second_stage">
        razia
      </h4>
      <AppliedTheatreInsideDetail />
    {:else}
      <h4 on:click={() => setStage(razia)}>
        razia
      </h4>
    {/if}
      <div class="border_bottom" />
    </div>
    <div class="drawer">
      {#if $sciva}
      <h4 on:click={() => setStage(sciva)} class="second_stage">
        sciva and jagli
      </h4>
      <AppliedTheatreInsideDetail />
    {:else}
      <h4 on:click={() => setStage(sciva)}>
        sciva and jagli
      </h4>
    {/if}
      <div class="border_bottom" />
    </div>
    <div class="drawer">
      {#if $pandita}
      <h4 on:click={() => setStage(pandita)} class="second_stage">
        pandita ramabai
      </h4>
      <AppliedTheatreInsideDetail />
    {:else}
      <h4 on:click={() => setStage(pandita)}>
        pandita ramabai
      </h4>
    {/if}
      <div class="border_bottom" />
    </div>
  {/if}
</div>

<style>
  h4 {
    text-align: center;
    color: #468fb8;
  }
  .drawer {
    padding-top: 25px;
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
    padding-bottom: 25px;
  }
</style>
