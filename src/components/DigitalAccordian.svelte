<script type="ts">
  import { isImprovisationOpen, isObjectsOpen, isCameraOpen, allItems, itemList } from "./stores/makingStore";

import AccordianItem from "./AccordianItem.svelte";
  import Carousel from "./Carousel.svelte";
  import CarouselDesktop from "./CarouselDesktop.svelte";

  import paru from "../images/digital/paru.svg";
  import lockdownStories from "../images/digital/lockdown_stories_desktop.svg";
  import videos from "../images/digital/videos.svg";


  const objectsData = itemList.filter((item) => item.name === "Objects")[0];
  const improvisationData = itemList.filter((item) => item.name === "Improvisation")[0];
  const cameraData = itemList.filter((item) => item.name === "Camera")[0];


  const paruData = itemList.filter((item) => item.name === "Paru")[0];
  const lockdownStoriesData = itemList.filter((item) => item.name === "Lockdown Stories")[0];
  const videoData = itemList.filter((item) => item.name === "Video")[0];

</script>

<section class="grid gap-y-10 lg:w-full">
  <div>
    <AccordianItem toggleItem={isImprovisationOpen} {allItems}>
      <div slot="heading" class="cursor-pointer heading">
        <img
          src={paru}
          class="w-[160.31px] h-[39.41px] lg:w-[279.69px] lg:h-[68.76px]"
          alt="Improvisation"
        />
      </div>
      <div slot="content" class=" pt-2">
        <div class="content pb-8 pt-6">
          <p>
            The centre piece of Maya's making process is IMPROVISATION. She sets
            up a video camera in a her studio to record improvisations. In the
            beginning years she would play recorded music that attracted her,
            yet was not too familiar to her. Music plays a big part in
            triggering her imagination.
          </p>
          <div class="lg:hidden">
            <Carousel slideshowFor={"making"} data={improvisationData} />
          </div>
          <div class="hidden lg:block">
            <CarouselDesktop slideshowFor={"making"} data={improvisationData} />
          </div>
      
        </div>
      </div>
    </AccordianItem>

  </div>
  <div>
    <AccordianItem toggleItem={isObjectsOpen} marginTop={38} {allItems}>
      <div slot="heading" class="cursor-pointer heading">
        <img
          src={lockdownStories}
          class="w-[113.1px] h-[24.7px] lg:w-[178.9px] lg:h-[39.07px]"
          alt="Objects"
        />
      </div>
      <div slot="content" class="pt-2">
        <div class="content pb-6 pt-6">
          <p>
            The centre piece of Maya's making process is IMPROVISATION. She sets
            up a video camera in a her studio to record improvisations. In the
            beginning years she would play recorded music that attracted her,
            yet was not too familiar to her. Music plays a big part in
            triggering her imagination.
          </p>
          <div class="lg:hidden">
            <Carousel slideshowFor={"making"} data={objectsData} />
          </div>
          <div class="hidden lg:block">
            <CarouselDesktop slideshowFor={"making"} data={objectsData}  />
          </div>
          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
  <div>
    <AccordianItem toggleItem={isCameraOpen} {allItems} lastItem={true}>
      <div slot="heading" class="cursor-pointer heading">
        <img
          src={videos}
          class="w-[92.32px] h-[29.97px] lg:w-[163.68px] lg:h-[53.14px]"
          alt="Camera"
        />
      </div>
      <div slot="content" class="pt-2">
        <div class="content pb-6 pt-6">
          <p>
            The centre piece of Maya's making process is IMPROVISATION. She sets
            up a video camera in a her studio to record improvisations. In the
            beginning years she would play recorded music that attracted her,
            yet was not too familiar to her. Music plays a big part in
            triggering her imagination.
          </p>
          <div class="lg:hidden">
            <Carousel slideshowFor={"making"} data={cameraData}  />
          </div>
          <div class="hidden lg:block">
            <CarouselDesktop slideshowFor={"making"} data={cameraData}  />
          </div>
          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
</section>

<style>
  p {
    margin-left: 19px;
    margin-right: 19px;
  }
  .content {
    /* margin-top: 28px; */
    display: grid;
    row-gap: 25px;
  }
  .heading {
    display: flex;
    justify-items: center;
    justify-content: center;

  }
  @media (min-width: 1024px) {
    p {
      width: 484px;
      margin-left: 5%;
      margin-right: 5%;
      text-align: left;
    }
    .heading {
      /* display: block; */
      justify-content: start;
      
      margin-left: 5%;
      margin-right: 5%;

    }
  }
</style>
