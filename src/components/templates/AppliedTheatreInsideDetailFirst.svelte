<script lang="ts">
  import Carousel from "../Carousel.svelte";
  import CarouselDesktop from "../CarouselDesktop.svelte";
</script>

<div class="pb-[25px]">
  <div
    class="grid justify-items-center text-center gap-y-[30px] mt-[30px] mb-[25px] px-[19px] lg:px-[5%] lg:w-[484px] lg:text-start"
  >
    <p>
      Maya has worked with teachers in Delhi schools, the focus being on how to
      create imaginary worlds within the classroom that the teacher can generate
      and the children can learn from experientially.
    </p>
  </div>
  <div class="block lg:hidden">
  <Carousel numberOfSlides={10} />
</div>
<div class="hidden lg:block">
  <CarouselDesktop slideshowWidth={2650} />
</div>
</div>
