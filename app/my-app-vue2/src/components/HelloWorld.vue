<template>
  <div class="hello">
    <TestBtn></TestBtn>
  </div>
</template>

<script>
import { TestBtn } from 'vue2-ui';
import { add, divide, minus, multiply } from 'my-utils';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    TestBtn
  },
  mounted() {
    console.log(add(1, 1));
    console.log(divide(1, 1));
    console.log(minus(1, 1));
    console.log(multiply(1, 1));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
