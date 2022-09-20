import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { StoreState } from '../types/StoreState';

const initialState: StoreState.Todo = {
  list: [],
};

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (
      state,
      action: PayloadAction<{ label?: string; checked?: boolean }>,
    ) => {
      const id = nanoid();
      const now = new Date();
      const { label, checked } = action.payload;
      state.list = [
        ...state.list,
        {
          id,
          label: label ?? '',
          checked: checked ?? false,
          createdAt: now,
          updatedAt: now,
        },
      ];
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.list = state.list.filter(item => item.id !== id);
    },
    update: (
      state,
      action: PayloadAction<{ id: string; label?: string; checked?: boolean }>,
    ) => {
      const { id, label, checked } = action.payload;
      const selectItem = state.list.find(item => item.id === id);
      if (!selectItem) return;
      if (label) selectItem.label = label;
      if (checked) selectItem.checked = checked;
    },
  },
});

export const { add, remove, update } = slice.actions;
export default slice.reducer;
