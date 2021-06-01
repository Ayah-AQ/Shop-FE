import dataproducts from "./dataproducts";

const Products=()=>{const anime = dataproducts.map((product) => (
    <div className ="productImages">
       <img className="anime-Images" src={product.image} />
       <div className="productnames">{product.name}</div>
       <div>{product.price}"JD"</div>
       
     </div>
   ));
   return <div className="anime">{anime}</div>}
   export default Products
