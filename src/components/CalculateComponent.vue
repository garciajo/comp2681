    <!--*********************************************************
   *   Final Project: Vaccine Recording System
   *   Purpose: Controller for the Calculate portion of the application
   *   Author: Jose Garcia
   *   Date: May 2021
   *   Filename: CalculateComponent.vue
   *   Email: <garciaalfonzoj18@mytru.ca>
   *   2021 Jose Garcia. Ottawa, Ontario.
   *********************************************************-->
<template>
    <form class="contact-form" @submit.prevent="submitRequest">
      <fieldset>
        <legend>Vaccine Info</legend>
        <div class="form-group">
          <label for="vaccineType">Type</label>
            <select id="vaccineType" class="half_width" v-model="selected">
              <option disabled value="">Vaccine type</option>
              <option value="Pfizer">Pfizer-BioNTech</option>
              <option value="Moderna">Moderna</option>
              <option value="AstraZeneca">AstraZeneca</option>
            </select>
        </div>
       </fieldset>
       <fieldset v-if="selected">
        <legend>Dosage Info for {{ selected }}</legend>
          <p >
            <table>
              <tr>
                <th>Date of Authorization in Canada</th>
                <td v-if="selected == 'Pfizer'">December 9, 2020</td>
                <td v-if="selected == 'Moderna'">December 23, 2020</td>
                <td v-if="selected == 'AstraZeneca'">February 26, 2021</td>
              </tr>
              <tr>
                <th>Authorized Ages of use</th>
                <td v-if="selected == 'Pfizer'">16 years of age and older</td>
                <td v-if="selected == 'Moderna'">18 years of age and older</td>
                <td v-if="selected == 'AstraZeneca'">Health Canada has authorized this product for 18 years of age and older. The safety and efficacy in children under 18 years of age have not yet been established.</td>
              </tr>
              <tr>
                <th>Dose</th>
                <td v-if="selected == 'Pfizer'">0.3ml(30mcg)</td>
                <td v-if="selected == 'Moderna'">0.5ml(100mcg)</td>
                <td v-if="selected == 'AstraZeneca'">0.5 mL (5 x 1010 viral particles)</td>
              </tr>
              <tr>
                <th>Schedule</th>
                <td v-if="selected == 'Pfizer'">2 Doses, a minimum of 21 days apart</td>
                <td v-if="selected == 'Moderna'">2 Doses, a minimum of 28 days apart</td>
                <td v-if="selected == 'AstraZeneca'">2 Doses, a minimum of 28 days apart</td>
              </tr>
              <tr>
                <th>Booster Doses</th>
                <td>No Evidence for the need for an additional booster</td>
              </tr>
              <tr>
                <th>Route of Administration</th>
                <td>Intramuscular into the deltoid muscle</td>
              </tr>
              <tr>
                <th>Effectiveness</th>
                <td v-if="selected == 'Pfizer'">95% 7 Days after 2nd dose</td>
                <td v-if="selected == 'Moderna'">94.1% 14 days after the 2nd dose</td>
                <td v-if="selected == 'AstraZeneca'">82% 14 days after the 2nd dose</td>
              </tr>
            </table>
          </p>
       </fieldset>
       <fieldset v-if="selected">
        <legend>Supplied</legend>
          <ul v-if="selected == 'Pfizer'">
            <li>After preparation, each vial of Pfizer-BioNTech COVID-19 Vaccine contains up to six doses of 0.3mL</li>
            <li>Each dose must contain 0.3mL of vaccine</li>
            <li>If the amount of vaccine remaining in the vial and any excess volume, do not pool excess vaccine from multiple vials</li>
          </ul>
          <ul v-if="selected == 'Moderna'">
            <li>After preparation, each vial of Moderna COVID-19 Vaccine containes up to ten doses of 0.5mL</li>
            <li>Each dose must contain 0.5mL of vaccine</li>
            <li>If the amount of vaccine remaining in the vial and any excess volume, do not pool excess vaccine from multiple vials</li>
          </ul>
          <ul v-if="selected == 'AstraZeneca'">
            <li>AstraZeneca COVID-19 vaccine is packaged in (not all pack sizes may beavailable):</li>
            <ul>
              <li>5 mL of solution in a 10-dose vial (clear type I glass) with stopper (elastomeric with aluminium overseal)</li>
              <li>4 mL of solution in an 8-dose vial (clear type I glass) with stopper (elastomeric with aluminium overseal).</li>
            </ul>
            <li>Vaccines should be mixed with a careful swirling motion until a uniform suspension is achieved prior to administration. Unless otherwise instructed by the manufacturer, the vaccine should not be shaken before use. </li>
            <li>Each vaccine dose of 0.5 mL is withdrawn into a syringe for injection to be administered intramuscularly. Use a separate sterile needle and syringe for each individual.</li>
          </ul>
       </fieldset>
        <fieldset v-if="selected">
          <legend>Hand Washing</legend>
            <audio controls>
              <source src="../assets/audio/WaterAMetalTroughX2_TE36432.mp3" type="audio/mpeg">
            </audio>
            <p>Proper washing must be followed including these five steps:</p>
             <ol>
                <li>Wet your hands with clean, running water (warm or cold), turn off the tap, and apply soap.</li>
                <li>Lather your hands by rubbing them together with the soap. Lather the backs of your hands, between your fingers, and under your nails.</li>
                <li>Scrub your hands for at least 20 seconds. Need a timer? Hum the “Happy Birthday” song from beginning to end twice.</li>
                <li>Rinse your hands well under clean, running water.</li>
                <li>Dry your hands using a clean towel or air dry them.</li>
             </ol>
          <video width="320" height="240" controls>
            <source src="../assets/video/200129_01_Medical_4k_011.mp4" type="video/mp4">
            </video>
        </fieldset>
       <fieldset v-if="selected">
        <legend>Contraindications</legend>
          <ul>
            <li>Individuals with a history of anaphylaxis after previous administration of the vaccine</li>
            <li>Persons with proven immediate or anaphylactic hypersensitivity to any of the component of the vaccine or its container, including polyethylene glycol</li>
            <li>Individuals who have received another vaccine (not a COVID-19 vaccine) in the past 14 days</li>
            <li>Women who are or who may become pregnant</li>
            <li>Women who are breastfeeding</li>
            <li>Individuals who are immunosupressed due to diseases or treatment or those with an autoimmune disorder</li>
            <li>Patients Exhibiting signs ad sumpoms of COVID-19 should not receive this vaccine until their symptoms have abated</li>
          </ul>
       </fieldset>
    </form>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data () {
    return {
      selected: ''
    }
  },
  name: 'CalculateComponent',
  props: {
    msg: String
  }
})
</script>
<style type="scss">
.form-group > fieldset {
    border: none;
    padding: 0;
}
.form-group > fieldset > legend {
 text-align: left;
 margin-bottom: 4px;
 font-size: 1em;
}
.radio_group{
  text-align: left;
}
</style>
