    <!--*********************************************************
   *   Final Project: Vaccine Recording System
   *   Purpose: Header file to be used accross the application
   *   Author: Jose Garcia
   *   Date: May 2021
   *   Filename: AppHeader.vue
   *   Email: <garciaalfonzoj18@mytru.ca>
   *   2021 Jose Garcia. Ottawa, Ontario.
   *********************************************************-->
<template>
  <header>
    <img alt="VRS Logo" src="../assets/img/logo.png" height="50">
    <p>Vaccine Recording System</p>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/calculate">Calculate</router-link></li>
      <li><router-link to="/record">Record</router-link></li>
      <li><router-link to="/links">Links</router-link></li>
      <li><router-link to="/faq">FAQ</router-link></li>
      <li><router-link to="/contact">Contact Us</router-link></li>
      <li><router-link to="/sitemap">Site Map</router-link></li>
    </ul>
  </nav>
  </header>
</template>
