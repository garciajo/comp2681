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
