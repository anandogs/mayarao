<script type="ts">
  import { itemList } from "./stores/digitalStore";
  export let itemOpen: string | number | undefined = undefined;
  import { onMount } from "svelte";
  import AccordianItem from "./AccordianItem.svelte";
  import Carousel from "./Carousel.svelte";
  import CarouselDesktop from "./CarouselDesktop.svelte";

  import paru from "../images/digital/paru.svg";
  import lockdownStoriesDesktop from "../images/digital/lockdown_stories_desktop.svg";
  import lockdownStoriesMobile from "../images/digital/lockdown_stories_mobile.svg";
  import videos from "../images/digital/videos.svg";
  import type { WritableAtom } from "nanostores";

  let isParuOpen: WritableAtom<boolean>;
  let isLockdownStoriesOpen: WritableAtom<boolean>;
  let isVideosOpen: WritableAtom<boolean>;
  let allItems: Array<WritableAtom<boolean>> = [];

  const paruData = itemList.filter((item) => item.name === "Paru")[0];
  const lockdownStoriesData = itemList.filter(
    (item) => item.name === "Lockdown Stories"
  )[0];
  const videoData = itemList.filter((item) => item.name === "Videos")[0];

  onMount(() => {
    isParuOpen = paruData.display;
    isLockdownStoriesOpen = lockdownStoriesData.display;
    isVideosOpen = videoData.display;
    allItems = [isParuOpen, isLockdownStoriesOpen, isVideosOpen];

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
    <AccordianItem toggleItem={isParuOpen} {allItems}>
      <div slot="heading" class="cursor-pointer heading" id="drawer">
        <img src={paru} class="w-[89.78px] h-[41.18px]" alt="Paru" />
      </div>
      <div slot="content" class="pt-2">
        <div class="content pb-8 pt-6">
          <p>
            These are short and funny podcasts of the character Paru who picks
            up lockdown-peculiar phenomenon to comment on. From life and times
            with her strange family and Tiger, her soul mate, to the long march
            of migrant labour in 2020 - all come under her scrutiny. In fact,
            Paru was a character initially created for the stage - a comedy, in
            2013. So far, twenty-two podcast episodes have been made so far.
            Mansi Thapliyal, photo journalist and designer has created video
            versions of a few of the episodes, with mixed media - animation,
            drawing etc. Mar. 2020 onwards
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
      <div slot="heading" class="cursor-pointer heading" id="drawer">
        <div class="hidden lg:block">
          <img
            src={lockdownStoriesDesktop}
            class="w-[382.25px] h-[50.1px]"
            alt="Lockdown Stories"
          />
        </div>
        <div class="lg:hidden">
          <img
            src={lockdownStoriesMobile}
            class="w-[202.73px] h-[115.84px]"
            alt="Lockdown Stories"
          />
        </div>
      </div>
      <div slot="content" class="pt-2">
        <div class="content pb-6 pt-6">
          <p>
            These are music-driven podcasts around themes and issues that took
            on national importance in the first two years of the lockdown 2020
            onwards
          </p>
          <div class="lg:hidden">
            <Carousel slideshowFor={"digital"} data={lockdownStoriesData} />
          </div>
          <div class="hidden lg:block">
            <CarouselDesktop
              slideshowFor={"digital"}
              data={lockdownStoriesData}
            />
          </div>
          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
  <div>
    <AccordianItem toggleItem={isVideosOpen} {allItems} lastItem={true}>
      <div slot="heading" class="cursor-pointer heading" id="drawer">
        <img src={videos} class="w-[133.38px] h-[30.31px]" alt="Videos" />
      </div>
      <div slot="content" class="pt-2">
        <div class="content pb-6 pt-6">
          <p>
            Maya also made short videos in mixed media. “So, What’s the Play?”
            was made as a keynote performance for Foot30, conference, Centre for
            Drama, Theatre and Performance Studies, University of Toronto. 2021
          </p>
          <div class="lg:hidden">
            <Carousel slideshowFor={"digital"} data={videoData} />
          </div>
          <div class="hidden lg:block">
            <CarouselDesktop slideshowFor={"digital"} data={videoData} />
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
