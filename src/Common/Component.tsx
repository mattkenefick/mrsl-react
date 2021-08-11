
import React from 'react';

/**
  ┌────────────────────────────────────────────────────────────────────────────┐
  │                                                                            │
  │ Common/Component.tsx                                                       │
  │                                                                            │
  │ This is the root level component that higher level component classes       │
  │ should extend; like a PageBase or ViewBase.                                │
  │                                                                            │
  │ It (will) provides core functionality and general abstractions that        │
  │ will be easy to manage; for instance bindings and event management.        │
  │                                                                            │
  │ By extending this, you have access to:                                     │
  │                                                                            │
  │     protected bindings: string[] = [                                       │
  │         'Handle_OnClick',                                                  │
  │         'Handle_OnFetchSuccess',                                           │
  │         ...                                                                │
  │     ];                                                                     │
  │                                                                            │
  │ ...which will automatically bind their scope to the class.                 │
  │                                                                            │
  │ It also has abstractions for `attachEvents` and `detachEvents` which is    │
  │ good practice for ensuring you don't scatter your DOM listeners.           │
  │                                                                            │
  │ @author Matt Kenefick <medium.com/@mattkenefick>                           │
  │ @package MRSL                                                              │
  │                                                                            │
  └────────────────────────────────────────────────────────────────────────────┘
*/
export default class CommonComponent<T, TT> extends React.Component<T, TT>
{
    /**
     * Default properties
     *
     * @todo We should properly be defining this type
     *       The issue is that this property is `static` whereas the generic T
     *       is passed to the instance so they're unaware of each other.
     *
     * @type object
     */
    public static defaultProps: any = {
        name: 'CommonComponent',
    };

    /**
     * Create new state object
     *
     * @type TT
     */
    public state: TT = {} as TT;

    /**
     * Automatic function bindings
     *
     * @type string[]
     */
    protected bindings: string[] = [];

    /**
     * @todo   Set type of context
     *
     * @param  T props
     * @param  Context context
     * @return void
     */
    constructor(props: T, context: any = {}) {
        super(props, context);
    }

    /**
     * @return void
     */
    public componentDidMount(): void {
        // Bind functions
        this.bind(...this.bindings);

        // Attach events
        this.attachEvents();
    }

    /**
     * @return void
     */
    public componentWillUnmount(): void {
        this.detachEvents();
    }

    /**
     * Function where we should attach events to objects
     *
     * @return void
     */
    public attachEvents(): void {
        // Not implemented
    }

    /**
     * Function where we should detach events from objects
     *
     * @return void
     */
    public detachEvents(): void {
        // Not implemented
    }

    /**
     * List of functions to bind to class
     * @param string[] functionName
     * @return void
     */
    public bind(...functionName: string[]): void {
        // @ts-ignore
        functionName.forEach((name: string) => this[name] = this[name].bind(this));
    }
}
