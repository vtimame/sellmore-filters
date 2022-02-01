<template>
  <div class="base-input">
    <input
      class="base-input__control"
      :value="value"
      :placeholder="placeholder"
      @keypress="onKeyPress"
      @input="onInput"
    />
    <div v-if="postfix" class="base-input__postfix">{{ postfix }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  name: "BaseInput",
})
export default class BaseInput extends Vue {
  @Prop({ type: String, required: false, default: null })
  value?: string;

  @Prop({ type: String, required: false, default: null })
  placeholder?: string;

  @Prop({ type: String, required: false, default: null })
  postfix?: string;

  @Prop({ type: Boolean, required: false, default: false })
  onlyNumbers?: boolean;

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.$emit("input", value);
  }

  onKeyPress(event: KeyboardEvent): void {
    if (this.onlyNumbers && !this.testOnlyNumbersPattern(event?.key)) {
      event.preventDefault();
    }
  }

  testOnlyNumbersPattern(key?: string): boolean {
    if (!key) return true;
    return new RegExp(/\d+|Enter/g).test(key);
  }
}
</script>

<style lang="scss" scoped>
@import "open-color/open-color";

.base-input {
  display: flex;
  align-items: center;
  font-size: 13px;
  line-height: 15px;
  margin: 0 3px;
  color: $oc-gray-7;

  &__control {
    outline: none;
    border: none;
  }
}
</style>
