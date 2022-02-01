<template>
  <div class="index-page">
    <div>
      <div class="index-page__filters-container">
        <div class="index-page__filter">
          <tags-filter
            :value="roomsSelected"
            :controls="roomControls"
            @input="onRoomsInput"
          />
        </div>
        <div class="index-page__filter">
          <range-filter
            :value="squareRange"
            left-postfix="—"
            right-postfix="м²"
            left-placeholder="Площадь от"
            right-placeholder="до"
            @input="onRangeInput"
          />
        </div>
        <div class="index-page__filter">
          <fine-finish-filter
            :value="fineFinish"
            :controls="fineFinishControls"
            @input="onFineFinishInput"
          />
        </div>
      </div>
      <div>
        <div>rooms: {{ roomsSelected }}</div>
        <div>fine finish: {{ fineFinish }}</div>
        <div>square range: {{ squareRange }}</div>
      </div>
    </div>
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
import FineFinishFilter from "~/components/fine-finish-filter.vue";
import { CheckboxItem } from "~/interfaces/checkbox-item";

@Component({
  components: {
    FineFinishFilter,
    RangeFilter,
    TagsFilter,
    BaseInputWrapper,
    Tag,
  },
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

  fineFinishControls: CheckboxItem[] = [
    {
      label: "чистовая",
      value: "with_finish",
      description: "отделка стен и пола + сантехника",
    },
    {
      label: "без отделки",
      value: "without_finish",
      description: "без разводки коммуникаций и стяжки пола",
    },
  ];

  get roomsSelected(): string[] {
    return this.$store.getters["rooms"];
  }

  get squareRange(): RangeValues {
    return this.$store.getters["square"];
  }

  get fineFinish(): string[] {
    return this.$store.getters["fineFinish"];
  }

  onFineFinishInput(value: string): void {
    this.$store.commit(
      this.fineFinish.includes(value)
        ? "DELETE_FINE_FINISH_ITEM"
        : "PUSH_FINE_FINISH_ITEM",
      value
    );
  }

  onRoomsInput(value: string): void {
    this.$store.commit(
      this.roomsSelected.includes(value)
        ? "DELETE_ROOM_ITEM"
        : "PUSH_ROOM_ITEM",
      value
    );
  }

  onRangeInput(range: RangeValues): void {
    this.$store.commit("SET_SQUARE", range);
  }
}
</script>

<style lang="scss" scoped>
@import "open-color/open-color";

.index-page {
  background-color: $oc-gray-0;
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &__filter {
    margin: 0 0.5rem;
  }

  &__filters-container {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
}
</style>
