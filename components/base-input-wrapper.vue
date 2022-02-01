<template>
  <div class="base-input-wrapper" :style="{ padding }">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  name: "BaseInputWrapper",
})
export default class BaseInputWrapper extends Vue {
  @Prop({ type: String, required: false, default: "5px" })
  padding!: string;
}
</script>

<style lang="scss" scoped>
@import "open-color/open-color";

.base-input-wrapper {
  display: inline-flex;
  align-items: center;
  border: 1px solid $oc-gray-3;
  border-radius: 5px;
  transition: 0.15s ease-in-out;

  &:hover {
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
    // box-shadow: inset 0 4px 4px 0 rgba(0,0,0,.05)!important;
  }
}
</style>
