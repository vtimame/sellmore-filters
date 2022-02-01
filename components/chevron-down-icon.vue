<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size.toString().trim()"
    :height="size.toString().trim()"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-chevron-down"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({ name: "ChevronDownIcon" })
export default class XIcon extends Vue {
  @Prop({ type: [String, Number], required: false, default: "24" })
  size?: string | number;
}
</script>
