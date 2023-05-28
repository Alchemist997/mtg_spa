import React from 'react';
import { WatchProps, WatchState } from './types.';

class Watch extends React.Component<WatchProps, WatchState> {
    constructor(props: WatchProps) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.setState({
            intervalID: setInterval(() => { this.setState({ date: new Date() }); }, 1000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalID as NodeJS.Timeout);
    }


    render() {
        return (
            <div className='watch'>{this.state.date.toLocaleTimeString('en-GB')}</div>
        );
    }
}

export default Watch;