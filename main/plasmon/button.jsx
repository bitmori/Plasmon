import React from 'react';
import classNames from 'classnames';

const BUTTON_SIZE = ['large', 'normal', 'mini'];

const BUTTON_TYPE = [
    'default',
    'primary',
    'positive',
    'negative',
    'warning'
];

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // class
        let className = classNames(
            'btn',
            this.props.size ? `btn-${this.props.size}`:'',
            this.props.type ? `btn-${this.props.type}`:'',
            this.props.className
        );
        return <button className={className}>{this.props.children}</button>;
    }
}

Button.displayName = 'Button';

Button.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    size: React.PropTypes.oneOf(BUTTON_SIZE),
    type: React.PropTypes.oneOf(BUTTON_TYPE)
};

Button.defaultProps = {
    type: 'default'
};
