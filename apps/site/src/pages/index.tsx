import Image from "next/image"
import { Layout } from "../layouts/AppLayout"
import { type NextPageWithLayout } from "./_app"
import logo from "../../public/Header.png"

const HomePage: NextPageWithLayout = () => {
	return (

			<div className="grid grid-rows-[auto,1fr] grid-cols-[400px,1fr] h-screen">
				<header className="flex flex-col justify-end text-center col-span-2 bg-teal-300">
					<div className="flex items-center justify-center py-[18px]">

					<Image src={logo} alt="WTW Occasional Cards 2022" className="h-[153px] w-[789px] "/>
					</div>
					<div className="bg-orange-400 w-full h-4"/>
					<div className="bg-yellow-300 w-full h-4"/>
				</header>
				<main className="contents">

				<div className="flex justify-center items-start pt-4 bg-black">
					<button className="py-[8px] px-[40px] rounded-full bg-yellow-400 uppercase font-semibold ">Playlist</button>
				</div>

				<div className="flex items-center justify-center bg-white">
					<div className="w-[500px] h-[250px] border-2 border-gray-500 bg-gray-300"/>
				</div>
				</main>
			</div>
)
}

HomePage.getLayout = (page) => {
	return <Layout>{page}</Layout>
}

export default HomePage
