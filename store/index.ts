import { GetterTree, MutationTree } from "vuex";
import { RangeValues } from "~/interfaces/range-values";
import Vue from "vue";

export interface State {
  _rooms: string[];
  _square: RangeValues;
}

export const state = (): State => ({
  _rooms: [],
  _square: {
    from: "",
    to: "",
  },
});

export const getters: GetterTree<State, State> = {
  rooms: (state): string[] => state._rooms,
  square: (state): RangeValues => state._square,
};

export const mutations: MutationTree<State> = {
  PUSH_ROOM: (state, value) => (state._rooms = state._rooms.concat([value])),
  DELETE_ROOM: (state, value) =>
    (state._rooms = state._rooms.filter((r) => r !== value)),
  SET_SQUARE: (state, range) => Vue.set(state, "_square", range),
};
