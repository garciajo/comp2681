    <!--*********************************************************
   *   Final Project: Vaccine Recording System
   *   Purpose: Controller for the Home page portion of the application
   *   Author: Jose Garcia
   *   Date: May 2021
   *   Filename: Main.vue
   *   Email: <garciaalfonzoj18@mytru.ca>
   *   2021 Jose Garcia. Ottawa, Ontario.
   *********************************************************-->
<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <div class="main_content">
        <p><span class="dropCap">W</span>elcome to the Vaccine Recording System (VRS). The VRS aims to facilitate the administration and recording of vaccines given to residents. </p>
        <p>This system will be presented to the Ministry of Education and once integrated will ensure the distribution taskforce has the technology to efficiently track and administer the COVID-19 vaccines. </p>
    </div>
    <div class="homepage_boxes">
        <router-link to="/calculate">
            <div class="homepage_box">
            <h2>Calculate</h2>
            <img src="../assets/img/calculate.jpeg" class="homepage_images">
            <p>Calculate the proper dosage needed depending on the type of resident</p>
            </div>
        </router-link>
        <router-link to="/record">
            <div class="homepage_box">
                <h2>Record</h2>
                    <img src="../assets/img/record.jpeg" class="homepage_images">
                <p>Keep a vaccination record for each resident. The Vaccination record will be loaded from an excel file. Please have this file handy.</p>
            </div>
        </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  props: {
    msg: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
