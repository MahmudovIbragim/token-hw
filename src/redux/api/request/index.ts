import { api as index } from "..";
import { Todo } from "./typed";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getRequest: builder.query<Todo.GetResponse, Todo.GetRequest>({
      query: () => ({
        url: "users",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    postRequest: builder.mutation<Todo.PostResponse, Todo.PostRequest>({
      query: (newData) => ({
        url: "users",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["user"],
    }),
    postLoginRequest: builder.mutation<
      Todo.PostLoginResponse,
      Todo.PostLoginRequest
    >({
      query: (newlist) => ({
        url: "login",
        method: "POST",
        body: newlist,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetRequestQuery,
  usePostRequestMutation,
  usePostLoginRequestMutation,
} = api;
