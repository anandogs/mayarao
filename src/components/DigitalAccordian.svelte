<script type="ts">

import AccordianItem from "./AccordianItem.svelte";
  import Carousel from "./Carousel.svelte";
  import CarouselDesktop from "./CarouselDesktop.svelte";

  import paru from "../images/digital/paru.svg";
  import lockdownStories from "../images/digital/lockdown_stories_desktop.svg";
  import videos from "../images/digital/videos.svg";
  import { isLockdownStoriesOpen, isParuOpen, isVideosOpen, allItems, itemList } from "./stores/digitalStore";

  const paruData = itemList.filter((item) => item.name === "Paru")[0];
  const lockdownStoriesData = itemList.filter((item) => item.name === "Lockdown Stories")[0];
  const videoData = itemList.filter((item) => item.name === "Videos")[0];

</script>

<section class="grid gap-y-10 lg:w-full">
  <div>
    <AccordianItem toggleItem={isParuOpen} {allItems}>
      <div slot="heading" class="cursor-pointer heading">
        <img
          src={paru}
          class="w-[160.31px] h-[39.41px] lg:w-[279.69px] lg:h-[68.76px]"
          alt="Paru"
        />
      </div>
      <div slot="content" class=" pt-2">
        <div class="content pb-8 pt-6">
          <p>
            These are short and funny podcasts of the character Paru who picks up  lockdown-peculiar phenomenon to comment on. From life and times with her strange family and Tiger, her soul mate, to the long march of migrant labour in 2020 - all come under her scrutiny. In fact, Paru was a character initially created for the stage - a comedy, in 2013. So far, twenty-two podcast episodes have been made so far. Mansi Thapliyal, photo journalist and designer has created video versions of a few of the episodes, with mixed media - animation, drawing etc. Mar. 2020 onwards
          </p>
          <div class="lg:hidden">
            <Carousel slideshowFor={"digital"} data={paruData} />
          </div>
          <div class="hidden lg:block">
            <CarouselDesktop slideshowFor={"digital"} data={paruData} />
          </div>
      
        </div>
      </div>
    </AccordianItem>

  </div>
  <div>
    <AccordianItem toggleItem={isLockdownStoriesOpen} marginTop={38} {allItems}>
      <div slot="heading" class="cursor-pointer heading">
        <img
          src={lockdownStories}
          class="w-[113.1px] h-[24.7px] lg:w-[178.9px] lg:h-[39.07px]"
          alt="Lockdown Stories"
        />
      </div>
      <div slot="content" class="pt-2">
        <div class="content pb-6 pt-6">
          <p>
            These are music-driven podcasts around themes and issues that took on national importance in the first two years of the lockdown 2020 onwards
          </p>
          <div class="lg:hidden">
            <Carousel slideshowFor={"digital"} data={lockdownStoriesData} />
          </div>
          <div class="hidden lg:block">
            <CarouselDesktop slideshowFor={"digital"} data={lockdownStoriesData}  />
          </div>
          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
  <div>
    <AccordianItem toggleItem={isVideosOpen} {allItems} lastItem={true}>
      <div slot="heading" class="cursor-pointer heading">
        <img
          src={videos}
          class="w-[92.32px] h-[29.97px] lg:w-[163.68px] lg:h-[53.14px]"
          alt="Videos"
        />
      </div>
      <div slot="content" class="pt-2">
        <div class="content pb-6 pt-6">
          <p>
            Maya also made short videos in mixed media. “So, What’s the Play?” was made as a keynote performance for Foot30, conference, Centre for Drama, Theatre and Performance Studies, University of Toronto. 2021
          </p>
          <div class="lg:hidden">
            <Carousel slideshowFor={"digital"} data={videoData}  />
          </div>
          <div class="hidden lg:block">
            <CarouselDesktop slideshowFor={"digital"} data={videoData}  />
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
