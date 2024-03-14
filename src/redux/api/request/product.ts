import { api as index } from "..";
import { Todo } from "./typed";

const product = index.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query<Todo.GetProductResponse, Todo.GetProductRequest>({
      query: () => ({
        url: "products",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    postProduct: builder.mutation<
      Todo.PostProductResponse,
      Todo.PostProductRequest
    >({
      query: (newProducts) => ({
        url: "products",
        method: "POST",
        body: newProducts,
      }),
      invalidatesTags: ["user"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  usePostProductMutation,
  useDeleteProductMutation,
} = product;
