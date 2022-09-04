import React from 'react';
import Operan from './Operan';

class StateProps extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            makanan: 'Bakso'
        }
    }

    // onGantiMakanan(makanan_baru) -> jika seperti ini tidak terbaca
    onGantiMakanan = (makanan_baru) => {
        this.setState({ 
            makanan: makanan_baru 
        });
    }

    render(){
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                {/* <button onClick={() => this.setState({ makanan:'Sosis' })}>Ganti Makanan</button> */}
                <button onClick={() => this.onGantiMakanan('Sotong')}>Ganti Makanan (State)</button>

                <Operan makanannx={this.state.makanan} onGantiMakanan={this.onGantiMakanan} />
            </div>
        );
    }
}

export default StateProps;
