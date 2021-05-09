<!--*********************************************************
  *   Final Project: Vaccine Recording System
  *   Purpose: Main driver of the application
  *   Author: Jose Garcia
  *   Date: May 2021
  *   Filename: App.vue
  *   Email: <garciaalfonzoj18@mytru.ca>
  *   2021 Jose Garcia. Ottawa, Ontario.
  *********************************************************-->
<template>
 <app-header />
  <router-view/>
  <app-footer />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
<style lang="scss">
h2{
    margin-bottom: 0.25em;
}
p, ul{
    margin-top: 0.25em
}
li{
    text-align: left;
}
.container {
    padding-left: 15em;
    padding-right: 15em;
    background-color: #e6e6e6;
    padding-top: 1em;
    padding-bottom: 1em;
}
fieldset {
    padding: 0 2em 0 1em;
    border:none;
}
fieldset > legend {
    text-align: left;
    font-weight: bold;
    font-size: 1.5em;
    padding-left: 0;
    margin-bottom: 0.25em;
}
a{
    color: #4262b9
}
a:visited{
    color: #ab42b9
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: .5rem 1rem;

  p {
    margin-left: 1rem;
  }
}

nav {
  margin-left: auto;

  ul {
    list-style: none;
  }

  ul li {
    display: inline-flex;
    margin-left: 1rem;
  }
}

footer{
    display:flex;
    background-color: #f5f5f5;
    justify-content: center;
}
.homepage_boxes > a {
    color: #262626;
}

.banner > img{
    width: 100%;
    height: auto;
}
.footer_box{
      margin: 0.25em 0.25em 0.25em 3em;
      padding: 1em;
  }
.footer_box > ul {
    padding-left:0;
}
.footer_box > ul > li {
    list-style-type: none;
}
.full_width{
    width: 100%;
}
.three_quater_width{
    width: 75%;
}
.half_width{
    width: 50%;
}
.one_quater_width{
    width: 25%;
}
table{
  border-collapse: collapse;
}
th{
  border: 1px solid #999;
  background-color: #D0E4F5;
  padding: 0.50em;
  text-align: left;

}
td{
  border: 1px solid #999;
  padding: 0.50em;
  text-align: left;
}
.wrapper {
    text-align: left;
}
.links_table th{
    border: none;
    background-color: #a5c3ff;
    color: #000;
}
.links_table td{
    border: none;
}
blockquote {
    background-color: hsl(193deg 100% 86%);
    padding: 0.25em;
    border-radius: 4px;
    margin: 0.25em 5.25em 0 0.75em;
    color: rgb(49 49 49);
}
.dropCap{
    font-size:2em;
    line-height: 0.65;
    font-weight: 900;
}
.error_box{
    border: 1px solid #000;
    border-radius: 4px;
    background-color: #ff6161;
    color: #010101;
    padding-top: 1em;
    margin-bottom: 1em;
}
.error_box > ul > li{
    list-style-type: none;
}
.required{
  display: inline;
  color: red;
  font-size: 1.25em;
  margin-left: 0.25em;
}
input:invalid {
     outline: none;
    box-shadow: 0 0 3pt 2pt #ff4545;
}
p{
    text-align: left;
}
.footer_year{
    text-align: center;
}
/* Responsive Design Classes */
@media screen and (max-width:600px){ /*Extra small devices*/
    nav ul li {
     display: block;
     margin-left: 1rem;
     margin-bottom: 0.25em;
    }
    .homepage_box{
        border: 1px solid #585858;
        padding: 0.25em;
        margin-bottom: 1em;
        border-radius: 2px;
    }
    .homepage_box:hover{
        border: 3px solid #000000;
    }
    .header-items{
        float:left;
        margin-right: 2em;
        margin-top: 0.5em;
    }
    .header-items > ul > li{
        display: block;
        margin-right: 3em;
    }
    footer{
        display:block;
        padding: 0em 0em 0 0;
    }
    .homepage_images{
        display: none;
     }
    .footer_box > p {
        line-height: 0.5em;
    }
    .links_table{
        width: 600px;
    }
}
@media screen and (min-width:768px) and (max-width: 992px){ /*Tablets*/
    nav ul li {
     display: block;
     margin-left: 1rem;
     margin-bottom: 0.25em;
    }
    .homepage_box{
        border: 1px solid #585858;
        padding: 0.25em;
        margin-bottom: 1em;
        border-radius: 2px;
    }
    .homepage_box:hover{
        border: 3px solid #000000;
    }
    .homepage_images{
       display: none;
    }
    .links_table{
        width: 768px;
    }
}
@media screen and (min-width:992px){ /* Desktops */
    .homepage_boxes{
        display: flex;
        justify-content: center;
    }
    .homepage_boxes > a {
        text-decoration: none;
        color: #101010 !important;
    }
    .homepage_box {
        border: 1px solid #dedede;
        border-radius: 4px;
        text-align: center;
        padding: 1em;
        margin: 1em 1em 1em 1em;
        height: 24em;
        width: 28em;
        background-color: #dedede;
    }
    .homepage_box:hover {
       border: 1px solid #c1c1c1;
       background-color: #c1c1c1;
       color: #000 !important;
    }
    .homepage_images{
        max-height: 200px;
        min-height: 200px;
    }
    .main_content{
        margin: 1em;
    }
    .footer_box{
        margin: 0.75em 0.75em 0.75em 9em;
        padding: 1em;
    }
    .links_table{
        width: 992px;
    }
}
</style>
