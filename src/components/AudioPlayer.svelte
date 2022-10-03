<script lang="ts">
  import soundtrack from "../images/audio.mp3";
  import playButton from "../images/audio_play.svg";
  import pauseButton from "../images/audio_pause.svg";
  let showPlay: boolean = true;
let showPause: boolean = false;
  import { onMount } from "svelte";
  let audio: HTMLAudioElement;
    let showManualControls: Boolean = false;
  onMount(() => {
    const supportsAudio = !!document.createElement("audio").canPlayType;
    if (supportsAudio) {
      audio.controls = false;
      showManualControls = true;
    }
  });
  const playPause = () => {
    if (audio.paused || audio.ended) {
      audio.play();
      showPlay=false;
      showPause=true;
    } else {
      audio.pause();
      showPlay=true;
      showPause=false;
    }
  };

</script>

<div class="bg-black cursor-pointer">
  <audio bind:this={audio} controls>
    <source src={soundtrack} type="audio/mpeg" />
  </audio>
</div>
{#if showManualControls}
<div class="relative cursor-pointer" on:click={() => playPause()}>
    {#if showPlay}
  <img src={playButton} alt="Play" class="absolute"/>
    {/if}
    {#if showPause}
  <img src={pauseButton} alt="Pause" class="absolute"/>
    {/if}
</div>
{/if}
