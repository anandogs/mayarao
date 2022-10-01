<script lang="ts">
  import CarouselDesktop from "../CarouselDesktop.svelte";

  export let title: String;
</script>

<div>
  <div class="mb-[50px]">
    <h3>
      {title}
    </h3>
    <div class="details">
      <div>
        <h4 class="credit heading">year</h4>
        <p class="credit description">2003</p>
      </div>

      <div>
        <h4 class="credit heading">credit 1</h4>
        <p class="credit description">Name Surname</p>
      </div>
      <div>
        <h4 class="credit heading">credit 1</h4>
        <p class="credit description">Name Surname</p>
      </div>
      <div>
        <h4 class="credit heading">credit 1</h4>
        <p class="credit description">Name Surname</p>
      </div>
    </div>
  </div>
  <div class="project_description">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
<div class="pb-[100px]">
<CarouselDesktop slideshowWidth={2650}/>
</div>
</div>

<style>
    h3{
        text-transform: lowercase;
        margin-left: 5%;
    }
  .credit {
    font-size: 13px;
    line-height: 17px;
  }
  .heading {
    letter-spacing: 3%;
  }
  .details {
    margin-top: 50px;
    display: flex;
    column-gap: 50px;
    width: 609px;
    border-top: 1px solid #020202;
    border-bottom: 1px solid #020202;
    padding: 30px 0;
    margin-left: 5%;
  }
  .project_description {
    display: grid;
    row-gap: 15px;
    width: 484px;
    margin-bottom: 50px ;
    margin-left: 5%;
  }
  
</style>
