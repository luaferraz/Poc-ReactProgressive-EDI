import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TheMonster } from './components/TheMonster';
const App = () => {
   return _jsx(HelmetProvider, {
    children: _jsxs("div", Object.assign({ className: "app" }, {
        children: [
        _jsx(Helmet, Object.assign({ titleTemplate: "%s | Code of Frankenstein" }, {
            children: _jsx("title", { children: "Dotnet-React" }, void 0)
        }), void 0),
        _jsx(Router, Object.assign({ basename: "/app" }, {
            children: _jsx(Switch, {
            children: _jsx(Route, Object.assign({ path: "/the-monster" }, {
                children: _jsx(TheMonster, {}, void 0)
            }), void 0)
            }, void 0)
        }), void 0)
        ]
    }), void 0)
    }, void 0);
};
export default hot(App);
