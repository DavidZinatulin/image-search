import * as React from "react";
import 'app/sass/components/Elements/Form.scss';

const Form = ({ structure, values, onUpdate, onSubmit }) => {
    const updateField = (e) => {
        onUpdate(structure.name, e.target.name, e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSubmit(structure.name);
        }
    };

    const renderFormField = (field) => {
        const { name, type } = field;

        switch (type) {
            case 'textfield':
                return <input
                    type="text"
                    className="form-control"
                    name={name}
                    value={values[name]}
                    onChange={updateField}
                />;
        }
    };

    return (
        <div className="form" onKeyPress={handleKeyPress}>
            {structure.fields.map((item, key) => (
                <div key={key}>{renderFormField(item)}</div>
            ))}
        </div>
    );
};

export default Form;