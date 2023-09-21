import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { path } from '../../../utils';
import logo from '../../../assets/images/bookingcare-2020.svg';
import './HomeBody.scss'
class HomeBody extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }

    render() {


        return (
            <div className='home-body-container'>

                <div className='home-body-banner'>
                    <div className='title-banner'>
                        <p>Nền tảng y tế </p>
                        <b>chăm sóc sức khỏe toàn diện</b>
                    </div>

                    <div className='search'>
                        <i class="search-icon fa-solid fa-magnifying-glass"></i>
                        <input className="search-input" type="text" placeholder="Tìm lý do khám" />
                    </div>
                    <div className='options'>
                        <ul>
                            <li>
                                <div>
                                    <i class="fas fa-yin-yang"></i>
                                </div>
                                <p>
                                    Khám <br /> Chuyên Khoa
                                </p>
                            </li>
                            <li>
                                <div><i class="fas fa-yen-sign"></i></div>
                                <p>
                                    Khám <br /> Từ xa
                                </p>
                            </li>
                            <li>
                                <div>
                                    <i class="fas fa-x-ray"></i>
                                </div>
                                <p>
                                    Khám <br /> Tổng quát
                                </p>
                            </li>
                            <li>
                                <div>
                                    <i class="fas fa-wrench"></i>
                                </div>
                                <p>
                                    Xét nghiệm <br /> Y học
                                </p>
                            </li>
                            <li>
                                <div>
                                    <i class="fas fa-wine-bottle"></i>
                                </div>
                                <p>
                                    Sức khoẻ <br /> tinh thần
                                </p>
                            </li>


                        </ul>
                    </div>
                </div>
            </div >
        );
    }

}

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeBody);
// dâc cau