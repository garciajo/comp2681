<template>
  <div class="about">
    <h1>This is an FAQ page</h1>
  </div>
  <div class="container">
   <div class="wrapper">
     <h2>FAQ</h2>
    <div v-for="item in faq" :key="item.abbreviation" class="links">
      <p class="questions">{{ item.question }}</p>
      <p>{{ item.answer }}</p>
    </div>
  </div>
  </div>
</template>

<script>
import { faq } from '@/data/faq'

export default {
  name: 'FAQ',
  data () {
    return {
      faq
    }
  }
}
</script>
<style lang="scss">
.questions{
  font-weight: bold;
}
</style>
