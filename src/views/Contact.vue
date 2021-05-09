<!--*********************************************************
  *   Final Project: Vaccine Recording System
  *   Purpose: View for the Contact portion of the application
  *   Author: Jose Garcia
  *   Date: May 2021
  *   Filename: Contact.vue
  *   Email: <garciaalfonzoj18@mytru.ca>
  *   2021 Jose Garcia. Ottawa, Ontario.
  *********************************************************-->
<template>
  <div class="about">
    <h1>This is a Contact Us page</h1>
  </div>
  <div class="container">
    <ContactUsForm msg="Vaccine Recording System"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactUsForm from '@/components/ContactUs.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    ContactUsForm
  }
})
</script>
<style lang="scss">
.container {
    background-color: #d5d5d5;
    padding-top: 1em;
    padding-bottom: 1em;
}
.form-group{
    padding-bottom: 1em;
}
.form-group > label {
    float:left;
    font-weight: bold;
    margin-bottom: 0.25em;
}
input[type=text], input[type=email], input[type=tel], textarea {
    width: 100%;
    border: 1px solid #919191;
    padding: 0.5em;
    border-radius: 0.25em;
}
input[type=text]:focus, input[type=email]:focus, textarea:focus, button[type=submit]:focus {
    box-shadow: 0px 0px 6px 2px #4C8AFF;
    outline:0;
}
button[type=submit] {
    background-color: #005eff;
    padding: 1em;
    border-radius: 4px;
    border: none;
    font-weight: bold;
    color: #FFF;
    cursor: pointer;
}
button[type=submit]:hover{
      background-color: #2675fd;
}
</style>
