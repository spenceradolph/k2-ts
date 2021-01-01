import { NavLink, Route, Switch } from 'react-router-dom';

interface Props {
    unauthenticate: any;
}

export const Navbar = ({ unauthenticate }: Props) => {
    return (
        <>
            <Switch>
                <Route exact path="/" render={() => <h1>Island Rush V2.7.0</h1>} />
                <Route exact path="/troubleshoot" render={() => <h1>Island Rush Troubleshoot</h1>} />
                <Route exact path="/credits" render={() => <h1>Island Rush Credits</h1>} />
                <Route exact path="/teacher" render={() => <h1>Island Rush Teacher</h1>} />
                <Route exact path="/courseDirector" render={() => <h1>Island Rush Course Director</h1>} />
                <Route exact path="*" render={() => <h1>Island Rush 404</h1>} />
            </Switch>
            <nav style={{ overflow: 'auto' }}>
                <NavLink
                    onClick={() => {
                        unauthenticate();
                    }}
                    exact
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    onClick={() => {
                        unauthenticate();
                    }}
                    exact
                    to="/troubleshoot"
                >
                    Troubleshoot
                </NavLink>
                <NavLink
                    onClick={() => {
                        unauthenticate();
                    }}
                    exact
                    to="/credits"
                >
                    Credits
                </NavLink>
                <a href="https://gitreports.com/issue/island-rush/K2" rel="noreferrer" target="_blank" style={{ float: 'right' }}>
                    Report an Issue
                </a>
                <a href="https://github.com/island-rush/K2/wiki" rel="noreferrer" target="_blank" style={{ float: 'right' }}>
                    Wiki
                </a>
            </nav>
        </>
    );
};
