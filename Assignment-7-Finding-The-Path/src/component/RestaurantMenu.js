import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null); // Initialize as null

    useEffect(() => {
        getRestaurantInfo();
    }, [id]); // Add id as a dependency

    async function getRestaurantInfo() {
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
            const json = await response.json();

            console.log("API Response:", json.data); // Debugging

            // Extract restaurant info safely
            const restaurantInfo = json?.data?.cards?.find(
                (card) => card?.card?.card?.info?.name
            )?.card?.card?.info;

            setRestaurant(restaurantInfo || {}); // Ensure it stays an object
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    }

    

    return (!restaurant) ? <Shimmer/> : (
        <div>
            <h1>Restaurant ID: {id}</h1>
            <h2>{restaurant?.name || "Loading..."}</h2> {/* Handle loading */}
            <img className="img-menu" src = {IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.areaName}</h3>
            <h3>{restaurant.costForTwoMessage}</h3>
            
        </div>
    );
}

export default RestaurantMenu;
