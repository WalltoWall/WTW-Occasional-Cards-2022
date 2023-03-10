import createBundleAnalyzer from "@next/bundle-analyzer"

const withBundleAnalyzer = createBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
})

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
	swcMinify: true,
	reactStrictMode: true,
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "i.scdn.co",
			},
		],
	},
	experimental: {
		newNextLinkBehavior: true,
		scrollRestoration: true,
		legacyBrowsers: false,
		browsersListForSwc: true,
		images: { allowFutureImage: true },
	},
}

export default withBundleAnalyzer(nextConfig)
