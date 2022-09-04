import React from 'react';

const makanan = [
    {
        nama: 'Nasi Goreng',
        harga: 14000,
    },
    {
        nama: 'Nasi Kuning',
        harga: 5000,
    },
    {
        nama: 'Mie Goreng',
        harga: 11000,
    },
    {
        nama: 'Soto Ayam',
        harga: 9000,
    },
];

// reduce
const total_bayar = makanan.reduce((t_bayar, makanan) => {
    return t_bayar + makanan.harga;
}, 0);

const Map_2 = () => {
    return (
        <div>
            <h2>Map</h2>
            {/* <ul>    
                <li>{makanan[0].nama} {makanan[0].harga}</li>
                <li>{makanan[1].nama} {makanan[1].harga}</li>
                <li>{makanan[2].nama} {makanan[2].harga}</li>
                <li>{makanan[3].nama} {makanan[3].harga}</li>
            </ul> */}
            <h2>Materi Map Sederhana</h2>
            <ul>
                {makanan.map((mknn, i) => (
                    <li>{i+1}. {mknn.nama} {mknn.harga}</li>
                ))}
            </ul>
            
            <h2>Makanan yang lebih dari Rp. 10,000</h2>
            <ul>
                {makanan
                .filter((makanan) => makanan.harga >= 10000)
                .map((mknn, i) => (
                    <li>{i+1}. {mknn.nama} {mknn.harga}</li>
                ))}
            </ul>

            <h3>Total: Rp. {total_bayar}</h3>
        </div>
    );
}

export default Map_2;
