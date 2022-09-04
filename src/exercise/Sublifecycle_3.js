import React from 'react';

class Sublifecycle_3 extends React.Component{
    componentWillUnmount(){
        this.props.ubahMakanan('Sate II-b');
    }
    
    render(){
        return (
            <div>
                <h2>Component: Sub LifeCycle</h2>
            </div>
        );
    }
}

export default Sublifecycle_3;
