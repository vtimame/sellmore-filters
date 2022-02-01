<template>
  <div class="base-dropdown">
    <div @click="opened = !opened">
      <slot name="trigger" :opened="opened" />
    </div>
    <div v-if="opened" class="base-dropdown__body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "BaseDropdown",
})
export default class BaseDropdown extends Vue {
  opened: boolean = false;
}
</script>

<style lang="scss" scoped>
@import "open-color/open-color";

.base-dropdown {
  position: relative;

  &__body {
    position: absolute;
    background-color: white;
    padding: 0.3rem 1rem;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
    border-radius: 5px;
    margin-top: 1px;
    left: 0;
    width: auto;
  }
}
</style>
