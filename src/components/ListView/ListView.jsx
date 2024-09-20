import ShopItem from "../ShopItem/ShopItem";

const ListView = ({ items }) => {
  return (
    <div className="list-item-gallery">
      {items.map((product) => (
        <ShopItem item={product} key={product} />
      ))}
      </div>
  );
};

export default ListView;
