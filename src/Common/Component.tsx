
import React from 'react';

/**
  ┌────────────────────────────────────────────────────────────────────────────┐
  │                                                                            │
  │ Common/Component.tsx                                                       │
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
}
