<template>
  <div class="index-page">
    <div class="index-page__filters-container">
      <tags-filter
        :value="roomsSelected"
        :controls="roomControls"
        @input="onRoomsInput"
      />
      <range-filter
        :value="squareRange"
        left-postfix="—"
        right-postfix="м²"
        left-placeholder="Площадь от"
        right-placeholder="до"
        @input="onRangeInput"
      />
    </div>
    {{ roomsSelected }}
    {{ squareRange }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Tag from "~/components/tag.vue";
import BaseInputWrapper from "~/components/base-input-wrapper.vue";
import { RoomsControlsItem } from "~/interfaces/rooms-controls-item";
import TagsFilter from "~/components/tags-filter.vue";
import RangeFilter from "~/components/range-filter.vue";
import { RangeValues } from "~/interfaces/range-values";

@Component({
  components: { RangeFilter, TagsFilter, BaseInputWrapper, Tag },
})
export default class IndexPage extends Vue {
  roomControls: RoomsControlsItem[] = [
    { label: "Студия", value: "studio" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4+", value: "4+" },
    { label: "своб. план", value: "open" },
  ];

  get roomsSelected(): string[] {
    return this.$store.getters["rooms"];
  }

  get squareRange(): RangeValues {
    return this.$store.getters["square"];
  }

  onRoomsInput(value: string): void {
    this.$store.commit(
      this.roomsSelected.includes(value) ? "DELETE_ROOM" : "PUSH_ROOM",
      value
    );
  }

  onRangeInput(range: RangeValues): void {
    this.$store.commit("SET_SQUARE", range);
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  padding: 1rem;

  &__filters-container {
    display: flex;
    align-items: center;
  }
}
</style>
