<script type="ts">
  import AccordianItem from "./AccordianItem.svelte";

  import soloGroupCreations from "../images/about/solo_group_creations.svg";
  import theatreInEducation from "../images/about/theatre_in_education.svg";
  import kathakali from "../images/about/kathakali.svg";
  import acting from "../images/about/acting.svg";
  import awardsGrants from "../images/about/awards_grants.svg";
  import choreography from "../images/about/choreography.svg";
  import committees from "../images/about/committees.svg";
  import education from "../images/about/education.svg";
  import festivals from "../images/about/festivals.svg";
  import filmsOnMaya from "../images/about/films_on_maya.svg";
  import filmTv from "../images/about/film_tv.svg";
  import positionsHeld from "../images/about/positions_held.svg";
  import workshops from "../images/about/workshops.svg";

  import {
    allItems,
    isSoloGroupCreationsOpen,
    isTheatreInEducationOpen,
    isKathakaliOpen,
    isActingOpen,
    isAwardsGrantsOpen,
    isChoreographyOpen,
    isCommittesOpen,
    isEducationOpen,
    isFestivalsOpen,
    isFilmsOnMayaOpen,
    isFilmsTvOpen,
    isPositionsHeldOpen,
    isWorkshopsOpen,
    soloGroupCreationsData,
    theatreInEducationData,
    festivalsData,
    awardsGrantsData,
    choreographyData,
    committeesData,
    educationData,
    filmsOnMayaData,
    filmsTvData,
    positionsHeldData,
    workshopsData,
  } from "./stores/aboutStore";

  import { itemList as productionItems } from "./stores/productionsStore";
  import { itemList as streetTheatreItems } from "./stores/streetTheatreStore";
  const handleClick = (
    selectedItem: string | undefined,
    hrefLoc: string | undefined
  ) => {
    if (selectedItem) {
      switch (hrefLoc) {
        case "productions":
          productionItems.forEach((item) => {
            if (item.name === selectedItem) {
              let itemId = item.id;
              window.location.href = "/" + hrefLoc + "/" + itemId + '#drawer';
            }
          });
        case "street-theatre":
          streetTheatreItems.forEach((item) => {
            if (item.name === selectedItem) {
              let itemId = item.id;
              window.location.href = "/" + hrefLoc + "/" + itemId  + '#drawer';
            }
          });
      }
    } else {
      window.location.href = "/" + hrefLoc;
    }
  };
</script>

<section class="grid gap-y-10 w-full mb-[45px] lg:mb-0">
  <div>
    <AccordianItem toggleItem={isSoloGroupCreationsOpen} {allItems}>
      <div slot="heading" class="cursor-pointer grid justify-items-center">
        <img
          src={soloGroupCreations}
          class="w-[258px] lg:w-[407px] h-[45.77px] lg:h-[72.21px] lg:justify-self-start lg:mx-[5%]"
          alt="Solo Group Creations"
        />
      </div>
      <div slot="content" class="pt-2">
        <h4 class="pb-[30px] text-center text-[#992965] lg:hidden">
          devised, performed and directed
        </h4>
        <div
          class="grid gap-y-6 text-center lg:mt-4 lg:text-left lg:mx-[5%] lg:w-[489px]"
        >
          {#each soloGroupCreationsData as data}
            {#if data.link || data.parent}
              <div
                on:click={() => handleClick(data.link, data.parent)}
                class="cursor-pointer"
              >
                <p
                  style="text-transform: uppercase; color: #992965; text-alignment:center"
                  class="cursor-pointer"
                >
                  {data.heading}
                </p>
                <p class="cursor-pointer">{data.body}</p>
              </div>
            {:else}
              <div>
                <p
                  style="text-transform: uppercase; color: #992965; text-alignment:center"
                >
                  {data.heading}
                </p>
                <p>{data.body}</p>
              </div>
            {/if}
          {/each}
          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
  <div>
    <AccordianItem toggleItem={isTheatreInEducationOpen} {allItems}>
      <div slot="heading" class="cursor-pointer grid justify-items-center">
        <img
          src={theatreInEducation}
          class="w-[236.54px] lg:w-[373.15px] h-[32.38px] lg:h-[51.08px] lg:justify-self-start lg:mx-[5%]"
          alt="Solo Group Creations"
        />
      </div>
      <div slot="content" class="pt-2">
        <div
          class="grid gap-y-6 text-center lg:mt-4 lg:text-left lg:mx-[5%] lg:w-[489px]"
        >
          <div>
            <p>
              <span
                style="text-transform: uppercase; color: #992965; text-alignment:center"
                >Pandita Ramabai
              </span> 2009,
            </p>
            <p>
              <span
                style="text-transform: uppercase; color: #992965; text-alignment:center"
                >Sciva and Jagli
              </span> 2003,
            </p>
            <p>
              <span
                style="text-transform: uppercase; color: #992965; text-alignment:center"
                >Dilli Sultanat
              </span> 1995,
            </p>
            <p>
              <span
                style="text-transform: uppercase; color: #992965; text-alignment:center"
                >Igloo-Igloo
              </span> 1996,
            </p>
            <p>
              <span
                style="text-transform: uppercase; color: #992965; text-alignment:center"
                >Bhagat Singh
              </span> 1986,
            </p>
            <p>
              Participatory programmes for children - conceived, scripted and
              directed around themes of history and society for National School
              of Drama Theatre-in Education company
            </p>
          </div>
          {#each theatreInEducationData as { heading, body }}
            <div>
              <p
                style="text-transform: uppercase; color: #992965; text-alignment:center"
              >
                {heading}
              </p>
              <p>{body}</p>
            </div>
          {/each}
          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
  <div>
    <AccordianItem toggleItem={isKathakaliOpen} {allItems}>
      <div slot="heading" class="cursor-pointer grid justify-items-center">
        <img
          src={kathakali}
          class="w-[114.58px] lg:w-[180.75px] h-[31.25px] lg:h-[49.3px] lg:justify-self-start lg:mx-[5%]"
          alt="Kathakali"
        />
      </div>
      <div slot="content" class="pt-2">
        <div
          class="grid gap-y-6 text-center lg:mt-4 lg:text-left lg:mx-[5%] lg:w-[489px]"
        >
          <div>
            <p>
              1961 onwards<br />
              Training in Delhi and Kerala, specialising in the male role. Several
              performances in India and abroad of the Ramayana and the Mahabharata
              as well as Shakespeare’s ‘Othello’. Krishna, Karna, Ravana, Arjuna,
              Hidimba, Hanuman, Bhima, Damayanti, Surpanakha, Draupadi, Desdemona
            </p>
          </div>

          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
  <div>
    <AccordianItem toggleItem={isActingOpen} {allItems}>
      <div slot="heading" class="cursor-pointer grid justify-items-center">
        <img
          src={acting}
          class="w-[75.99px] lg:w-[127.42px] h-[25.38px] lg:h-[42.56px] lg:justify-self-start lg:mx-[5%]"
          alt="Acting"
        />
      </div>
      <div slot="content" class="pt-2">
        <div
          class="grid gap-y-6 text-center lg:mt-4 lg:text-left lg:mx-[5%] lg:w-[489px]"
        >
          <div>
            <p>
              Among others, played leading role in ‘Dream of Reason’,
              Shakespeare’s ‘King Lear’ (1988) and ‘Twelfth Night’ (1970) Henrik
              Ibsen’s ‘A Dolls House’ (1971, Bertolt Brecht’s ‘The Mother’(1971)
              and ‘St. Joan of the Stockyards’ (1972), Federico Garcia Lorca’s
              'House of Bernada Alba’ (1978); Maxim Gorky’s ‘Viy’; Aphra Behn’s
              ‘The Rover’ (invited by Womens’Playhouse Trust, London, 1999);
              ’Desdemona’, for Theatreworks, Singapore, toured Singapore,
              Adelaide, Hamburg, Munich, Fukuoka (2000). The play Directors
              included Amal Allana, Anamika Haksar, Anuradha Kapur, Barry John,
              Jules Wright, Ong Keng Sen
            </p>
          </div>

          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
  <div>
    <AccordianItem toggleItem={isFestivalsOpen} {allItems}>
      <div slot="heading" class="cursor-pointer grid justify-items-center">
        <img
          src={festivals}
          class="w-[118.24px] lg:w-[198.27px] h-[23.58px] lg:h-[39.54px] lg:justify-self-start lg:mx-[5%]"
          alt="Festivals"
        />
      </div>
      <div slot="content" class="pt-2">
        <div
          class="grid gap-y-6 text-center lg:mt-4 lg:text-left lg:mx-[5%] lg:w-[489px]"
        >
          
            {#each festivalsData as { heading, body }}
            <div>
              <p
                style="text-transform: uppercase; color: #992965; text-alignment:center"
              >
                {heading}
              </p>
              <p>{body}</p>
            </div>
          {/each}
          

          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
  <div>
    <AccordianItem toggleItem={isWorkshopsOpen} {allItems}>
      <div slot="heading" class="cursor-pointer grid justify-items-center">
        <img
          src={workshops}
          class="w-[134.17px] h-[30.48px] lg:w-[224.97px] lg:h-[51.11px] lg:justify-self-start lg:mx-[5%]"
          alt="Workshops"
        />
      </div>
      <div slot="content" class="pt-2">
        <div
          class="grid gap-y-6 text-center lg:mt-4 lg:text-left lg:mx-[5%] lg:w-[489px]"
        >
          
            {#each workshopsData as { heading, body }}
            <div>
              <p
                style="text-transform: uppercase; color: #992965; text-alignment:center"
              >
                {heading}
              </p>
              <p>{body}</p>
            </div>
          {/each}
          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
  <div>
    <AccordianItem toggleItem={isChoreographyOpen} {allItems}>
      <div slot="heading" class="cursor-pointer grid justify-items-center">
        <img
          src={choreography}
          class="w-[174.67px] h-[40.68px] lg:w-[292.89px] lg:h-[68.21px] lg:justify-self-start lg:mx-[5%]"
          alt="Choreography"
        />
      </div>
      <div slot="content" class="pt-2">
        <div
          class="grid gap-y-6 text-center lg:mt-4 lg:text-left lg:mx-[5%] lg:w-[489px]"
        >
          
            {#each choreographyData as { heading, body }}
            <div>
              <p
                style="text-transform: uppercase; color: #992965; text-alignment:center"
              >
                {heading}
              </p>
              <p>{body}</p>
            </div>
          {/each}
          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
  <div>
    <AccordianItem toggleItem={isFilmsTvOpen} {allItems}>
      <div slot="heading" class="cursor-pointer grid justify-items-center">
        <img
          src={filmTv}
          class="w-[99.97px] h-[41.09px] lg:w-[167.64px] lg:h-[68.89px] lg:justify-self-start lg:mx-[5%]"
          alt="Films/TV"
        />
      </div>
      <div slot="content" class="pt-2">
        <div
          class="grid gap-y-6 text-center lg:mt-4 lg:text-left lg:mx-[5%] lg:w-[489px]"
        >
          
            {#each filmsTvData as { heading, body }}
            <div>
              <p
                style="text-transform: uppercase; color: #992965; text-alignment:center"
              >
                {heading}
              </p>
              <p>{body}</p>
            </div>
          {/each}
          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
  <div>
    <AccordianItem toggleItem={isFilmsOnMayaOpen} {allItems}>
      <div slot="heading" class="cursor-pointer grid justify-items-center">
        <img
          src={filmsOnMaya}
          class="w-[184.56px] h-[29.58px] lg:w-[309.48px] lg:h-[49.6px] lg:justify-self-start lg:mx-[5%]"
          alt="Films On Maya"
        />
      </div>
      <div slot="content" class="pt-2">
        <div
          class="grid gap-y-6 text-center lg:mt-4 lg:text-left lg:mx-[5%] lg:w-[489px]"
        >
          
            {#each filmsOnMayaData as { heading, body }}
            <div>
              <p
                style="text-transform: uppercase; color: #992965; text-alignment:center"
              >
                {heading}
              </p>
              <p>{body}</p>
            </div>
          {/each}
          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
  <div>
    <AccordianItem toggleItem={isAwardsGrantsOpen} {allItems}>
      <div slot="heading" class="cursor-pointer grid justify-items-center">
        <img
          src={awardsGrants}
          class="w-[203.96px] h-[44.65px] lg:w-[342px] lg:h-[74.87px] lg:justify-self-start lg:mx-[5%]"
          alt="Films On Maya"
        />
      </div>
      <div slot="content" class="pt-2">
        <div
          class="grid gap-y-6 text-center lg:mt-4 lg:text-left lg:mx-[5%] lg:w-[489px]"
        >
          
            {#each awardsGrantsData as { heading, body }}
            <div>
              <p
                style="text-transform: uppercase; color: #992965; text-alignment:center"
              >
                {heading}
              </p>
              <p>{body}</p>
            </div>
          {/each}
          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
  <div>
    <AccordianItem toggleItem={isCommittesOpen} {allItems}>
      <div slot="heading" class="cursor-pointer grid justify-items-center">
        <img
          src={committees}
          class="w-[164.28px] h-[23.59px] lg:w-[275.47px] lg:h-[39.55px] lg:justify-self-start lg:mx-[5%]"
          alt="Films On Maya"
        />
      </div>
      <div slot="content" class="pt-2">
        <div
          class="grid gap-y-6 text-center lg:mt-4 lg:text-left lg:mx-[5%] lg:w-[489px]"
        >
          
            {#each committeesData as { heading, body }}
            <div>
              <p
                style="text-transform: uppercase; color: #992965; text-alignment:center"
              >
                {heading}
              </p>
              <p>{body}</p>
            </div>
          {/each}
          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
  <div>
    <AccordianItem toggleItem={isEducationOpen} {allItems}>
      <div slot="heading" class="cursor-pointer grid justify-items-center">
        <img
          src={education}
          class="w-[117.94px] h-[22.97px] lg:w-[197.77px] lg:h-[38.51px] lg:justify-self-start lg:mx-[5%]"
          alt="Education"
        />
      </div>
      <div slot="content" class="pt-2">
        <div
          class="grid gap-y-6 text-center lg:mt-4 lg:text-left lg:mx-[5%] lg:w-[489px]"
        >
          
            {#each educationData as { heading, body }}
            <div>
              <p
                style="text-transform: uppercase; color: #992965; text-alignment:center"
              >
                {heading}
              </p>
              <p>{body}</p>
            </div>
          {/each}
          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
  <div>
    <AccordianItem toggleItem={isPositionsHeldOpen} {allItems} lastItem={true}>
      <div slot="heading" class="cursor-pointer grid justify-items-center">
        <img
          src={positionsHeld}
          class="w-[181.58px] h-[20.46px] lg:w-[304.48px] lg:h-[34.3px] lg:justify-self-start lg:mx-[5%]"
          alt="Positions Held"
        />
      </div>
      <div slot="content" class="pt-2">
        <div
          class="grid gap-y-6 text-center lg:mt-4 lg:text-left lg:mx-[5%] lg:w-[489px]"
        >
          
            {#each positionsHeldData as { heading, body }}
            <div>
              <p
                style="text-transform: uppercase; color: #992965; text-alignment:center"
              >
                {heading}
              </p>
              <p>{body}</p>
            </div>
          {/each}
          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
</section>
