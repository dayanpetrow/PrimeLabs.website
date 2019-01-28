import React from 'react';
import { StyledHomeReviewsWrapper } from './styledHomeReviews'
import { SectionTitle } from '../../common/';
import Carousel from 'antd/lib/carousel'
import dayan from '../../../images/team/dayan.jpg'
import SlideLeftButton from '../../../images/svgs/carouselArrowLeft.svg';
import SlideRightButton from '../../../images/svgs/carouselArrowRight.svg';

class HomeReviews extends React.Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToSlide = this.goToSlide.bind(this);
        this.state = {
            currentSlide: 0,
        };
    }

    next() {
        this.carousel.next();
    }

    previous() {
        this.carousel.prev();
    }

    goToSlide(number) {
        this.carousel.goTo(number, false);
    }

    render() {
        const { currentSlide } = this.state;
        return (
            <StyledHomeReviewsWrapper>
                <SectionTitle mainText={"Satisfied Clients"} shadowText={"Reviews"} />
                <div className="HomeReviews__Carousel-wrapper">
                    <Carousel
                        dots={false}
                        ref={(node) => { this.carousel = node; }}
                        afterChange={(current) => {
                            this.setState({
                                currentSlide: current,
                            });
                        }}
                        autoplay={true}
                        autoplaySpeed={10000}
                        draggable={true}
                    >
                        {Reviews.map((review,index) => (
                            <Review data={review} key={index} goPrevious={this.previous} goNext={this.next} />
                        ))}
                    </Carousel>
                </div>
                <div className="Carousel__dot-navigation">
                    {Reviews.map((review, index) => {
                        const buttonClass = 
                            currentSlide === index
                              ? 'Carousel__dot-navigation__item active-slide'
                              : 'Carousel__dot-navigation__item'
                          
                            return (
                                <button 
                                    key={index} 
                                    className={buttonClass}
                                    onClick={() => this.goToSlide(index)}
                                />
                            )
                    })}
                </div>
            </StyledHomeReviewsWrapper>
        )
    }
}

const Reviews = [
    {
        image: dayan,
        name: "Dayan Petrow",
        text: `Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna.
        Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus
        lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. Donec quis ornare lacus.`,
        position: "Communication director"
    },
    {
        image: dayan,
        name: "Dayan Petrow",
        text: `Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna.
        Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus
        lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. Donec quis ornare lacus.`,
        position: "Communication director"
    },
    {
        image: dayan,
        name: "Dayan Petrow",
        text: `Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna.
        Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus
        lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. Donec quis ornare lacus.`,
        position: "Communication director"
    }
]

const Review = ({ data, goNext, goPrevious }) => (
    <div className="Carousel__Slide-wrapper">
        <div className="Carousel__Slide-flex">
            <div className="Carousel__Slide-flex--left">
                <button className="Carousel__slide-button" onClick={goPrevious}>
                    <img src={SlideLeftButton} alt={"Review"} />
                </button>
            </div>
            <div className="Carousel__Slide-flex--middle">
                <div className="Carousel__Slide-flex__image">
                    <img src={data.image} alt={"Review"} />
                </div>
            </div>
            <div className="Carousel__Slide-flex--right">
                <button className="Carousel__slide-button" onClick={goNext}>
                    <img src={SlideRightButton} alt={"Review"} />
                </button>
            </div>
        </div>
        <div className="Carousel__Slide-content-wrapper">
            <div className="Carousel__Slide-name">
                {data.name}
            </div>
            <hr className="Carousel__Slide-separator" />
            <div className="Carousel__Slide-text">
                {data.text}
            </div>
            <div className="Carousel__Slide-position">
                {data.position}
            </div>
        </div>
    </div>
)

export default HomeReviews;