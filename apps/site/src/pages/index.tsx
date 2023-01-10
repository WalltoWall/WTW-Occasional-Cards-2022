import { Layout } from "../layouts/AppLayout"
import { type NextPageWithLayout } from "./_app"
import SidebarNav from "src/components/SidebarNav"
import { Header } from "src/components/Header"
import Canvas from "src/components/Canvas"
import { Greeting } from "src/components/Greeting"

const HomePage: NextPageWithLayout = () => {
	return (
		<>
			<div className="flex flex-col h-100dvh overflow-hidden">
				<Header className="shrink-0" />

				<main className="contents lg:flex lg:flex-row-reverse lg:grow">
					<Canvas className="grow" />
					<SidebarNav className="h-[300px] shrink-0 lg:h-auto" />
				</main>
			</div>

			<Greeting />
		</>
	)
}

HomePage.getLayout = (page) => {
	return <Layout>{page}</Layout>
}

export default HomePage
