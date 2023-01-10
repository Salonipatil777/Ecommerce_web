import CatagoryItem from "../catagory-item/catagory-item.component";
import "./Directory.style.css";

const catagories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route : 'Shop/hats'
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route : 'Shop/jackets'
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route : 'Shop/sneakers'
  },
  {
    id: 4,
    title: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route : 'Shop/womens'
  },
  {
    id: 5,
    title: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
    route : 'Shop/mens'
  },
];

const Directory = () => {
  return (
    <div className="container">
      {catagories.map((Catagory) => (
        <CatagoryItem key={Catagory.id} Catagory={Catagory} />
      ))}
    </div>
  );
};

export default Directory;
