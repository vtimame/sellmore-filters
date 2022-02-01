<template>
  <div class="tag" :class="{ 'tag--active': active }" @click="$emit('click')">
    <span>{{ label }}</span>
    <div v-if="closable" class="tag__close-icon" @click.stop="$emit('close')">
      <x-icon size="13" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import XIcon from "~/components/x-icon.vue";

@Component({
  name: "Tag",
  components: { XIcon },
})
export default class Tag extends Vue {
  @Prop({ type: String, required: true })
  label!: string;

  @Prop({ type: Boolean, required: false, default: false })
  active?: boolean;

  @Prop({ type: Boolean, required: false, default: false })
  closable?: boolean;
}
</script>

<style lang="scss" scoped>
@import "open-color/open-color";

.tag {
  color: $oc-gray-7;
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  margin: 0 3px;
  font-size: 13px;
  line-height: 13px;
  border-radius: 5px;
  transition: background-color 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: $oc-gray-1;
  }

  &--active,
  &:hover {
    background-color: $oc-blue-0;
  }

  &__close-icon {
    width: 13px;
    height: 13px;
    margin-left: 5px;
  }
}
</style>
