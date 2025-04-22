import CarPrpductContainer from "../Components/Product/CardProductContainer";
import ViewHomeProducthook from "../Hook/Products/View-Home-Product-hook";



const Home = () => {
  const [items] = ViewHomeProducthook();

  return (
    <div>
      <CarPrpductContainer products={items} title="المنتجات"  btntitle="المزيد"/>
    </div>

  );
};

export default Home;
