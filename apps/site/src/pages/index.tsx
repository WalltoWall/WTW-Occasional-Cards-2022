import { Layout } from "../layouts/AppLayout"
import { type NextPageWithLayout } from "./_app"
import SidebarNav from "src/components/SidebarNav"
import Header from "src/components/Header"
import Canvas from "src/components/Canvas"
import Greeting from "src/components/Greeting"

const HomePage: NextPageWithLayout = () => {
	return (
		<div className="grid grid-rows-[auto, 1fr, 1fr] lg:grid-rows-[auto,1fr] lg:grid-cols-[464px,1fr] h-screen max-w-screen-2xl">
			<Header />
			<main className="contents">
				<div className="flex flex-col justify-start items-center pt-[26px] bg-black">
					<SidebarNav />
				</div>

				<Canvas />
			</main>
			<Greeting />
		</div>
	)
}

HomePage.getLayout = (page) => {
	return <Layout>{page}</Layout>
}

export default HomePage
