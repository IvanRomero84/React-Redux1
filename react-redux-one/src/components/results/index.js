import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';

class Results extends Component {
    render() {
        const { results } = this.props;

        console.log(results)

        return (
            <Page
                results={results}
                goTo={(path) => {
                    this.props.history.push(path);
                }}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        results: state.results,
    }
}
// --Asi nos saltamos ambos pasos y lo hacemos todo en la exportación-- 
//const wrapper = connect(mapStateToProps)
//const component = wrapper(Results)

export default withRouter(
    connect(mapStateToProps)(Results)
);