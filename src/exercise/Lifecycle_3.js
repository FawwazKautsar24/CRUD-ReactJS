import React from 'react';
import Sublifecycle_3 from './Sublifecycle_3';

class Lifecycle_3 extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            makanan: 'Bakso I',
            data: {},
            tampilSubPage: false
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data: json
                })
            });
    }

    ubahMakanan(new_food){
        this.setState({
            makanan: new_food
            // makanan: 'Sosis II-a'
        })
    }
    
    render(){
        return (
            <div>
                {/* console.log(`hasil: ${this.state.data}`) */}
                {/* console.log('hasil: ', this.state.data) */}
                <h2>{this.state.data.title}</h2>

                <h2>{this.state.makanan}</h2>
                {/* <button onClick={() => this.setState({makanan: 'Nasi'})}>Ubah Makanan</button> */}

                {this.state.tampilSubPage && <Sublifecycle_3 ubahMakanan={(value) => this.ubahMakanan(value)} />}
                <button onClick={() => this.setState({ tampilSubPage: !this.state.tampilSubPage })}>Tampilkan Halaman Sub</button>
            </div>
        );
    }
}

export default Lifecycle_3;
