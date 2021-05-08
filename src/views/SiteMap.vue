<!--*********************************************************
  *   Final Project: Vaccine Recording System
  *   Purpose: View for the Site Map cord portion of the application
  *   Author: Jose Garcia
  *   Date: May 2021
  *   Filename: SiteMap.vue
  *   Email: <garciaalfonzoj18@mytru.ca>
  *   2021 Jose Garcia. Ottawa, Ontario.
  *********************************************************-->
<template>
  <div class="about">
    <h1>This is a Site Maps page</h1>
  </div>
  <div class="container">
   <div class="wrapper">
     <h2>Cross-reference Links</h2>
      <ul v-for="link in routes.getRoutes()" :key="link.abbreviation" class="links">
        <li><a v-bind:href="link.path">{{ link.name }}</a></li>
      </ul>
  </div>
  </div>
</template>
<script>
import routes from '@/router/index'

export default {
  name: 'App',
  data () {
    return {
      routes
    }
  }
}
</script>
