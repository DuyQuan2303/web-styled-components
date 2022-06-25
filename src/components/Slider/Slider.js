import React, { useRef } from "react"
import { Button } from "../../globalStyles"
import useSlider from "../Slider/hooks/useSlider"
import { FeatureText, FeatureTitle, SliderContent, SliderFeature, SliderSec , SliderButton} from "./Slider.element"
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
const Slider = ({ images, opacity }) => {
  const slideImage = useRef(null)
  const slideText = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(
    slideImage,
    slideText,
    images
  )

  return (
    <SliderSec className="slider" ref={slideImage}>
      <SliderContent className="slider--content ">
        <SliderButton onClick={goToPreviousSlide} className="slider__btn-left wow slideInLeft">
          <AiOutlineLeft/>
        </SliderButton>
        <SliderFeature className="slider--feature">
          <FeatureTitle className="feature--title wow fadeInUp">BUSSINESS AGENCY</FeatureTitle>
          <FeatureText ref={slideText} className="feature--text wow fadeInUp"></FeatureText>
          <Button className="feature__btn wow fadeInUp" opacity={opacity}>Get started</Button>
        </SliderFeature>
        <SliderButton onClick={goToNextSlide} className="slider__btn-right wow slideInRight">
          <AiOutlineRight/>
        </SliderButton>
      </SliderContent>
    </SliderSec>
  )
}

export default Slider