import { Layout } from "../layouts/AppLayout"
import { type NextPageWithLayout } from "./_app"
import SidebarNav from "src/components/SidebarNav"
import { Header } from "src/components/Header"
import Canvas from "src/components/Canvas"
import { Greeting } from "src/components/Greeting"
import { getCookie, setCookie } from "cookies-next"
import { randomUUID } from "crypto"
import { GetServerSidePropsContext } from "next"

const HomePage: NextPageWithLayout = () => {
	return (
		<>
			<div className="flex flex-col h-100dvh overflow-hidden lg:overflow-auto">
				<Header className="shrink-0" />

				<main className="contents lg:flex lg:flex-row-reverse lg:grow">
					<Canvas className="grow" />
					<SidebarNav className="h-[320px] shrink-0 lg:h-auto lg:w-[464px]" />
				</main>
			</div>

			<Greeting />
		</>
	)
}

HomePage.getLayout = (page) => {
	return <Layout>{page}</Layout>
}

export async function getServerSideProps({
	req,
	res,
}: GetServerSidePropsContext) {
	const userId = getCookie("userId", { req, res, httpOnly: true })

	if (!userId) {
		const newUserId = randomUUID()
		setCookie("userId", newUserId, {
			req,
			res,
			maxAge: 2147483647,
			httpOnly: true,
		})
	}
	return { props: {} }
}

export default HomePage
