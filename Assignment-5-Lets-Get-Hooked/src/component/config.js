export const restaurantList =[
    {
        id: 101,
        name: "Chinese Wok",
        address : "1234 Main St",
        rating: 4.5,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
    },
    {
        id: 102,
        name: "Subway"  ,
        address: "5678 Elm St",
        rating: 4.0,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/4a1d133e-bcd6-4165-af86-b628fe800d1e_9052.JPG"
    },
    {
        id: 103,
        name: "McDonalds",
        address: "91011 Oak St",
        rating: 3.5,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/2801a82b-0761-40ef-9de0-906d150b1833_32399.jpg"
    },
    {
        id: 104,
        name: "KFC",
        address: "1213 Pine St",
        rating: 4.5,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/8247bd8f-c26a-4e9f-b8b0-fe0a25490f56_243517.JPG"
    }
];

export const RestaurantCard = ({image, name, address, rating}) => {

    return (
        <div className="restaurant-card">
            <img src={image} alt="restaurant" />
            <h2>{name}</h2>
            <p>{address}</p>
            <p>{rating}</p>
        </div>
    );
}