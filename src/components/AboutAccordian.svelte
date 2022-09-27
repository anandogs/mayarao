<script type="ts">
  import AccordianItem from "./AccordianItem.svelte";
  
  import soloGroupCreations from "../images/about/solo_group_creations.svg";
  import theatreInEducation from "../images/about/theatre_in_education.svg";
  import kathakali from '../images/about/kathakali.svg';

  import { isSoloGroupCreationsOpen } from "./stores/aboutStore";
  import { isTheatreInEducationOpen } from "./stores/aboutStore";
  import { isKathakaliOpen } from "./stores/aboutStore";
  
  
  import {soloGroupCreationsData} from "./stores/soloGroupCreationsData"
  import { theatreInEducationData } from "./stores/theatreInEducationData";
</script>

<section class="grid gap-y-10">
  <div>
    <AccordianItem toggleItem={isSoloGroupCreationsOpen}>
      <div slot="heading" class="cursor-pointer">
        <img
          src={soloGroupCreations}
          class="w-[258px] h-[45.77px]"
          alt="Solo Group Creations"
        />
      </div>
      <div slot="content" class="pt-2">
        <h4 class="pb-[30px] text-center text-[#992965]">
          devised, performed and directed
        </h4>
        <div class="grid gap-y-6 text-center">
          {#each soloGroupCreationsData as { heading, body }}
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
    <AccordianItem toggleItem={isTheatreInEducationOpen}>
      <div slot="heading" class="cursor-pointer">
        <img
          src={theatreInEducation}
          class="w-[236.54px] h-[32.38px]"
          alt="Solo Group Creations"
        />
      </div>
      <div slot="content" class="pt-2">
        <div class="grid gap-y-6 text-center pt-6">
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
    <AccordianItem toggleItem={isKathakaliOpen}>
      <div slot="heading" class="cursor-pointer">
        <img
          src={kathakali}
          class="w-[114.58px] h-[31.25px]"
          alt="Kathakali"
        />
      </div>
      <div slot="content" class="pt-2">
        <div class="grid gap-y-6 text-center pt-6">
          
            <div>
          
              <p>1961 onwards<br/> 
                Training in Delhi and Kerala, specialising in the male role. Several performances in India and abroad of the Ramayana and the Mahabharata as well as Shakespeare’s ‘Othello’. Krishna, Karna, Ravana, Arjuna, Hidimba, Hanuman, Bhima, Damayanti, Surpanakha, Draupadi, Desdemona</p>
            </div>
          
          <div />
        </div>
      </div>
    </AccordianItem>
  </div>
</section>
