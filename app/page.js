import Divider from "@/components/atoms/ui/divider";
import BlogGroup from "@/components/organisme/EventDisplay/BlogGroup";
import EventGroup from "@/components/organisme/EventDisplay/EventGroup";
import RootFooter from "@/components/organisme/RootFooter";
import BannerHome from "@/components/organisme/home/BannerHome";
import Hero from "@/components/organisme/home/hero";
import { BLOG_CONTENT_DISPLAY } from "@/contents/BlogContent";
import { UPCOMING_EVENT_CONTENT_BANNER } from "@/contents/UpcomingEventContent";

export default function Home() {
	return (
		<>
			<main className="min-h-screen container px-0 bg-surface-200">
				<Hero />
				<Divider />
				<BannerHome />
				<section className="pb-10 flex flex-col gap-5 pt-[60px]">
					<EventGroup
						title={"Upcoming Event"}
						rootLink={"/ticket"}
						data={UPCOMING_EVENT_CONTENT_BANNER}
					/>
				</section>
				<Divider />
				<section className="pb-20 flex flex-col gap-5 pt-[60px]">
					<BlogGroup
						data={BLOG_CONTENT_DISPLAY}
						title={"Popular Blog"}
						rootLink={"/blog"}
					/>
				</section>
			</main>
			<RootFooter />
		</>
	);
}
