import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            string: ''
        }
    }

    onUpdate = (e) => {
        const str = e.target.value;
        this.setState({string: str})
        this.props.onUpdateSearch(str)
    }
    
    render() {
        return (
            <input 
                type="text" 
                placeholder="Найти сотрудника"
                className="form-control search-input" 
                value={this.state.string}
                onChange={this.onUpdate}/>
        )
    }
}

export default SearchPanel;