import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { path } from '../../../utils';
import { FormattedMessage } from 'react-intl';
import "./HomeHeader.scss"
import logo from '../../../assets/images/bookingcare-2020.svg';
class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }

    render() {

        console.log(this.props)
        return (
            <>
                <div className='home-header-container'>



                    <div className=' logo'>
                        <div className='nav'>

                            <i class=" fas fa-bars"></i>
                        </div>
                        <img class="bt-dautrang" height="40" width="160" src={logo} alt="BookingCare/"></img>

                    </div>


                    <ul className='list-service'>
                        <li>
                            <Link> <FormattedMessage id="homeHeader.specialist"></FormattedMessage></Link>
                            <span><FormattedMessage id="homeHeader.searchDoctor" /> </span>
                        </li>
                        <li> <Link>Cơ Sở Y Tế</Link><span>Chọn bệnh viện phòng khám</span></li>
                        <li><Link>Bác Sĩ</Link> <span>Chọn bác sĩ giỏi</span></li>
                        <li><Link>Gói Khám </Link><span>Khám sức khỏe tổng quát</span></li>
                    </ul>


                    <div className=' suport'>
                        <span> <i class="fas fa-question-circle"></i> Hỗ Trợ</span>
                        <span className="phone" >024-7301-2468</span>
                    </div>
                    <div className='changeLanguage'>
                        <div className='VN'> VN</div>
                        <div className='EN'> EN</div>

                    </div>
                    <Link to={path.LOGIN}>

                        <div className='login btn btn-assign'>
                            Đăng Nhập
                        </div>
                    </Link>


                </div >

            </>
        );
    }

}

const mapStateToProps = state => {
    return {

        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    }
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
// dâc cau