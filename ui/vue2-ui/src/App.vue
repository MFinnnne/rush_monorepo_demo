
<script>
import canvasBroad from './components/canvasBroad.vue'

export default {
	name: 'App',
	components: {
		canvasBroad
	},
}
</script>

<template>
  <div style="height: 100px width:100px border: red 1px solid;">
    <canvasBroad></canvasBroad>
  </div>
</template>


<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
