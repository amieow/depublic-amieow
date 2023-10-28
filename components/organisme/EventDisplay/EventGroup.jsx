"use client";
import BigCardEvent from "@/components/atoms/BigCardEvent";
import { Swiper, SwiperSlide } from "swiper/react";
import { ControllerSwipperWithTitle } from "./ControllerSwiperWithTitle";
import "swiper/css";
import SmallCardEvent from "@/components/atoms/SmallCardEvent";
function EventGroup({ data, title, rootLink }) {
	const ControllerProps = {
		title,
		rootLink,
	};
	return (
		<>
			<ControllerSwipperWithTitle {...ControllerProps} />
			<Swiper
				className="container"
				spaceBetween={20}
				grabCursor={true}
				slidesPerView={"auto"}>
				{data.map((item, i) => (
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
