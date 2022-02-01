<template>
  <div class="range-filter">
    <base-input-wrapper padding="7px">
      <base-input
        :value="value.from"
        :placeholder="leftPlaceholder"
        :postfix="leftPostfix"
        only-numbers
        @input="onLeftInput"
      />
      <base-input
        :value="value.to"
        :placeholder="rightPlaceholder"
        :postfix="rightPostfix"
        only-numbers
        @input="onRightInput"
      />
    </base-input-wrapper>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import BaseInput from "~/components/base-input.vue";
import BaseInputWrapper from "~/components/base-input-wrapper.vue";
import { RangeValues } from "~/interfaces/range-values";

@Component({
  components: { BaseInput, BaseInputWrapper },
})
export default class RangeFilter extends Vue {
  @Prop({ type: Object as () => RangeValues, required: true })
  value!: RangeValues;

  @Prop({ type: String, required: false, default: null })
  leftPlaceholder?: string;

  @Prop({ type: String, required: false, default: null })
  rightPlaceholder?: string;

  @Prop({ type: String, required: false, default: null })
  leftPostfix?: string;

  @Prop({ type: String, required: false, default: null })
  rightPostfix?: string;

  onLeftInput(from: string): void {
    this.$emit("input", {
      ...this.value,
      from,
    });
  }

  onRightInput(to: string): void {
    this.$emit("input", {
      ...this.value,
      to,
    });
  }
}
</script>
