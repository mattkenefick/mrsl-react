
import CommonVueComponent from '../../Common/VueComponent';
import Props from '../../Common/Props';
import State from '../../Common/State';
import Template from './App';
import './App.css';

/**
  ┌────────────────────────────────────────────────────────────────────────────┐
  │                                                                            │
  │ Page/App/Index                                                             │
  │                                                                            │
  │ @author Matt Kenefick <medium.com/@mattkenefick>                           │
  │ @package MRSL                                                              │
  │                                                                            │
  └────────────────────────────────────────────────────────────────────────────┘
*/
export default class App extends CommonVueComponent<Props, State>
{
    /**
     * Default properties
     *
     * @type Object
     */
    public static defaultProps: Props = {
        title: 'This is a default property.',
    };

    /**
     * Bind functions to self
     *
     * @type string[]
     */
    protected bindings: string[] = [
        'Handle_OnInterval',
    ];

    /**
     * Reference for our interval
     *
     * @type number
     */
    private interval: number = 0;

    /**
     * Reference for our interval
     *
     * @type number
     */
    private intervalDuration: number = 250;

    /**
     * @return void
     */
    public mounted(): void {
        super.mounted();

        // Start interval
        this.start();
    }

    /**
     * @return void
     */
    public beforeDestroy(): void {
        super.beforeDestroy();

        // Stop interval
        this.stop();
    }

    /**
     * @return void
     */
    public render() {
        return Template.call(this, this);
    }

    /**
     * @return void
     */
    public start(): void {
        this.interval = window.setInterval(this.Handle_OnInterval, this.intervalDuration);
    }

    /**
     * @return void
     */
    public stop(): void {
        clearInterval(this.interval);
        this.interval = 0;
    }


    // region: Event Handlers
    // -------------------------------------------------------------------------

    protected Handle_OnInterval(): void {
        this.setState({
            counter: Date.now()
        });
    }

    // endregion: Event Handlers
}
