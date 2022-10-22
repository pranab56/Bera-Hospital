import React from 'react';
import { Helmet } from 'react-helmet-async';

const Helmetjs = ({helmet}) => {
    return (
        <div>
            <Helmet>
                <title>{helmet}-Bera Hospital</title>
            </Helmet>
        </div>
    );
};

export default Helmetjs;