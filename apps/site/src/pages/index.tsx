import { Layout } from "../layouts/AppLayout"
import { type NextPageWithLayout } from "./_app"
import SidebarNav from "src/components/SidebarNav"
import { Header } from "src/components/Header"
import Canvas from "src/components/Canvas"
import Greeting from "src/components/Greeting"

const HomePage: NextPageWithLayout = () => {
	return (
		<div className="grid grid-rows-[auto,1fr,1fr] lg:grid-rows-[auto,1fr] lg:grid-cols-[464px,1fr] h-100dvh">
			<Header className="lg:col-span-2" />

			<main className="contents">
				<SidebarNav />
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
