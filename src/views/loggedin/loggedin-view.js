import { View, __, Sidebar, ViewManager, NavBar } from 'erste';
import MainView from '../main-view';


class LoggedInView extends View {
    constructor() {
        super();
        this.vm = new ViewManager(this);
        this.navBar = new NavBar({
            title: __('Welcome to beveteran'),
            hasMenuButton: true,
            hasBackButton: true
        });

        this.navBar.vm = this.vm;

    }

    onActivation() {
        if (cfg.PLATFORM == 'device')
            StatusBar.styleDefault();
    }

    finderButtonTap(e) {
        var finderView = new FinderView();
        finderView.vm = this.vm;
        this.vm.pull(finderView, true);
    };

    hiderButtonTap(e) {
        var hinderView = new HinderView();
        hinderView.vm = this.vm;
        this.vm.pull(hinderView, true);

    };

    get events() {
        return {
            'tap': {
                '.finder': this.finderButtonTap,
                '.hider': this.hiderButtonTap,

            }
        }
    }

    template() {
        return `
 <div>
        <view class="navbar">
    ${this.navBar}
    </view>
        <div class="logedin">
        <div class="imgcontainer">
                <img src="static/img/logo.png" alt="Avatar" class="logo">
        </div>
        <div class="buttons">
            <button type="button" class="hider"> be a hider verteran</button>
            <button type="button" class="finder"> be a finder verteran</button>
        </div>   

</div>
        </div>
`;
    }
}

module.exports = LoggedInView;