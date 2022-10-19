<script lang="ts">
  export let videoSrc: string | undefined;
  import { onMount } from "svelte";
  let video: HTMLVideoElement;
  let videoControls: HTMLElement;
  let progress: HTMLProgressElement;
  let progress1: HTMLProgressElement;
  let showPlay: Boolean = false;
  let showPause: Boolean = false;
  let videoContainer: HTMLElement;
  let progressBar: HTMLElement;
  let progressBar1: HTMLElement;
  
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

<main
  class="bg-[#020202] w-full h-screen grid justify-items-center content-center"
>

  <figure
    bind:this={videoContainer}
    id="videoContainer"
    on:mouseenter={() => showButton()}
    on:mouseleave={() => hideButton()}
    on:click={() => toggleButton()}
  >
    {#if showPlay}
      <img
      src={play}
      alt="play"
      class="z-10 cursor-pointer absolute lg:top-1/2 lg:left-1/2 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
        on:click={() => playPause()}
        id="playpause">
    {:else if showPause}  
    <img
        src={pause}
        alt="pause"
        class="z-10 cursor-pointer absolute lg:top-1/2 lg:left-1/2 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
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
      <source src={videoSrc} type="video/mp4" />
    </video>
    <div bind:this={videoControls} id="video-controls" class=" absolute top-[94%] left-1/2 -translate-x-[137.5px] lg:left-[75px] lg:-translate-x-0">
      
        <div class="relative cursor-pointer ">
          <progress
            class=" absolute"
            on:click={(e) => skipAhead(e)}
            bind:this={progress}
            id="progress"
            value="0"
            min="0"
          >
          <span bind:this={progressBar} id="progress-bar" />
          </progress>
          <progress
            class="progress_1 absolute z-10 cursor-pointer"
            on:click={(e) => skipAhead(e)}
            bind:this={progress1}
            id="progress"
            value="0"
            min="0"
          >
          <span bind:this={progressBar1} id="progress-bar" />
          </progress>
        </div>
    </div>
  </figure>
</main>

<style>
  
  progress {
    border: none;
    width: 275px;
    height: 3px;
    background: white;
    border: solid;
    border-width: 1px;
    border-color: #020202;
    
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
