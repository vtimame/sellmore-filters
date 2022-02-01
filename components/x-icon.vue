<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size.toString().trim()"
    :height="size.toString().trim()"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-x"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({ name: "XIcon" })
export default class XIcon extends Vue {
  @Prop({ type: [String, Number], required: false, default: "24" })
  size?: string | number;
}
</script>
