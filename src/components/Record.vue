<template>
    <form class="contact-form" @submit.prevent="submitRequest">
    <div v-if="errors.length" class="error_box">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors"  v-bind:key="error">{{ error }}</li>
      </ul>
    </div>
      <fieldset>
        <legend>Personal Info</legend>
        <div class="form-group">
            <label for="name">Last Name</label>
            <input type="text" name="lname" v-model="user.lname" class="full_width">
        </div>
        <div class="form-group">
            <label for="name">First Name</label>
            <input type="text" name="fname" v-model="user.fname" class="full_width">
        </div>
        <div class="form-group">
            <label for="name">Identification (e.g. Health card number)</label>
            <input type="text" name="fname" v-model="user.indentification">
        </div>
        <div class="form-group">
          <label for="dob">Date of Birth (DD/MM/YYYY)</label>
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
            <label for="email">Email</label>
            <input type="email" name="email" v-model="user.email">
        </div>
        <div class="form-group">
          <label for="phone">Home Phone</label>
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
    submitRequest: function (e) {
      if (this.user.lname) {
        return true
      }
      this.errors = []
      if (!this.user.lname) {
        this.errors.push('Last Name required.')
      }
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
</style>
