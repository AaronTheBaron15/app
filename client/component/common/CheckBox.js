import React from 'react';
import classnames from 'classnames';

const CheckBox = ({ field, value, label, error, type, onChange, }) => {
    return (
        <div className={classnames('form-check', { 'has-error': error})}>
            <label className="control-label">{label}</label>
                <div>
                    <input   
                        onChange={onChange}
                        value={value}
                        type={type}
                        name={field}
                        className="form-check"
                    />
                </div>
        {error && <span className="help-block">{error}</span>}
        </div>   );
    }

    CheckBox.PropTypes = {
        field: React.PropTypes.string.isRequired,
        value: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        error: React.PropTypes.string,
        type: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
    }

    // CheckBox.defaultProps = {
    //     type: 'text'
    // }


export default CheckBox;