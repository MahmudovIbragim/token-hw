import { useState } from "react";
import {
  useDeleteProductMutation,
  useGetProductQuery,
  usePostProductMutation,
} from "../../../redux/api/request/product";
import scss from "./Home.module.scss";
import { TextField } from "@mui/material";

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
    if (name === "" || quantity === "" || price === "" || image === "") {
      alert("Заполни поли");
    } else {
      const newProduct = {
        productName: name,
        quantity: quantity,
        price: price,
        photoUrl: image,
      };
      await createProduct(newProduct);
    }
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
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              placeholder="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              placeholder="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <button onClick={handleAddProduct}>Добавить прдукт</button>
          </div>
          <div className={scss.rendering}>
            {data?.map((item) => (
              <div className={scss.card} key={item._id}>
                <h1>{item.productName}</h1>
                <h3>{item.quantity}</h3>
                <img src={item.photoUrl} alt="" />
                <p>{item.price}</p>
                <button className={scss.Btn}
                onClick={() => deleteProductItem(item._id)}>
                  <div className={scss.sign}>
                    <svg
                      viewBox="0 0 16 16"
                      className={`${scss.bi} ${scss.bi_trash3_fill}`}
                      fill="currentColor"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"></path>
                    </svg>
                  </div>

                  <div className={scss.text}>Delete</div>
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
