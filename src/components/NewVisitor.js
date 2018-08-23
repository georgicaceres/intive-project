import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { connect } from 'react-redux';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {formatDate, parseDate} from 'react-day-picker/moment';
import { updateForm, submitForm, submitInvalid } from '../actions';

class NewVisitor extends Component {
    constructor(props) {
        super();
        this.state = {countries: []};
    };

    componentDidMount() {
        return axios.get(`http://restcountries.eu/rest/v2/all`)
            .then(({data}) => this.setState({
                countries: data.map(country => ({label: country.name, value: country.name}))
            }))
            .catch(console.error);
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.allValid()) {
            this.props.submitForm(this.props.form);
        } else {
            this.props.submitInvalid();
        }
    };

    getErrorMessage(field) {
        const value = this.props.form[field];
        if (!value) return ' This field is required!';
        return null;
    }

    allValid() {
        return ['name', 'surname', 'country', 'birthday'].every(
            field => !this.getErrorMessage(field)
        );
    }

    render() {
        const selectStyles = {
            placeholder: styles => ({ ...styles, color: '#8C8C8C'}),
            control: styles => ({
                ...styles,
                borderStyle: "none",
                backgroundColor: "transparent",
            }),
        };
        const {form, updateForm} = this.props;
        const showErrors = form.showErrors;
        return (
            <form className='container-form' onSubmit={this.onSubmit.bind(this)}>
                <span className='form-title'>
                    Please, fill with your info!
                </span>

                <div className='field-box'>
                    <label className='label-input' htmlFor='name'>
                        Name
                        <span className='error'>{showErrors && this.getErrorMessage('name')}</span>
                    </label>
                    <input
                        className='form-input'
                        name='name'
                        type='text'
                        placeholder='Name'
                        value={form.name || ''}
                        onChange={name => updateForm('name', name.target.value)}
                    />
                    <span className='focus-input'></span>
                </div>

                <div className='field-box'>
                    <label className='label-input' htmlFor='surname'>
                        Surname
                        <span className='error'>{showErrors && this.getErrorMessage('surname')}</span>
                    </label>
                    <input
                        className='form-input'
                        name='surname'
                        type='text'
                        placeholder='Surname'
                        value={form.surname || ''}
                        onChange={surname => updateForm('surname', surname.target.value)}
                    />
                    <span className='focus-input'></span>
                </div>

                <div className='field-box'>
                    <label className='label-input' htmlFor="">
                        Country
                        <span className='focus-input'></span>
                        <span className='error'>{showErrors && this.getErrorMessage('country')}</span>
                    </label>
                    <div className='select-box'>
                        <Select
                            className='form-select'
                            placeholder='Choose a country...'
                            styles={selectStyles}
                            options={this.state.countries}
                            value={form.country || null}
                            maxMenuHeight={150}
                            onChange={country => updateForm('country', country)}
                        />
                    </div>
                    <span className='focus-input'></span>
                </div>

                <div className='field-box'>
                    <label className='label-input' htmlFor='birthday'>
                        Birthday
                        <span className='error'>{showErrors && this.getErrorMessage('birthday')}</span>
                    </label>
                    <DayPickerInput
                        inputProps={{className:'form-input'}}
                        value={form.birthday || ''}
                        placeholder='MM/DD/YYYY'
                        formatDate={formatDate}
                        parseDate={parseDate}
                        onDayChange={(selectedDay, modifiers) => {
                            if (selectedDay) {
                                updateForm('birthday', selectedDay)
                            }
                        }}
                        dayPickerProps={{
                            selectedDays: form.birthday,
                        }}
                    />
                    <span className='focus-input'></span>
                </div>

                <div className='container-btn'>
                    <button className='form-btn' type='submit'>
                        Save
                    </button>
                </div>

            </form>
        )
    }
}

function mapStateToProps(state) {
    return {form: state.form};
}

export default connect(mapStateToProps, { updateForm, submitInvalid, submitForm })(NewVisitor);
