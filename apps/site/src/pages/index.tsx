import { Layout } from "../layouts/AppLayout"
import { type NextPageWithLayout } from "./_app"
import SidebarNav from "src/components/SidebarNav"
import Header from "src/components/Header"
import Canvas from "src/components/Canvas"

const HomePage: NextPageWithLayout = () => {
	return (
		<div className="grid grid-rows-[auto,1fr] grid-cols-[464px,1fr] h-screen">
			<Header />
			<main className="contents">
				<div className="flex flex-col justify-start items-center pt-[26px] bg-black">
					<SidebarNav />
				</div>

				<Canvas />
			</main>
		</div>
	)
}

HomePage.getLayout = (page) => {
	return <Layout>{page}</Layout>
}

export default HomePage
