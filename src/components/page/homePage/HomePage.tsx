import { useState } from "react";
import {
  useDeleteProductMutation,
  useGetProductQuery,
  usePostProductMutation,
} from "../../../redux/api/request/product";
import scss from "./Home.module.scss";
const HomePage = () => {
  const { data, isLoading } = useGetProductQuery();
  const [createProduct] = usePostProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  console.log(data);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleAddProduct = async () => {
    const newProduct = {
      productName: name,
      quantity: quantity,
      price: price,
      photoUrl: image,
    };
    await createProduct(newProduct);
  };

  const deleteProductItem = async (id: number) => {
    await deleteProduct(id);
  };
  console.log(isLoading);

  return (
    <div className={scss.Homepage}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.form}>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <input
              type="text"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="text"
              placeholder="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <button onClick={handleAddProduct}>add Product</button>
          </div>
          <div>
            {data?.map((item) => (
              <div key={item._id}>
                <h1>{item.productName}</h1>
                <h3>{item.quantity}</h3>
                <img src={item.photoUrl} alt="" />
                <p>{item.price}</p>
                <button onClick={() => deleteProductItem(item._id!)}>
                  delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
