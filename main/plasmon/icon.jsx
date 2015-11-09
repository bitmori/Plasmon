import React from 'react';
import classNames from 'classnames';
import {iconsDef, validNames, icons} from './icon_def';

export default class Icon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // classes
        let className = classNames(
            'icon',
            icons[this.props.icon].className,
            this.props.className
        );
        return <span className={className}/>;
    }
}

Icon.displayName = 'Icon';

Icon.propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.oneOf(validNames),
    type: React.PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning'])
};
