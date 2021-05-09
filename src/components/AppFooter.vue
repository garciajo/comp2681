    <!--*********************************************************
   *   Final Project: Vaccine Recording System
   *   Purpose: Footer file to be used accross the application
   *   Author: Jose Garcia
   *   Date: May 2021
   *   Filename: AppFooter.vue
   *   Email: <garciaalfonzoj18@mytru.ca>
   *   2021 Jose Garcia. Ottawa, Ontario.
   *********************************************************-->
<template>
<footer>
    <div class="footer_box">
        <h2>Contact Us</h2>
        <p>66 Slater St</p>
        <p>Ottawa ON</p>
        <p>K1P 5H1</p>
        <p>Canada</p>
    </div>
    <div class="footer_box">
        <h2>About Us</h2>
        <ul>
            <li>Our mission</li>
            <li>Disclaimer</li>
            <li>Privacy</li>
            <li>Accessibility</li>
        </ul>
    </div>
    <div class="footer_box">
        <h2>Follow Us</h2>
        <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
        </ul>

    </div>
    <div class="footer_box">
        <h2>Partners</h2>
        <ul>
            <li>Health Canada</li>
            <li>Public Health Ontario</li>
            <li>Public Health British Columbia</li>
        </ul>
    </div>
</footer>
<p class="footer_year">Copyright <span id="current_year">{{ currentYear() }}</span></p>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data () {
    return {
      selected: ''
    }
  },
  name: 'AppFooter',
  props: {
    msg: String
  },
  methods: {
    currentYear () {
      const currentDate = new Date()
      const year = currentDate.getFullYear()
      return year
    }
  }
})
</script>
