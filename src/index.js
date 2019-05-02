import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { Home }   from './components/Home';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeLink: "Home",
            //adding something to trigger unmount lifecycle hook,
            homeMounted: true, 
        }
    }

    onGreet() {
        alert('Hello!');
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted,
        });
    }

    render() {
        let homeCmp = "";
        if(this.state.homeMounted) {
            homeCmp = ( 
                        <Home  
                            name={"Max"} 
                            initialAge={27} 
                            greet={() => this.onGreet()}
                            changeLink={(name) => this.onChangeLinkName(name)}
                            initialLinkName={this.state.homeLink}
                            />
                        );
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        {homeCmp} 
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <button className="btn btn-warning" onClick={() => this.onChangeHomeMounted()}>(Un)mount home component</button>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);