import { Layout } from "../layouts/AppLayout"
import { type NextPageWithLayout } from "./_app"
import Search from "src/components/Icons/Search"
import Header from "src/components/Icons/Header"

const HomePage: NextPageWithLayout = () => {
	return (
		<div className="grid grid-rows-[auto,1fr] grid-cols-[464px,1fr] h-screen">
			<header className="flex flex-col justify-end text-center col-span-2 bg-header">
				<div className="flex items-center justify-center py-[18px]">
					<Header />
				</div>
				<div className="bg-orange-400 w-full h-4" />
				<div className="bg-yellow-300 w-full h-4" />
			</header>
			<main className="contents">
				<div className="flex flex-col justify-start items-center pt-[26px] bg-black">
					<div className="space-x-10 h-[50px] flex overflow-x-auto max-w-full px-10">
						<button className="py-[8px] px-[40px] rounded-full bg-yellow-400 uppercase font-semibold flex-shrink-0">
							Playlist
						</button>
						<button className="text-white font-bold text-[20px] uppercase flex-shrink-0">
							Customize
						</button>
						<button className="text-white font-bold text-[20px] uppercase flex-shrink-0">
							Customize
						</button>
					</div>
					<div className="flex items-center justify-between rounded-full bg-white w-[406px] h-[50px] mt-[26px]">
						<p className="text-gray-400 pl-6 text-[20px]">Search</p>
						<Search />
					</div>
				</div>

				<div className="flex items-center justify-center bg-white">
					<div className="w-[500px] h-[250px] border-2 border-gray-500 bg-gray-300" />
				</div>
			</main>
		</div>
	)
}

HomePage.getLayout = (page) => {
	return <Layout>{page}</Layout>
}

export default HomePage
