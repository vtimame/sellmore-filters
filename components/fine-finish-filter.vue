<template>
  <div class="dropdown-filter">
    <base-dropdown>
      <template #trigger="{ opened }">
        <base-dropdown-trigger label="Отделка" :opened="opened">
          <!--          <tag label="test" closable />-->
        </base-dropdown-trigger>
      </template>
      <base-checkbox
        v-for="item in controls"
        :key="item.value"
        :checkbox="item"
        :checked="value.includes(item.value)"
        @input="onCheckboxInput(item, $event)"
      />
    </base-dropdown>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import BaseDropdown from "~/components/base-dropdown.vue";
import BaseInputWrapper from "~/components/base-input-wrapper.vue";
import Tag from "~/components/tag.vue";
import BaseDropdownTrigger from "~/components/base-dropdown-trigger.vue";
import { CheckboxItem } from "~/interfaces/checkbox-item";
import BaseCheckbox from "~/components/base-checkbox.vue";

@Component({
  name: "FineFinishFilter",
  components: {
    BaseCheckbox,
    BaseDropdownTrigger,
    Tag,
    BaseInputWrapper,
    BaseDropdown,
  },
})
export default class FineFinishFilter extends Vue {
  @Prop({ type: Array as () => CheckboxItem[], required: true })
  controls!: CheckboxItem[];

  @Prop({ type: Array, required: true })
  value!: string[];

  onCheckboxInput(item: CheckboxItem): void {
    this.$emit("input", item.value);
  }
}
</script>
