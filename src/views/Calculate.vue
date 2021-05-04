<template>
  <div class="about">
    <h1>COVID-19 Vaccine Dosage Calculation</h1>
  </div>
  <div class="container">
    <CalculateForm msg="Vaccine Recording System"/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CalculateForm from '@/components/CalculateComponent.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    CalculateForm
  }
})
</script>
<style lang="scss">
.form-group{
    padding-bottom: 1em;
    text-align: left;
}
.form-group > label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.25em;
    width: 100%;
}
input[type=text], input[type=email], input[type=tel], textarea, select {
    border: 1px solid #919191;
    padding: 0.5em;
    border-radius: 0.25em;
}
input[type=email]{
    width: 50%;
}
input[type=tel]{
    width: 25%;
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
