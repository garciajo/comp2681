<template>
  <div class="home">
     <div class="banner">
        <img src="../assets/img/coronavirus_banner.png" alt="VRS Banner image">
    </div>
    <MainComponent msg="Vaccine Recording System"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainComponent from '@/components/Main.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    MainComponent
  }
})
</script>
