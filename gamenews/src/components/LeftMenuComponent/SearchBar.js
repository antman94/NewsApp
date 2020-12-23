import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchSearchGames } from '../../redux/actions/games'
import SearchIcon from '@material-ui/icons/Search';

class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: ''
        };
    }

    onInputChange = (e) => {
        const { value } = e.target;

        this.setState({
            inputValue: value
        }, () => {
            if ( this.state.inputValue.length > 3 ) {
                this.props.fetchSearchGames(this.state.inputValue)
            }
        })
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

const mapStateToProps = (state) => { 
    return {
    }
}
const mapDispatchToProps = { 
    fetchSearchGames 
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)

  

