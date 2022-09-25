<script type="ts">
  import AccordianItem from "./AccordianItem.svelte";
  import { isSoloGroupCreationsOpen } from "../pages/about/aboutStore";
  import { isTheatreInEducationOpen } from "../pages/about/aboutStore";
  import soloGroupCreations from "../images/about/solo_group_creations.svg";
  import theatreInEducation from "../images/about/theatre_in_education.svg";
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
        <h4 class="pb-[30px]">devised, performed and directed</h4>
        <div class="grid gap-y-6 text-center">
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              Loose Woman
            </p>
            <p>multi media show in episodes, 2018</p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">Protest</p>
            <p>various performances, 2012 onwards</p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">Walk</p>
            <p>
              in response to Delhi bus gang rape 2012 onwards, several
              performances in schools, colleges, street, living rooms, shopping
              malls, NGOs, rallies
            </p>
          </div>
          <div>
            <p style="text-transform: uppercasel; color: #992965;">
              The Non Stop Feel Good Show
            </p>
            <p>
              commissioned by Park Hotel for 6-city tour Mumbai, Delhi,
              Hyderabad, Bangalore, Chennai, Kolkata, 2011
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">Small Fry</p>
            <p>
              created for Maximum India festival, Kennedy Centre, Washington DC,
              2011
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">Ravanama</p>
            <p>
              solo, commissioned by Ramayana festival, Adishakti, Pondicherry,
              India 2011
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              Quality Street
            </p>
            <p>solo, by Chimamanda Ngozi Adichie, 2010</p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              Lady Macbeth
            </p>
            <p>Revisited cross media performance, 2010</p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              Are You Home Lady Macbeth?
            </p>
            <p>performance art project for Khoj, Delhi, 2008</p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              Hand Over Fist
            </p>
            <p>
              perspectives on masculinities cross media performance as launch of
              UN programme in India, commissioned by UNDP and UNIFEM, Delhi,
              2007
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              Hand Over Fist
            </p>
            <p>
              perspectives on masculinities cross media performance as launch of
              UN programme in India, commissioned by UNDP and UNIFEM, Delhi,
              2007
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">Comedy</p>
            <p>
              solo, various event-specific creations, Hindi/English 1992
              onwards.
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              A Deep Fried Jam and A Deeper Fried Jam
            </p>
            <p>socio-political cabaret, regenerated versions, 2002 onwards.</p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">Departures</p>
            <p>
              commissioned by London International Festival of Theatre
              (LIFT),London, 1999
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              4-Wheel-Drive-“Come-to-me-Mr.Sharma”- Body-Fat-Murdered-Show
            </p>
            <p>comedy in episodes, several versions, 1998 onwards</p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">Rainmaker</p>
            <p>solo, inspired by Assamese short story, Delhi,1998</p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">The Job</p>
            <p>
              solo, based on a short-story by Bertolt Brecht, commissioned by
              Max Mueller Bhavan, Delhi,1997.
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">Khol Do</p>
            <p>
              solo, dance-theatre, inspired by Saadat Hasan Manto’s short story,
              Delhi, 1993.
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              Street theatre
            </p>
            <p>
              as founder-member of group,‘ Theatre Union’, scripted, directed,
              performed Om Swaha on dowry and Dafa no.180 on the Indian law on
              rape, several shows in colleges, parks, non-formal spaces, 1979-82
            </p>
          </div>
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
        <h4 class="pb-[30px]" style="text-align: center; color: #992965">devised, performed and directed</h4>
        <div class="grid gap-y-6 text-center">
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              Loose Woman
            </p>
            <p>multi media show in episodes, 2018</p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">Protest</p>
            <p>various performances, 2012 onwards</p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">Walk</p>
            <p>
              in response to Delhi bus gang rape 2012 onwards, several
              performances in schools, colleges, street, living rooms, shopping
              malls, NGOs, rallies
            </p>
          </div>
          <div>
            <p style="text-transform: uppercasel; color: #992965;">
              The Non Stop Feel Good Show
            </p>
            <p>
              commissioned by Park Hotel for 6-city tour Mumbai, Delhi,
              Hyderabad, Bangalore, Chennai, Kolkata, 2011
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">Small Fry</p>
            <p>
              created for Maximum India festival, Kennedy Centre, Washington DC,
              2011
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">Ravanama</p>
            <p>
              solo, commissioned by Ramayana festival, Adishakti, Pondicherry,
              India 2011
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              Quality Street
            </p>
            <p>solo, by Chimamanda Ngozi Adichie, 2010</p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              Lady Macbeth
            </p>
            <p>Revisited cross media performance, 2010</p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              Are You Home Lady Macbeth?
            </p>
            <p>performance art project for Khoj, Delhi, 2008</p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              Hand Over Fist
            </p>
            <p>
              perspectives on masculinities cross media performance as launch of
              UN programme in India, commissioned by UNDP and UNIFEM, Delhi,
              2007
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              Hand Over Fist
            </p>
            <p>
              perspectives on masculinities cross media performance as launch of
              UN programme in India, commissioned by UNDP and UNIFEM, Delhi,
              2007
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">Comedy</p>
            <p>
              solo, various event-specific creations, Hindi/English 1992
              onwards.
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              A Deep Fried Jam and A Deeper Fried Jam
            </p>
            <p>socio-political cabaret, regenerated versions, 2002 onwards.</p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">Departures</p>
            <p>
              commissioned by London International Festival of Theatre
              (LIFT),London, 1999
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              4-Wheel-Drive-“Come-to-me-Mr.Sharma”- Body-Fat-Murdered-Show
            </p>
            <p>comedy in episodes, several versions, 1998 onwards</p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">Rainmaker</p>
            <p>solo, inspired by Assamese short story, Delhi,1998</p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">The Job</p>
            <p>
              solo, based on a short-story by Bertolt Brecht, commissioned by
              Max Mueller Bhavan, Delhi,1997.
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">Khol Do</p>
            <p>
              solo, dance-theatre, inspired by Saadat Hasan Manto’s short story,
              Delhi, 1993.
            </p>
          </div>
          <div>
            <p style="text-transform: uppercase; color: #992965;">
              Street theatre
            </p>
            <p>
              as founder-member of group,‘ Theatre Union’, scripted, directed,
              performed Om Swaha on dowry and Dafa no.180 on the Indian law on
              rape, several shows in colleges, parks, non-formal spaces, 1979-82
            </p>
          </div>
        </div>
      </div>
    </AccordianItem>
  </div>
</section>

