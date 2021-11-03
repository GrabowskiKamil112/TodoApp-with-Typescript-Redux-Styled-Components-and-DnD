export interface IAddItem {
    type: 'ADD_ITEM';
    payload: string;
}
export interface IRemoveItem {
    type: 'REMOVE_ITEM';
    payload: string;
}
export interface IRemoveCompleted {
    type: 'REMOVE_COMPLETED';
}
export interface IChangeCompletion {
    type: 'CHANGE_COMPLETION';
    payload: string;
}
export enum ActionType {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    REMOVE_COMPLETED = 'REMOVE_COMPLETED',
    CHANGE_COMPLETION = 'CHANGE_COMPLETION',
}

export type Action = IAddItem | IRemoveItem | IChangeCompletion | IRemoveCompleted;

export const addItem = (item: string): Action => ({
    type: ActionType.ADD_ITEM,
    payload: item,
});
export const removeItem = (item: string): Action => ({
    type: ActionType.REMOVE_ITEM,
    payload: item,
});
export const changeCompletion = (item: string): Action => ({
    type: ActionType.CHANGE_COMPLETION,
    payload: item,
});
export const removeCompleted = (): Action => ({
    type: ActionType.REMOVE_COMPLETED,
});
