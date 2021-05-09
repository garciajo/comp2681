   <!--*********************************************************
   *   Final Project: Vaccine Recording System
   *   Purpose: Controller for the Contact Us portion of the application
   *   Author: Jose Garcia
   *   Date: May 2021
   *   Filename: ContactUs.vue
   *   Email: <garciaalfonzoj18@mytru.ca>
   *   2021 Jose Garcia. Ottawa, Ontario.
   *********************************************************-->
<template>
    <form class="contact-form" @submit.prevent="submitRequest">
       <div v-if="errors.length" ref="error_box" class="error_box" tabindex="0" role="alert"> <!-- Tab index 0 to allow the div to be focusable -->
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors"  v-bind:key="error">{{ error[1] }}</li> <!-- Loop through error list -->
      </ul>
    </div>
      <p class="required_text">Required fields marked with an asterisk</p>
      <fieldset>
        <legend>Contact Info</legend>
          <div class="form-group">
              <label for="name">Name<span class="required">*</span></label>
              <input type="text" name="name" v-model="user.name">
          </div>
          <div class="form-group">
              <label for="email">Email<span class="required">*</span></label>
              <input type="email" name="email" v-model="user.email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"> <!-- Validate Email for proper format -->
          </div>
          <div class="form-group">
              <label for="comments">Comments</label>
              <p><textarea name="comments" rows="4" cols="20"> </textarea></p>
          </div>
      </fieldset>
    <button type="submit">Submit</button>
    </form>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ContactUsForm',
  methods: {
    focusInput () {
      this.$refs.error_box.focus()
    },
    submitRequest: function (e) {
      this.errors = []
      if (!this.user.name) {
        this.errors.push(['name', 'Name required'])
      }
      if (!this.user.email) {
        this.errors.push(['email', 'Email required'])
      }
      this.$nextTick(() => this.focusInput()) /** nextTick executes the focusInput function on next DOM update cycle **/
      e.preventDefault()
    }
  },
  data () {
    return {
      user: {
        name: ''
      },
      errors: []
    }
  }
})
</script>
<style lang="scss">
.error_box a{
  color: #0000d5
}
.error_box:focus-visible {
    outline: none;
    box-shadow: 0 0 3pt 2pt #4c8aff;
}
</style>
