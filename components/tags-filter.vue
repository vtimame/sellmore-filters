<template>
  <base-input-wrapper>
    <tag
      v-for="item in controls"
      :key="item.value"
      :label="item.label"
      :active="value.includes(item.value)"
      @click="$emit('input', item.value)"
    />
  </base-input-wrapper>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { RoomsControlsItem } from "~/interfaces/rooms-controls-item";
import BaseInputWrapper from "~/components/base-input-wrapper.vue";
import Tag from "~/components/tag.vue";

@Component({
  name: "TagsFilter",
  components: { Tag, BaseInputWrapper },
})
export default class TagsFilter extends Vue {
  @Prop({ type: Array, required: true })
  controls!: RoomsControlsItem[];

  @Prop({ type: Array, required: true })
  value!: string[];
}
</script>
