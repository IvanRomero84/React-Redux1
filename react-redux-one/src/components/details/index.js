import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import findCurrentItem from '../../redux/actions/findCurrentItem'

class Details extends Component {
    componentDidMount() {
        this.props.findCurrentItem(parseInt(this.props.match.params.itemId))
    }

    render() {
        const { currentItem } = this.props;

        //console.log(details)

        return (
            <Page
                currentItem={currentItem}
                goTo={(path) => {
                    this.props.history.push(path);
                }}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        currentItem: state.currentItem,
    }
}

const mapDispachToProps = {
    findCurrentItem,
}

export default withRouter(
    connect(mapStateToProps, mapDispachToProps)(Details)
);