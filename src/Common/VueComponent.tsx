
import CommonComponent from './Component';


/**
  ┌────────────────────────────────────────────────────────────────────────────┐
  │                                                                            │
  │ Common/VueComponent.tsx                                                    │
  │                                                                            │
  │ This plays with the idea of creating an interface between some React       │
  │ component styles with Vue components.                                      │
  │                                                                            │
  │ Since we're butchering the web here anyway, we might as well go all-in 🤷🏻‍♂️  │
  │                                                                            │
  │ @author Matt Kenefick <medium.com/@mattkenefick>                           │
  │ @package MRSL                                                              │
  │ @see https://v3.vuejs.org/api/options-lifecycle-hooks.html                 │
  │ @see https://reactjs.org/docs/state-and-lifecycle.html                     │
  │                                                                            │
  └────────────────────────────────────────────────────────────────────────────┘
*/
export default class CommonVueComponent<T, TT> extends CommonComponent<T, TT>
{
    // region: Vue Component Methods
    // -------------------------------------------------------------------------

    /**
     * @return void
     */
    public mounted(): void {
        // Not implemented
    }

    /**
     * @return void
     */
    public beforeDestroy(): void {
        // Not implemented
    }

    // endregion: Vue Component Methods


    // region: React Component Methods
    // -------------------------------------------------------------------------

    /**
     * @return void
     */
    public componentDidMount(): void {
        super.componentDidMount();

        return this.mounted();
    }

    /**
     * @return void
     */
    public componentWillUnmount(): void {
        super.componentWillUnmount();

        return this.beforeDestroy();
    }

    // endregion: React Component Methods
}
