import React, {Component} from 'react';
import Navbar from "../Navbar";
import axios from 'axios'
import {Link} from "react-router-dom";

const BASE_URL = "http://178.128.26.170:5000/";

class Destination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destinasi: [],
            loading: true,
            kota: "",
            gambar: 0,
        }
    }

    componentDidMount() {
        const link = window.location.pathname;
        const array = [{
            link: "/malang",
            kota: "Malang",
            gambar: "1",
            endpoint: "malangKotaWisata"
        }, {
            link: "/batu",
            kota: "Batu",
            gambar: "0",
            endpoint: "batuKotaWisata"
        }, {
            link: "/kabupaten",
            kota: "Kab.Malang",
            gambar: "2",
            endpoint: "malangKabWisata"
        }];
        let obj = array.find(o => o.link === link);
        console.log(obj.endpoint);
        console.log(link);
        axios.get(`${BASE_URL}${obj.endpoint}/list`)
            .then(data => {
                console.log(data.data);
                this.setState({
                    destinasi: this.state.destinasi.concat(data.data.data),
                    loading: false,
                    kota: obj.kota,
                    gambar: obj.gambar
                })
            })
    }

    render() {
        document.body.style.overflowX = "hidden";
        const destinasi = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const css = {
            height: window.innerWidth,
            width: window.innerHeight,
            transform: `rotate(-90deg) translateY(${-1 * window.innerHeight - 21}px)`,
            zIndex: 99
        };
        if (this.state.loading) {
            return (
                <div>
                    Loading
                </div>
            )
        } else {
            return (
                <div>
                    <div style={{position: "relative", top: 0, zIndex: 99}}>
                        <Navbar/>
                    </div>
                    <div style={{width: window.innerWidth, height: window.innerHeight, zIndex: -20}}>
                        <div className="bgSlider" style={{width: window.innerWidth, height: window.innerHeight}}>
                        </div>
                        <div className="bgDestinasi" style={{
                            width: window.innerWidth,
                            height: window.innerHeight,
                            backgroundImage: `url(${require(`../../assets/images/slider/${this.state.gambar}.jpg`)})`
                        }}>
                        </div>
                    </div>
                    <div style={{width: window.innerWidth, height: window.innerHeight, zIndex: 99}}>
                        <h1 className="judulDestinasi">{this.state.kota}</h1>
                    </div>
                    <div style={{position: "absolute", top: 0, zIndex: 30}}>
                        <div className="horizontalScroll squares" style={css}>
                            <div>
                                aaaaa
                            </div>
                            <div>
                                aaaaa
                            </div>
                            {this.state.destinasi.map((a, i) => {
                                return (
                                    <div>
                                        <section className="isinya">
                                            <section className="bgnya" style={{backgroundImage: `url(${a.foto})`}}>

                                            </section>
                                            <h1>{a.nama_destinasi}</h1>
                                            <button className="btn btn-outline-warning">
                                                <Link to={window.location.pathname + `/${a._id}`} className="nav-link">
                                                    Detail
                                                </Link>
                                            </button>
                                        </section>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default Destination