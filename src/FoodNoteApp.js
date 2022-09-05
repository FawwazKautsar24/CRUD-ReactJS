import React from 'react';
import NavbarComponent from './NavbarComponent';
import TableComponent from './TableComponent';
import InputFormComponent from './InputFormComponent';

class FoodNoteApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            foods: [],
            id: '',
            foodName: 'TESSSSS',
            deskripsiMakanan: '',
            foodPrice: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.onNamaMakananChangeEventHandler = this.onNamaMakananChangeEventHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onNamaMakananChangeEventHandler = (event) => {
        this.setState(() => {
            return {
                foodName: event.target.value
            };
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: [event.target.value],
        });
    }

    handleSubmit = (event) => {
        // mencegah terjadinya reload setelah klik submit
        event.preventDefault();

        console.log('Data-1: ', this.state);
        this.setState({
            foods: [
                ...this.state.foods,
                {
                    id: this.state.foods.length+1,
                    foodName: this.state.foodName,
                    deskripsiMakanan: this.state.deskripsiMakanan,
                    foodPrice: this.state.foodPrice,
                }
            ]
        });
    }

    render(){
        return (
            <div>
                <NavbarComponent />
                <div className='container mt-4'>
                    <TableComponent />
                    <InputFormComponent {...this.state} onNamaMakananChangeEventHandler={this.onNamaMakananChangeEventHandler} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        );
    }
}

export default FoodNoteApp;
