import React from 'react';

const BAR_TYPES = ['header', 'footer'];

// <Bar type='header' title='plasmon'></Bar>
export default class Bar extends React.Component {
    //_bind(...methods) {
    //    methods.forEach( (method) => this[method] = this[method].bind(this) );
    //}
    constructor(props) {
        super(props);
        this.state = {};
    }

    //componentWillMount() {}
    //componentWillUnmount() {}

    render() {
        let innerPart = this.props.type === 'header'?
            (<header className='toolbar toolbar-header'>
                <h1 className="title">{this.props.title}</h1>
                {this.props.children}
            </header>):
            (<footer className='toolbar toolbar-footer'>
                <h1 className="title">{this.props.title}</h1>
                {this.props.children}
            </footer>);
        return innerPart;
    }
}

Bar.displayName = 'Bar';

Bar.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.element || React.PropTypes.component,
    title: React.PropTypes.string,
    type: React.PropTypes.oneOf(BAR_TYPES).isRequired
};

Bar.defaultProps = {
    type: 'default'
};
