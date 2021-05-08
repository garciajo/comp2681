<!--*********************************************************
  *   Final Project: Vaccine Recording System
  *   Purpose: View for the Links portion of the application
  *   Author: Jose Garcia
  *   Date: May 2021
  *   Filename: Links.vue
  *   Email: <garciaalfonzoj18@mytru.ca>
  *   2021 Jose Garcia. Ottawa, Ontario.
  *********************************************************-->
<template>
  <div class="about">
    <h1>Useful Links</h1>
  </div>
  <div class="container">
   <div class="wrapper">
      <h2>Similar Websites</h2>
      <table class="links_table">
          <tr>
            <th>Website</th>
            <th>Information</th>
          </tr>
            <tr v-for="link in similarWebsites" :key="link.abbreviation" class="links">
              <td><a v-bind:href="link.location">{{ link.name }}</a></td>
              <td>{{ link.description }}<blockquote>"{{ link.like }}"</blockquote></td>
            </tr>
      </table>
    <h2>Component Websites</h2>
     <table class="links_table">
          <tr>
            <th>Website</th>
            <th>Information</th>
          </tr>
            <tr v-for="link in multimediaWebsites" :key="link.abbreviation" class="links">
              <td><a v-bind:href="link.location">{{ link.name }}</a></td>
              <td>{{ link.description }}<blockquote>"{{ link.like }}"</blockquote></td>
            </tr>
     </table>
     <h2>Technology Websites</h2>
        <table class="links_table">
          <tr>
            <th>Website</th>
            <th>Information</th>
          </tr>
              <tr v-for="link in technologyWebsites" :key="link.abbreviation" class="links">
                <td><a v-bind:href="link.location">{{ link.name }}</a></td>
                <td>{{ link.description }}<blockquote>"{{ link.like }}"</blockquote></td>
              </tr>
        </table>
  </div>
  </div>
</template>

<script>
import { similarWebsites, multimediaWebsites, technologyWebsites } from '@/data/links'

export default {
  name: 'App',
  data () {
    return {
      similarWebsites, multimediaWebsites, technologyWebsites
    }
  }
}
</script>
