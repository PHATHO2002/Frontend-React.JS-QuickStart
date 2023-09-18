import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { path } from '../../utils';
import HomeHeader from './HomeHeader';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }

    render() {


        return (
            <div className='home-container'>
                <HomeHeader></HomeHeader>

                <div>this is my home boys</div>

            </div>
        );
    }

}

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
// dâc cau