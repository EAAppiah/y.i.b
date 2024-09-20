import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import HelpToday from "@/components/HelpToday";
import AboutUs from "@/components/AboutUs";
import FeaturedCauses from "@/components/FeaturedCauses";
import HelpNow from "@/components/HelpNow";
import ImpactSection from "@/components/ImpactSection";
import InstagramSection from "@/components/InstagramSection";

export default function Home() {
	return (
		<div>
			<Hero />
			<VisionMission />
			<HelpToday />
			<AboutUs />
			<FeaturedCauses />
			<HelpNow />
			<ImpactSection />
			<InstagramSection />
		</div>
	);
}
