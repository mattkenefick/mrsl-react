
/**
  ┌────────────────────────────────────────────────────────────────────────────┐
  │                                                                            │
  │ Global state interface                                                     │
  │                                                                            │
  │ @author Matt Kenefick <medium.com/@mattkenefick>                           │
  │ @package MRSL                                                              │
  │                                                                            │
  └────────────────────────────────────────────────────────────────────────────┘
*/
export default interface IStateGlobal
{
    [key: string]: any;
    counter?: number;
}
