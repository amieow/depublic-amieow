"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { ControllerSwipperWithTitle } from "./ControllerSwiperWithTitle";
import "swiper/css";
import BlogCard from "@/components/atoms/BlogCard";
import { useSliderEvents } from "@/context/sliderEventProvider";
function BlogGroup() {
	const useContext = useSliderEvents();
	return (
		<>
			<ControllerSwipperWithTitle {...useContext.ControllerProps} />
			<Swiper {...useContext.SwiperProps}>
				{useContext.data.map((item, i) => (
					<SwiperSlide key={i}>
						<BlogCard
							key={i}
							{...item}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

export default BlogGroup;
