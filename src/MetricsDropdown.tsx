/* eslint-disable quotes */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const MetricsDropdown = () => {
    // eslint-disable-next-line prettier/prettier
    return (
        <div>
            Metrics:
            <Select options={options} />
        </div>
    );
};

export default MetricsDropdown;
