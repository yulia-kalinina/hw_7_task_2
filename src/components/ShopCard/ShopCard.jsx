const ShopCard = ({ item }) => {
  return (
    <div className="card-item">
      <div className="card-item-img">
        <img src={item.img} className="card-img" alt="" />
      </div>
      <p className="item-title card-item-title">{item.name}</p>
      <p className="item-color card-item-color">{item.color}</p>
      <div className="card-item-bottom">
      <p className="item-price card-item-price">${item.price}</p>
      <div>
        <button className="item-button card-item-button">add to cart</button>
      </div>
      </div>
    </div>
  );
};

export default ShopCard;
