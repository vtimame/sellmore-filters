<template>
  <div class="base-checkbox">
    <!--    <input-->
    <!--      type="checkbox"-->
    <!--      :checked="checked"-->
    <!--      :value="checked"-->
    <!--      @input="$emit('input', $event.target.value)"-->
    <!--    />-->
    <div class="base-checkbox__control" @click="$emit('input', !checked)">
      <check-icon v-if="checked" size="14" />
    </div>
    <div class="base-checkbox__meta">
      <div class="base-checkbox__label">{{ checkbox.label }}</div>
      <div v-if="checkbox.description" class="base-checkbox__description">
        {{ checkbox.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { CheckboxItem } from "~/interfaces/checkbox-item";
import CheckIcon from "~/components/check-icon.vue";

@Component({
  name: "BaseCheckbox",
  components: { CheckIcon },
})
export default class BaseCheckbox extends Vue {
  @Prop({ type: Object as () => CheckboxItem, required: true })
  checkbox!: CheckboxItem;

  @Prop({ type: Boolean, required: false, default: false })
  checked!: boolean;
}
</script>

<style lang="scss" scoped>
@import "open-color/open-color";

.base-checkbox {
  display: flex;
  align-items: flex-start;

  &__meta {
    margin-left: 5px;
  }

  &__label,
  &__description {
    font-size: 14px;
  }

  &__label {
    color: $oc-gray-8;
  }

  &__description {
    font-weight: 300;
    color: $oc-gray-5;
  }

  &__control {
    width: 15px;
    height: 15px;
    border-radius: 3px;
    border: 1px solid $oc-gray-3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
