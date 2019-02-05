import React, {Component} from 'react';
import axios from 'axios';
import CurrencyFormat from "react-currency-format";
import {Link} from 'react-router-dom';

const BASE_URL = "http://178.128.26.170:5000/";
const link = window.location.pathname.split("/")[1];
const array = [{
    link: "malang",
    kota: "Malang",
    endpoint: "malangKotaWisata"
}, {
    link: "batu",
    kota: "Batu",
    endpoint: "batuKotaWisata"
}, {
    link: "kabupaten",
    kota: "Kab.Malang",
    endpoint: "malangKabWisata"
}];
let obj = array.find(o => o.link === link);
const link2 = window.location.pathname.split("/")[2];

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
        document.body.style.backgroundColor = "white"
    }

    componentDidMount() {
        const link3 = window.location.pathname.split("/")[1];
        const array = [{
            link: "malang",
            kota: "Malang",
            endpoint: "malangKotaWisata"
        }, {
            link: "batu",
            kota: "Batu",
            endpoint: "batuKotaWisata"
        }, {
            link: "kabupaten",
            kota: "Kab.Malang",
            endpoint: "malangKabWisata"
        }];
        let obja = array.find(o => o.link === link3);
        const link4 = window.location.pathname.split("/")[2];
        axios({
            baseURL: BASE_URL,
            url: `${obja.endpoint}/find`,
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                _id: `${link4}`
            }
        }).then(data => {
            this.setState({
                data: {...this.state.data, ...data.data.data[0]}
            })
        })
    }

    componentWillUnmount() {
        this.setState({
            data: {}
        })
    }

    render() {
        console.log(this.state.data);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-4 detailll" style={{background: "#f1a313"}}>
                        <Link to={`/` + obj.link}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#5e5e5e" width="30" height="30"
                                 viewBox="0 0 24 24">
                                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
                            </svg>
                        </Link>
                        <div className="container details">
                            <div>
                                <h3>Alamat</h3>
                                <p>{this.state.data.alamat}</p>
                            </div>
                            <div>
                                <h3>Harga Tiket</h3>
                                <p><CurrencyFormat value={this.state.data.harga_tiket}
                                                   displayType={'text'} thousandSeparator={true}
                                                   prefix={'Rp'}/></p>
                            </div>
                            <div>
                                <h3>Jam Buka</h3>
                                <p>{this.state.data.jam_buka}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8 order-sm-1 aaaa" style={{
                        backgroundImage: `url(${this.state.data.foto})`,
                        height: window.innerHeight,
                        width: window.innerWidth
                    }}>
                        <div className="overrr" style={{height: window.innerHeight, width: window.innerWidth}}>
                        </div>
                        <h1>{this.state.data.nama_destinasi}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail