<script type="ts">
  import AccordianItem from "./AccordianItem.svelte";
  import Carousel from "./Carousel.svelte";
  import CarouselDesktop from "./CarouselDesktop.svelte";

  import improvisation from "../images/making/improvisation.svg";
  import objects from "../images/making/objects.svg";
  import camera from "../images/making/camera.svg";

  import { isImprovisationOpen } from "./stores/makingStore";
  import { isObjectsOpen } from "./stores/makingStore";
  import { isCameraOpen } from "./stores/makingStore";
  import { allItems } from "./stores/makingStore";
</script>

<section class="grid gap-y-10">
  <div>
    <AccordianItem toggleItem={isImprovisationOpen} {allItems}>
      <div slot="heading" class="cursor-pointer heading">
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
            <Carousel numberOfSlides={10} />
          </div>
          <div class="hidden lg:block">
            <CarouselDesktop slideshowWidth={2650} />
          </div>
      
        </div>
      </div>
    </AccordianItem>

  </div>
  <div>
    <AccordianItem toggleItem={isObjectsOpen} marginTop={38} {allItems}>
      <div slot="heading" class="cursor-pointer heading">
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
            <Carousel numberOfSlides={10} />
          </div>
          <div class="hidden lg:block">
            <CarouselDesktop slideshowWidth={2650} />
          </div>
          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
  <div>
    <AccordianItem toggleItem={isCameraOpen} {allItems}>
      <div slot="heading" class="cursor-pointer heading">
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
            <Carousel numberOfSlides={10} />
          </div>
          <div class="hidden lg:block">
            <CarouselDesktop slideshowWidth={2650} />
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
  @media (min-width: 1024px) {
    p {
      width: 484px;
      margin-left: 5%;
      margin-right: 5%;
      text-align: left;
    }
    .heading {
      margin-left: 5%;
      margin-right: 5%;
    }
  }
</style>
