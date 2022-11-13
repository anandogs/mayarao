<script type="ts">
  import { itemList } from "./stores/makingStore";
  export let itemOpen: string | number | undefined = undefined;
  import { onMount } from "svelte";
  import AccordianItem from "./AccordianItem.svelte";
  import Carousel from "./Carousel.svelte";
  import CarouselDesktop from "./CarouselDesktop.svelte";

  import improvisation from "../images/making/improvisation.svg";
  import objects from "../images/making/objects.svg";
  import camera from "../images/making/camera.svg";
  import type { WritableAtom } from "nanostores";

  let isImprovisationOpen: WritableAtom<boolean>;
  let isObjectsOpen: WritableAtom<boolean>;
  let isCameraOpen: WritableAtom<boolean>;
  let allItems: Array<WritableAtom<boolean>> = [];

  const objectsData = itemList.filter((item) => item.name === "Objects")[0];
  const improvisationData = itemList.filter(
    (item) => item.name === "Improvisation"
  )[0];
  const cameraData = itemList.filter((item) => item.name === "Camera")[0];

  onMount(() => {
    isImprovisationOpen = improvisationData.display;
    isObjectsOpen = objectsData.display;
    isCameraOpen = cameraData.display;
    allItems = [isImprovisationOpen, isObjectsOpen, isCameraOpen];

    if (document.location.hash === "#drawer") {
      setTimeout(() => {
        document
          .querySelector("#drawer")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }

    if (itemOpen) {
      itemList.forEach((item) => {
        item.display.set(false);
      });
      itemList
        .filter((item) => item.id.toString() === itemOpen)[0]
        .display.set(true);
    }
  });
</script>

<section class="grid gap-y-10 lg:w-full">
  <div>
    <AccordianItem toggleItem={isImprovisationOpen} {allItems}>
      <div slot="heading" class="cursor-pointer heading" id="drawer">
        <img
          src={improvisation}
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
      <div slot="heading" class="cursor-pointer heading" id="drawer">
        <img
          src={objects}
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
            <CarouselDesktop slideshowFor={"making"} data={objectsData} />
          </div>
          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
  <div>
    <AccordianItem toggleItem={isCameraOpen} {allItems} lastItem={true}>
      <div slot="heading" class="cursor-pointer heading" id="drawer">
        <img
          src={camera}
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
            <Carousel slideshowFor={"making"} data={cameraData} />
          </div>
          <div class="hidden lg:block">
            <CarouselDesktop slideshowFor={"making"} data={cameraData} />
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
