<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div class="about">
      about
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  }
})
</script>

<style lang="scss" scoped>
.about{
  color:$themeColor
}
</style>