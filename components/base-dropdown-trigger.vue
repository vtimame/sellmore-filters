<template>
  <div class="base-dropdown-trigger">
    <base-input-wrapper>
      <div class="base-dropdown-trigger__container" :style="{ width }">
        <div v-if="!$slots.default" class="base-dropdown-trigger__label">
          {{ label }}
        </div>
        <div v-else>
          <slot />
        </div>
        <div class="base-dropdown-trigger__icon">
          <component
            :is="opened ? 'chevron-up-icon' : 'chevron-down-icon'"
            size="15"
          />
        </div>
      </div>
    </base-input-wrapper>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import BaseInputWrapper from "~/components/base-input-wrapper.vue";
import ChevronDownIcon from "~/components/chevron-down-icon.vue";
import ChevronUpIcon from "~/components/chevron-up-icon.vue";

@Component({
  name: "BaseDropdownTrigger",
  components: { ChevronUpIcon, ChevronDownIcon, BaseInputWrapper },
})
export default class BaseDropdownTrigger extends Vue {
  @Prop({ type: String, required: false, default: "300px" })
  width?: string;

  @Prop({ type: String, required: true })
  label!: string;

  @Prop({ type: Boolean, required: false, default: false })
  opened?: boolean;
}
</script>

<style lang="scss" scoped>
.base-dropdown-trigger {
  cursor: pointer;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__label {
    font-size: 13px;
    line-height: 13px;
    padding: 0.25rem 0.5rem;
  }

  &__icon {
    width: 20px;
    height: 15px;
  }
}
</style>
