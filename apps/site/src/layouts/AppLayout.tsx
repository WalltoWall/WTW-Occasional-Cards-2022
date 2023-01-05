interface LayoutProps {
	children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
	return <div className="font-sans">{children}</div>
}
