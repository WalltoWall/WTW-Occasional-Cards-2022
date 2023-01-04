import { Layout } from "../layouts/AppLayout"
import { type NextPageWithLayout } from "./_app"

const HomePage: NextPageWithLayout = () => {
	return <section>Home</section>
}

HomePage.getLayout = (page) => {
	return <Layout>{page}</Layout>
}

export default HomePage
