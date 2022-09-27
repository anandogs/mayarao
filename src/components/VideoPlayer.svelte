<script lang="ts">
  import trialVideo from "../images/video.mp4";
  import { onMount } from "svelte";
  let video: HTMLVideoElement;
  let videoControls: HTMLElement;
  let progress: HTMLProgressElement;
  let progress1: HTMLProgressElement;
  let showPlay: Boolean = false;
  let showPause: Boolean = false;
  
  $: outerWidth = 0
  let leftOffset = outerWidth - 275;

  import play from '../images/play.svg';
  import pause from '../images/pause.svg';
  onMount(() => {
  
    const supportsVideo = !!document.createElement("video").canPlayType;
    if (supportsVideo) {
      video.controls = false;
      videoControls.style.display = "block";
    }
  });
  const setMaxDuration = () => {
    progress.setAttribute("max", video.duration.toString());
    progress1.setAttribute("max", video.duration.toString());
  };
  const showButton = () => {
    if (video.paused || video.ended) {
      showPlay = true;
      showPause = false;
    } else {
      showPlay = false;
      showPause = true;
    }
  };
  const toggleButton = () => {
    if (video.paused || video.ended) {
      showPlay = true;
      setTimeout(() => {
        showPlay = false;
      }, 2000);
    } else {
      showPause = true;
      setTimeout(() => {
        showPause = false;
      }, 2000);
    }
  };
  const hideButton = () => {
    showPlay = false;
    showPause = false;
  };
  const playPause = () => {
    if (video.paused || video.ended) {
      video.play();
      showPlay=false;
      showPause=true;
    } else {
      video.pause();
      showPlay=true;
    }
  };
  const updateProgressBar = () => {
    if (!progress.getAttribute("max"))
      progress.setAttribute("max", video.duration.toString());
    if (!progress1.getAttribute("max"))
      progress1.setAttribute("max", video.duration.toString());
    progress.value = video.currentTime;
    progress1.value = video.currentTime - 4;
  };
  const skipAhead = (e: any) => {
    const rect = progress.getBoundingClientRect();
    const rect1 = progress1.getBoundingClientRect();
    const pos = (e.pageX - rect.left) / progress.offsetWidth;
    const pos1 = (e.pageX - rect1.left) / progress1.offsetWidth;
    video.currentTime = pos * video.duration;
    video.currentTime = pos1 * video.duration;
  };
</script>
<svelte:window bind:outerWidth/>
<main
  class="bg-[#020202] w-full h-screen grid justify-items-center content-center"
>

  <figure

    id="videoContainer"
    on:mouseenter={() => showButton()}
    on:mouseleave={() => hideButton()}
    on:click={() => toggleButton()}
  >
    {#if showPlay}
      <img
      src={play}
      alt="play"
        class="z-10 cursor-pointer absolute md:top-1/2 md:left-1/2 top-[48%] left-[45%]"
        on:click={() => playPause()}
        id="playpause">
    {:else if showPause}  
    <img
        src={pause}
        alt="pause"
        class="z-10 cursor-pointer  absolute md:top-1/2 md:left-1/2 top-[48%] left-[45%]"
        on:click={() => playPause()}
        id="playpause"
        />
    {/if}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video
    playsinline
    class="fixed bottom-0 left-0 min-w-full min-h-full"
      on:timeupdate={() => updateProgressBar()}
      on:loadedmetadata={() => setMaxDuration()}
      bind:this={video}
      id="video"
      controls
      preload="metadata"
    >
      <source src={trialVideo} type="video/mp4" />
    </video>
    <div bind:this={videoControls} id="video-controls" class="absolute top-[94%] md:left-[5%] left-[10%]">
      
        <div class=" relative">
          <progress
            class=" absolute"
            on:click={(e) => skipAhead(e)}
            bind:this={progress}
            id="progress"
            value="0"
            min="0"
          >
            <span id="progress-bar"/>
          </progress>
          <progress
            class="progress_1 absolute z-10"
            on:click={(e) => skipAhead(e)}
            bind:this={progress1}
            id="progress"
            value="0"
            min="0"
          >
            <span id="progress-bar" />
          </progress>
        </div>
    </div>
  </figure>
</main>

<style>
  
  progress {
    border: none;
    width: 80vw;
    height: 1px;
    background: white;
    
  }
  @media (min-width: 768px) {
    progress {
    width: 275px;
    }  
  }

  .progress_1 {
    background: none;
  }

  .progress_1::-moz-progress-bar {
    background: white;
  }

  .progress_1::-webkit-progress-value {
    background: white;
  }

  /* progress {
  color: none;
} */

  progress::-moz-progress-bar {
    background: #020202;
  }

  progress::-webkit-progress-value {
    background: #020202;
  }

  progress::-webkit-progress-bar {
    background: none;
  }
</style>
