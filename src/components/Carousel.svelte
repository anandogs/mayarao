<script lang="ts">

    import { onMount } from 'svelte';
    let currentSlide = 1
    onMount(() => {
        const images = document.querySelectorAll('.carousel-slide');
        let observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						currentSlide = parseInt(entry.target.id.split('-')[1])
                        // entry.target.classList.toggle('flyClass');
						// return observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);
		images.forEach((image) => {
			observer.observe(image);
		});
        
    });
    

</script>

<div class="slider">

  <div class="slides">
    <div id="slide-1" class="carousel-slide">
      1
    </div>
    <div id="slide-2" class="carousel-slide">
      2
    </div>
    <div id="slide-3" class="carousel-slide">
      3
    </div>
    <div id="slide-4" class="carousel-slide">
      4
    </div>
    <div id="slide-5" class="carousel-slide">
      5
    </div>
  </div>
  <div class="slider-box">
  <a style={currentSlide === 1? "color:#000;" : ""} on:click={() => currentSlide=1} href="#slide-1" class={currentSlide === 1? "first-selected": "first-unselected"}>01</a>
  <a style={currentSlide === 2? "color:#000; border-bottom-color: #000;" : "border-bottom-color: #C4C4C4;"} on:click={() => currentSlide=2}  href="#slide-2">02</a>
  <a style={currentSlide === 3? "color:#000; border-bottom-color: #000;" : "border-bottom-color: #C4C4C4;"} on:click={() => currentSlide=3}  href="#slide-3">03</a>
  <a style={currentSlide === 4? "color:#000; border-bottom-color: #000;" : "border-bottom-color: #C4C4C4;"} on:click={() => currentSlide=4}  href="#slide-4">04</a>
  <a style={currentSlide === 5? "color:#000;" : ""} on:click={() => currentSlide=5} href="#slide-5" class={currentSlide === 5? "last-selected": "last-unselected"}>05</a>
</div>
</div>

<style>

* {
box-sizing: border-box;
}

.slider {
width: 300px;
text-align: center;
overflow: hidden;
}

.slides {
display: flex;
overflow-x: auto;
scroll-snap-type: x mandatory;
scroll-behavior: smooth;
scrollbar-width: none;  /* Firefox */
}
.slides::-webkit-scrollbar {
display: none;
}
.slides::-webkit-scrollbar-thumb {
    display: none;
}
.slides::-webkit-scrollbar-track {
    display: none;
}
.slides > div {
scroll-snap-align: start;
flex-shrink: 0;
width: 300px;
height: 300px;
margin-right: 50px;
border-radius: 10px;
background: #eee;
transform-origin: center center;
transform: scale(1);
transition: transform 0.5s;
position: relative;

display: flex;
justify-content: center;
align-items: center;
font-size: 100px;
}

.slider-box {
    display: flex;
    width: 100%;
    justify-content: center;

}

.slider-box > a {

display: inline-flex;
/* width: 1.5rem; */
/* height: 1.5rem; */
background: white;
text-decoration: none;
align-items: center;
justify-content: center;
/* border-radius: 50%; */
/* margin: 0 0 0.5rem 0; */
position: relative;
padding-left: 5px;
padding-right: 5px;
font-size: 10px;
line-height: 17px;
letter-spacing: 0.03em;
text-align: center;
color: #C4C4C4;
border-bottom-width: 2px;
border-bottom-style: solid;
}

.slider-box > a:active {
color: #000;
}

.last-unselected {
border-bottom-color: transparent
}

.last-selected {
border-bottom-color: transparent
}

.first-unselected {
border-bottom-color: transparent
}

.last-selected {
border-bottom-color: transparent
}

.last-selected:after {
    content:'';
  position:absolute;
  bottom:-2px;
  left:0;
  right:0;
  height:2px;
  background: #000;
  border-radius:30px 30px;
  transform: translateX(-.3px);
}

.last-unselected:after {
    content:'';
  position:absolute;
  bottom:-2px;
  left:0;
  right:0;
  height:2px;
  background: #C4C4C4;
  border-radius:0 30px 30px 0;

}


.first-selected:after {
    content:'';
  position:absolute;
  bottom:-2px;
  left:0;
  right:0;
  height:2px;
  background: #000;
  border-radius:30px 30px;
  transform: translateX(.3px);
}

.first-unselected:after {
    content:'';
  position:absolute;
  bottom:-2px;
  left:0;
  right:0;
  height:2px;
  background: #C4C4C4;
  border-radius:30px 0 0 30px;

}




</style>
