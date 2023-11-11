"use client";
import BigCardEvent from "@/components/atoms/BigCardEvent";
import { Swiper, SwiperSlide } from "swiper/react";
import { ControllerSwipperWithTitle } from "./ControllerSwiperWithTitle";
import "swiper/css";
import { useSliderEvents } from "@/context/sliderEventProvider";
function EventGroup() {
	const useContext = useSliderEvents();
	return (
		<>
			<ControllerSwipperWithTitle {...useContext.ControllerProps} />
			<Swiper {...useContext.SwiperProps}>
				{useContext.data.map((item, i) => (
					<SwiperSlide key={i}>
						<BigCardEvent
							key={i}
							{...item}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

export default EventGroup;
