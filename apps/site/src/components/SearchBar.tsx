import React from "react"
import Search from "./Icons/Search"

const SearchBar = () => {
	return (
		<div className="flex items-center justify-between rounded-full bg-white w-[406px] h-[50px] mt-[26px]">
			<input
				placeholder="Search"
				type="text"
				className="text-gray-400 text-[20px] font-medium outline-none border-none ml-2 rounded-full focus:ring-0"
			/>
			<button onClick={() => {}}>
				<Search />
			</button>
		</div>
	)
}

export default SearchBar
