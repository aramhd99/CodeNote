import React, { Fragment } from 'react';

import Navbar from './Navbar'
import { propTypes } from 'react-bootstrap/esm/Image';

const Layout = props => (
    <Fragment>
        <Navbar />
        {props.children}
    </Fragment>
)

export default Layout;