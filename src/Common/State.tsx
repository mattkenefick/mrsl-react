
/**
  ┌────────────────────────────────────────────────────────────────────────────┐
  │                                                                            │
  │ Global state interface                                                     │
  │                                                                            │
  └────────────────────────────────────────────────────────────────────────────┘
*/
export default interface IStateGlobal
{
    [key: string]: any;
    counter?: number;
}
