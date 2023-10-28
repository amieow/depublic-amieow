"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { ControllerSwipperWithTitle } from "./ControllerSwiperWithTitle";
import "swiper/css";
import SmallCardEvent from "@/components/atoms/SmallCardEvent";
function BlogGroup({ data, title, rootLink }) {
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
						<SmallCardEvent
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
