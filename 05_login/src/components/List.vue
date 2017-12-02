<template>
  <div>
    {{text}}<mt-spinner type="snake"></mt-spinner>
    {{text1}}<mt-spinner type="double-bounce"></mt-spinner>
    {{text2}}<mt-spinner type="triple-bounce"></mt-spinner>
    {{text3}}<mt-spinner type="fading-circle"></mt-spinner>
  </div>
</template>
<script>
export default {
  data(){
    return {
      text:'遗憾',
      text1:'你还要我怎么样',
      text2:'遗憾',
      text3:'暧昧'
    }
  }
};
</script>
<style scoped>

</style>
