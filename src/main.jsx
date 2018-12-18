import "@babel/polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "app/redux/store";
import "app/sass/main.scss";
import App from "app/components/Pages/App";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <div className="app">
            <App/>
        </div>
    </Provider>,
    document.getElementById('root')
);
