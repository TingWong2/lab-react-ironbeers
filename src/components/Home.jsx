import React from "react";

import image1 from "./../assets/beers.png";
import image2 from "./../assets/new-beer.png";
import image3 from "./../assets/random-beer.png";

const Home = () => {
  return (
    <div>
      <div>
        <img src={image1} alt="beers" />
        <h3>All Beers</h3>
        <p>
          Lorem ipsum dolor sit amet. Non nulla libero qui itaque quos aut error
          voluptatem et omnis enim eum veniam quidem.
        </p>
      </div>

      <div>
        <img src={image2} alt="new-beer" />
        <h3>New Beers</h3>
        <p>
          Hic iure consequatur sit rerum illo id corporis magnam eum nihil
          impedit qui earum dolor non amet consectetur. Cum magni placeat aut
          placeat odit ut consequatur libero!
        </p>
      </div>

      <div>
        <img src={image3} alt="random-beer" />
        <h3>Random Beers</h3>
        <p>
          Sed praesentium atque eos similique facilis sit mollitia voluptatem
          est totam sint. Rem veritatis sequi eum praesentium natus aut totam
          numquam id dolor galisum.
        </p>
      </div>
    </div>
  );
};

export default Home;
