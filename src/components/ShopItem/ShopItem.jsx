const ShopItem = ({ item }) => {
  console.log(item);

  return (
    <div className="list-item">
      <div className="list-item-img" >
        <img src={item.img} className="list-img" alt="" />
      </div>
      <p className="item-title">{item.name}</p>
      <p className="item-color">{item.color}</p>
      <p className="item-price">${item.price}</p>
      <div>
        <button className="item-button">add to cart</button>
      </div>
    </div>
  );
};

export default ShopItem;
