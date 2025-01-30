import { RestaurantCard, restaurantList } from "./config";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";


function filterData(searchInput, restaurants) {
    return restaurants.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
}

const Body = () => {
    
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect( ()=> {
        getRestaurants();
    },[]);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93519298&lng=77.624480698989998&page_type=DESKTOP_WEB_LISTING");
        const jsondata = await data.json();
        setAllRestaurants(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(!allRestaurants) return null;
   

    return allRestaurants.length === 0 ? (<Shimmer/> ) : (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for restaurants"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        // Filter the restaurants based on search input
                        const filteredData = filterData(searchInput, allRestaurants);
                        setFilteredRestaurants(filteredData);
                    }}
                >
                    Search
                </button>
            </div>

            <div className="restaurant-list">
                {filteredRestaurants.length === 0 ? (
                    <h1>No restaurants found</h1>
                ) : (
                    filteredRestaurants.map((restaurant) => (
                        <RestaurantCard
                            {...restaurant.info} 
                            key={restaurant.info.id}
                        />
                    ))
                )}
            </div>
        </>
    );

};

export default Body;