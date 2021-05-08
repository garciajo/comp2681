    <!--*********************************************************
   *   Final Project: Vaccine Recording System
   *   Purpose: Controller for the Record portion of the application
   *   Author: Jose Garcia
   *   Date: May 2021
   *   Filename: Main.vue
   *   Email: <garciaalfonzoj18@mytru.ca>
   *   2021 Jose Garcia. Ottawa, Ontario.
   *********************************************************-->
<template>
    <form class="contact-form" @submit.prevent="submitRequest">
    <div v-if="errors.length" ref="error_box" class="error_box" tabindex="0" role="alert">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors"  v-bind:key="error">{{ error[1] }}</li>
      </ul>
    </div>
      <p>Required fields marked with an asterisk</p>
      <fieldset>
        <legend>Personal Info</legend>
        <div class="form-group">
            <label for="name">Last Name<span class="required">*</span></label>
            <input type="text" name="lname" v-model="user.lname" class="full_width">
        </div>
        <div class="form-group">
            <label for="name">First Name<span class="required">*</span></label>
            <input type="text" name="fname" v-model="user.fname" class="full_width">
        </div>
        <div class="form-group">
            <label for="name">Identification (e.g. Health card number)<span class="required">*</span></label>
            <input type="text" name="healthcard" v-model="user.indentification">
        </div>
        <div class="form-group">
          <label for="dob">Date of Birth (DD/MM/YYYY)<span class="required">*</span></label>
          <input type="text" name="dob" v-model="user.dob" class="full_width">
        </div>
        <div class="form-group">
          <fieldset>
            <legend>Sex</legend>
            <div class="fieldset_radios">
              <div class="radio_group">
                <input type="radio" name="sex" id="Female" value="Female" v-model="sex">
                <label for="Female">Female</label>
              </div>
              <div class="radio_group">
                <input type="radio" name="sex" id="Male" value="Male" v-model="sex">
                <label for="Male">Male</label>
              </div>
              <div class="radio_group">
                <input type="radio" name="sex" id="nonBinary" value="Non Binary" v-model="sex">
                <label for="nonBinary">Non Binary</label>
              </div>
              <div class="radio_group">
                <input type="radio" name="sex" id="noAnswer" value="Prefer not to answer" v-model="sex">
                <label for="noAnswer">Prefer not to answer</label>
              </div>
            </div>
            <div class="form-group">
              <label for="physician">Primary Care Clinician (Family Physician or Nurse Practicioner)</label>
              <input type="text" name="physician" v-model="user.physician" class="full_width">
            </div>
       </fieldset>
    </div>
      </fieldset>
      <fieldset>
        <legend>Contact Info</legend>
        <div class="form-group">
            <label for="email">Email<span class="required">*</span></label>
            <input type="email" name="email" v-model="user.email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
        </div>
        <div class="form-group">
          <label for="phone">Home Phone<span class="required">*</span></label>
          <input type="tel" name="phone" v-model="user.phone">
        </div>
        <div class="form-group">
          <label for="mphone">Mobile Phone</label>
          <input type="tel" name="mphone" v-model="user.mphone" class="half_width">
        </div>
        <div class="form-group">
          <label for="street">Street Address</label>
          <input type="text" name="street" v-model="user.street" class="half_width">
        </div>
        <div class="form-group">
          <label for="city">City</label>
          <input type="text" name="city" v-model="user.city" class="half_width">
        </div>
        <div class="form-group">
          <label for="province">Province</label>
          <input type="text" name="province" v-model="user.province" class="one_quater_width">
        </div>
        <div class="form-group">
          <label for="postalCode">Postal Code</label>
          <input type="text" name="postalCode" v-model="user.postalCode" class="one_quater_width">
        </div>
      </fieldset>
       <fieldset>
        <legend>Vaccine Info</legend>
          <div class="form-group">
            <fieldset>
              <legend>First dosage of the vaccine?</legend>
              <div class="fieldset_radios">
                <div class="radio_group">
                  <input type="radio" name="dosageNumber" id="firstDosage" v-model="dosageNumber">
                  <label for="firstDosage">First</label>
                </div>
                <div class="radio_group">
                  <input type="radio" name="dosageNumber" id="secondDosage" v-model="dosageNumber">
                  <label for="secondDosage">Second</label>
                </div>
              </div>
            </fieldset>
            <div class="form-group">
            <label for="firstDosageDate">If second, please indicate first dosage (DD/MM/YYYY)</label>
            <input type="text" name="firstDosageDate" v-model="user.firstDosageDate" class="full_width">
          </div>
          </div>

          <div class="form-group">
              <label for="comments">Additional Comments</label>
              <textarea name="comments" rows="4" cols="20" class="full_width"> </textarea>
          </div>
       </fieldset>
    <button type="submit">Submit</button>
    </form>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'RecordForm',
  methods: {
    focusInput () {
      this.$refs.error_box.focus()
    },
    submitRequest: function (e) {
      this.errors = []
      if (!this.user.lname) {
        this.errors.push(['lname', 'Last Name required'])
      }
      if (!this.user.fname) {
        this.errors.push(['fname', 'First Name required'])
      }
      if (!this.user.healthcard) {
        this.errors.push(['healthcard', 'Identification (e.g. Health card number) required'])
      }
      if (!this.user.dob) {
        this.errors.push(['dob', 'Date of Birth  required'])
      }
      if (!this.user.email) {
        this.errors.push(['email', 'Email required'])
      }
      if (!this.user.phone) {
        this.errors.push(['phone', 'Home Phone required'])
      }
      this.$nextTick(() => this.focusInput())
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
.error_box a{
  color: #0000d5
}
.error_box:focus-visible {
    outline: none;
    box-shadow: 0 0 3pt 2pt #4c8aff;
}
</style>
