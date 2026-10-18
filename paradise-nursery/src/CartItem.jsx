import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      { name: "Snake Plant", image: "https://images.unsplash.com/photo-1547306720-ad507f7d4d7b?w=400", cost: "$15" },
      { name: "Spider Plant", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400", cost: "$12" },
      { name: "Peace Lily", image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg", cost: "$18" },
      { name: "Boston Fern", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400", cost: "$14" },
      { name: "Rubber Plant", image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=400", cost: "$20" },
      { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400", cost: "$10" }
    ]
  },
  {
    category: "Aromatic Plants",
    plants: [
      { name: "Lavender", image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=400", cost: "$16" },
      { name: "Jasmine", image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400", cost: "$22" },
      { name: "Rosemary", image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400", cost: "$15" },
      { name: "Mint", image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400", cost: "$8" },
      { name: "Eucalyptus", image: "https://images.unsplash.com/photo-1709028392572-d35436df69f9?w=400", cost: "$18" },
      { name: "Basil", image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400", cost: "$10" }
    ]
  },
  {
    category: "Low Maintenance Plants",
    plants: [
      { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400", cost: "$25" },
      { name: "Pothos", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400", cost: "$12" },
      { name: "Cast Iron Plant", image: "https://images.unsplash.com/photo-1598531403093-747fd9022678?w=400", cost: "$20" },
      { name: "Jade Plant", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400", cost: "$15" },
      { name: "Succulent", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400", cost: "$9" },
      { name: "Cactus", image: "https://images.unsplash.com/photo-1554631221-f9603e6808be?w=400", cost: "$11" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({ ...prevState, [plant.name]: true }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: '#4CAF50', padding: '15px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>Paradise Nursery</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="/" onClick={handlePlantsClick} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Plants</a>
          <a href="#" onClick={handleCartClick} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Cart 🛒</a>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid" style={{ padding: '20px' }}>
          {plantsArray.map((categoryObj, index) => (
            <div key={index}>
              <h2 style={{ textAlign: 'center', color: '#2e7d32', marginTop: '20px' }}>{categoryObj.category}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                {categoryObj.plants.map((plant, pIndex) => (
                  <div key={pIndex} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '200px', textAlign: 'center' }}>
                    <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }} />
                    <h3>{plant.name}</h3>
                    <p>{plant.cost}</p>
                    <button 
                      disabled={addedToCart[plant.name]} 
                      onClick={() => handleAddToCart(plant)}
                      style={{ padding: '8px 16px', backgroundColor: addedToCart[plant.name] ? '#ccc' : '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: addedToCart[plant.name] ? 'not-allowed' : 'pointer' }}
                    >
                      {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;