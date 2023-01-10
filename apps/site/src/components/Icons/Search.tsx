import React from "react"

const Search = (props: React.ComponentProps<"svg">) => {
	return (
		<div className="bg-yellow-search rounded-full p-[8px] border-2 border-black m-1">
			<svg
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				{...props}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
				/>
			</svg>
		</div>
	)
}

export default Search
