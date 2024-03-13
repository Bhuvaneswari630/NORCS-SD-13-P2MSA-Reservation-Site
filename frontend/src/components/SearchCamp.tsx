import React from "react"
interface SearchCampProps {
    onChangeHandler: any;
}
const SearchCamp: React.FC<SearchCampProps> = ({ onChangeHandler }) => {

    return (
        <input
            className='border-solid border-2 border-green-600 p-1 rounded-md'
            type='search'
            placeholder='Search'
            onChange={onChangeHandler}
        />
    )
}

export default SearchCamp