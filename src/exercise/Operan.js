import React from 'react';

class Operan extends React.Component {
    render(){
        const {makanannx, onGantiMakanan} = this.props;
        return (
            <div>
                {/* <h2>Operan State yang menjadi Props: {this.props.makanannx}</h2> */}
                <h2>Operan State yang menjadi Props: {makanannx}</h2>
                {/* <button onClick={() => this.onGantiMakanan('Sosis')}>Ganti Makanan</button> */}
                {/* pakai THIS.PROPS -> setelah dikasih akses State */}
                {/* <button onClick={() => this.props.onGantiMakanan('Sosis')}>Ganti Makanan (Props yg Sudah dikasih akses ubah)</button> */}
                <button onClick={() => onGantiMakanan('Sosis')}>Ganti Makanan (Props yg Sudah dikasih akses ubah)</button>
            </div>
        );
    }
}

export default Operan;
