<template>
  <div class="hello">
      <TestBtn></TestBtn>
  </div>
</template>

<script>
import {TestBtn} from 'vue2-ui'

export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    components: {
        TestBtn
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
