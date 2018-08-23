import React, { Component} from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import { submitForm } from '../actions';

class Greeting extends Component {
    render() {
        const { user } = this.props;
        if (!user) {
            return <div className='greeting-box'></div>
        }
        const birthday = moment(user.birthday, 'YYYY-MM-DD');
        const years = moment().diff(birthday, 'years') + 1;

        return (
            <div className='greeting-box'>
                <p>
                    {'Hello '}
                    <span className='userName'>
                        {`${user.name.toUpperCase()} ${user.surname.toUpperCase()}`}
                    </span>
                    {` from ${user.country.value}, on ${birthday.format("D of MMMM")} `}
                    {`you will have ${years}!`}
                </p>
            </div>
        );
    };
};

function mapStateToProps({ visitors }) {
    return { user: visitors.currentUser };
}

export default connect(mapStateToProps, { submitForm })(Greeting);
