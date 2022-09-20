export namespace StoreState {
  export interface Settings {
    darkMode: boolean;
    myName: string;
  }

  export type TodoItem = {
    id: string;
    checked: boolean;
    label: string;
    createdAt: Date;
    updatedAt: Date;
  };

  export interface Todo {
    list: TodoItem[];
  }
}
