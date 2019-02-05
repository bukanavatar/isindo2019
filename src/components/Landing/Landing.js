import React, {Component} from 'react';
import Slider from 'react-slick';
import {Container} from 'reactstrap';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bg: 1,
            link: "malang",
        }
    }

    render() {
        const array = ["batu", "malang", "kabupaten"];
        const settings = {
            centerMode: true,
            focusOnSelect: true,
            infinite: false,
            autoPlay: true,
            autoplaySpeed: 1000,
            slidesToShow: 1,
            initialSlide: 1,
            centerPadding: "500px",
            arrows: false,
            dots: false,
            beforeChange: (current, next) => {
                const element = document.getElementById("bgSlider");
                element.classList.remove("fadeIn");
                element.classList.add("fadeOut");
                setTimeout(() => {
                    element.classList.remove("fadeOut");
                    element.classList.add("fadeIn");
                    this.setState({
                        bg: next,
                        link: array[next]
                    })
                }, 420)
            },
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        centerPadding: "300px"
                    }
                },
                {
                    breakpoint: 412,
                    settings: {
                        centerPadding: "70px"
                    }
                }
            ]
        };
        document.body.style.backgroundColor = "black";
        console.log(this.state.link);
        const nama = ["Kota Batu", "Malang", "Kab.Malang"];
        return (
            <div>
                <div className="backgroundOverlay" style={{width: window.innerWidth, height: window.innerHeight}}>

                </div>
                <div id="bgSlider" className="animated backgroundSlider" style={{
                    width: window.innerWidth,
                    height: window.innerHeight,
                    backgroundImage: `url(${require(`../../assets/images/slider/${this.state.bg}.jpg`)})`
                }}>

                </div>
                <div className="containerSlider">
                    <Container className="textLanding">
                        <h4>Malang Raya</h4>
                        <p>Malang Raya adalah tempat wisata yang wajib dikunjungi. Terdiri
                            dari <span>Kota Malang</span>, <span>Kota Batu</span>,
                            dan <span>Kabupaten Malang</span> Disini Anda dapat mencari desitansi wisata menarik yang
                            ada di Malang Raya</p>
                        <h6>Aku ingin ke..</h6>
                    </Container>
                    <Slider {...settings} >
                        {nama.map((a, i) => {
                            return (
                                <div className="anuuu" key={i}>
                                    {a}
                                </div>
                            )
                        })}
                    </Slider>
                    <Container className="buttonLanding">
                        <Link to={this.state.link}>
                            <button className="btn btn-outline-warning">
                                Lihat Destinasi
                            </button>
                        </Link>
                    </Container>
                </div>
            </div>
        );
    }
}

Container.propTypes = {
    fluid: PropTypes.bool
    // applies .container-fluid class
};

export default Landing