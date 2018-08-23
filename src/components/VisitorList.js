import React, { Component} from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { submitForm, setCurrentUser } from '../actions';

class VisitorList extends Component {

    renderVisitors(list) {
        return list.map(user => {
            return (
                <tr className='row' onClick={() => this.props.setCurrentUser(user)} key={user.name}>
                    <td>{user.name} {user.surname}</td>
                    <td>{user.country.value}</td>
                    <td>{moment(user.birthday).format('DD/MM/YYYY')}</td>
                </tr>
            );
        });
    }

    render() {
        const { users } = this.props;
        if (!users.length) {
            return <div className='hidden'></div>
        }

        return (
            <div className='userList-box'>
                <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>COUNTRY</th>
                            <th>BIRTHDAY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderVisitors(users)}
                    </tbody>
                </table>
            </div>
        );
    };
};

function mapStateToProps({ visitors }) {
    return { users: visitors.users };
}

export default connect(mapStateToProps, {submitForm, setCurrentUser})(VisitorList);
