<template>
    <form class="contact-form" @submit.prevent="submitRequest">
    <div v-if="errors.length" class="error_box">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors"  v-bind:key="error">{{ error }}</li>
      </ul>
    </div>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="name" v-model="user.name">
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" v-model="user.email">
    </div>
    <div class="form-group">
        <label for="comments">Comments</label>
        <p><textarea name="comments" rows="4" cols="20"> </textarea></p>
    </div>
    <button type="submit">Submit</button>
    </form>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ContactUsForm',
  methods: {
    submitRequest: function (e) {
      console.log('Request submitted')
      console.log(this.user.name)
      if (this.user.name) {
        console.log('true')
        return true
      }
      this.errors = []
      if (!this.user.name) {
        this.errors.push('Name required.')
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
