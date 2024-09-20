import ShopCard from "../ShopCard/ShopCard";

const CardsView = ({ cards }) => {
    return (
        <div className="cards-item-gallery">
          {cards.map((card) => (
            <ShopCard item={card} key={card} />
          ))}
          </div>
      );
};

export default CardsView;