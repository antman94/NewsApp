import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';

class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange = (e) => {
        const { value } = e.target;

        this.setState({
            inputValue: value
        });
    }

    render() {
        const { inputValue } = this.state;

        return (
            <div className='search-bar'>
                <SearchIcon className='search-icon'/>
                <div className='input-wrapper'>
                    <input
                        className='search-input'
                        type='text'
                        onChange={this.onInputChange}
                        value={inputValue}
                        spellCheck={false}
                    />
                    <span className='input-highlight'>
                        { inputValue.replace(/ /g, "\u00a0") }
                    </span>
                </div>
            </div>
        )
    }
}

export default SearchBar;