
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
        title: 'Hey there!',
    };

    /**
     * @return void
     */
    public mounted(): void {
        super.mounted();

        setInterval(() => {
            this.setState({
                counter: Date.now()
            });
        }, 1000);
    }

    /**
     * @return void
     */
    public render() {
        return Template.call(this, this);
    }
}
