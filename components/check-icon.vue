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
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({ name: "CheckIcon" })
export default class CheckIcon extends Vue {
  @Prop({ type: [String, Number], required: false, default: "24" })
  size?: string | number;
}
</script>
