<template>
  <nav>
    <router-link to=“/”>Home</router-link> |
    <router-link to=“/about”>About</router-link>
  </nav>
  <router-view/>
<h2>{{ counter.pepe }}</h2>
  <button @click="counter.increment">AddingOne</button>

  <button @click="counter.decrease">SubstractingOne</button>

  <button @click="counter.toZero">Reset</button>
</template>
<script setup>
import { useCounterStore } from "@/store/index";
const counter = useCounterStore();
counter.pepe++;
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2C3E50;
}
nav a.router-link-exact-active {
  color: #42B983;
}
</style>
