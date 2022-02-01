import { GetterTree, MutationTree } from "vuex";
import { RangeValues } from "~/interfaces/range-values";

export interface State {
  _rooms: string[];
  _square: RangeValues;
  _fineFinish: string[];
}

export const state = (): State => ({
  _rooms: [],
  _fineFinish: ["with_finish"],
  _square: {
    from: "",
    to: "",
  },
});

export const getters: GetterTree<State, State> = {
  rooms: (state): string[] => state._rooms,
  square: (state): RangeValues => state._square,
  fineFinish: (state): string[] => state._fineFinish,
};

export const mutations: MutationTree<State> = {
  PUSH_ROOM_ITEM: (state, value) =>
    (state._rooms = state._rooms.concat([value])),
  DELETE_ROOM_ITEM: (state, value) =>
    (state._rooms = state._rooms.filter((r) => r !== value)),
  PUSH_FINE_FINISH_ITEM: (state, value) =>
    (state._fineFinish = state._fineFinish.concat([value])),
  DELETE_FINE_FINISH_ITEM: (state, value) =>
    (state._fineFinish = state._fineFinish.filter((r) => r !== value)),
  SET_SQUARE: (state, range) => (state._square = range),
};
