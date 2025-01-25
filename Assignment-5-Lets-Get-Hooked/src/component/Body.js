import { RestaurantCard, restaurantList } from "./config";
import { useState } from "react";

function filterData(searchInput, restaurants) {
    const filterData = restaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    return filterData;
}

const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchInput, setSearchInput] = useState();
    return (
        <>
        <div className = "search-container">
            <input 
            type="text"
            className = "search-input"
            placeholder = "Search for restaurants"
            value= {searchInput} 
            onChange = {(e) => 
                setSearchInput(e.target.value)}
               />
            <button className="search-btn"
            onClick = { () =>   {
                const data = filterData(searchInput, restaurants);
                setRestaurants(data);
            }}
            >Search</button>
        </div>

        <div className='restaurant-list'>
            {restaurants.map((restaurant) => {
                return <RestaurantCard {...restaurant} key={restaurant.id} />
            })}
        </div>
        </>
    );
};

export default Body;