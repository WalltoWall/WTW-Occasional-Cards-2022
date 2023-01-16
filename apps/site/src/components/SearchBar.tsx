/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react"
import Search from "./Icons/Search"

const SearchBar = ({ ...props }: React.ComponentProps<"input">) => {
	return (
		<div className="flex items-center justify-between rounded-full bg-white mt-[26px]">
			<input
				placeholder="Search"
				type="text"
				className="text-20 outline-none border-none ml-2 rounded-full focus:ring-0 text-black"
				{...props}
			/>
			<button onClick={() => {}}>
				<Search className="w-5 text-black" />
			</button>
		</div>
	)
}

export default SearchBar
