"use client";
import { createContext, useContext, useState } from "react";

const SliderContext = createContext();

export default function sliderEventProvider({
	data,
	title,
	rootLink,
	children,
}) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [useSwiper, setSwiper] = useState(null);
	if (!data || !title || !rootLink) {
		return Error("data or title or rootLink is missing");
	}
	const isButtonDisabled = (type) => {
		if (useSwiper) {
			if (type == "next") {
				return useSwiper.isEnd;
			} else if (type == "prev") {
				return useSwiper.isBeginning;
			}
		}
		return false;
	};
	const handleSlideChange = (swiper) => {
		setActiveIndex(swiper.activeIndex);
	};

	const handleSlideActive = (index) => {
		if (useSwiper) {
			useSwiper.slideTo(index);
		}
	};
	const ControllerProps = {
		title,
		rootLink,
		activeIndex,
		handleSlideActive,
		isButtonDisabled,
	};
	const SwiperProps = {
		className: "container",
		spaceBetween: 20,
		grabCursor: true,
		onSlideChange: handleSlideChange,
		slidesPerView: "auto",
		onSwiper: setSwiper,
	};

	return (
		<SliderContext.Provider
			value={{ ControllerProps, SwiperProps, data, title, rootLink }}>
			{children}
		</SliderContext.Provider>
	);
}

export const useSliderEvents = () => {
	return useContext(SliderContext);
};
