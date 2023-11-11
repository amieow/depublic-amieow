import Divider from "@/components/atoms/ui/divider";
import BlogGroup from "@/components/organisme/EventDisplay/BlogGroup";
import EventGroup from "@/components/organisme/EventDisplay/EventGroup";
import RootFooter from "@/components/organisme/RootFooter";
import BannerHome from "@/components/organisme/home/BannerHome";
import Hero from "@/components/organisme/home/hero";
import { BLOG_CONTENT_DISPLAY } from "@/contents/BlogContent";
import { UPCOMING_EVENT_CONTENT_BANNER } from "@/contents/UpcomingEventContent";
import SliderEventProvider from "@/context/sliderEventProvider";

export default function Home() {
	return (
		<>
			<main className="min-h-screen container px-0 bg-surface-200">
				<Hero />
				<Divider />
				<BannerHome />

				<SliderEventProvider
					title={"Upcoming Event"}
					rootLink={"/ticket"}
					data={UPCOMING_EVENT_CONTENT_BANNER}>
					<section className="pb-10 flex flex-col gap-5 pt-[60px]">
						<EventGroup />
					</section>
				</SliderEventProvider>
				<Divider />
				<SliderEventProvider
					data={BLOG_CONTENT_DISPLAY}
					title={"Popular Blog"}
					rootLink={"/blog"}>
					<section className="pb-20 flex flex-col gap-5 pt-[60px]">
						<BlogGroup
							data={BLOG_CONTENT_DISPLAY}
							title={"Popular Blog"}
							rootLink={"/blog"}
						/>
					</section>
				</SliderEventProvider>
			</main>
			<RootFooter />
		</>
	);
}
