import { apiInstance } from "../services/api";

export async function categoryListRequest() {
    return response = await apiInstance.get(`/books/category-list`);
}


export async function topBooksRequest() {
    return response = await apiInstance.get(`/books/top-books`);
  
}

export async function categoryRequest() {
    return response = await apiInstance.get(`/books/category`);
}

export async function BooksRequest(id) {
    return response = await apiInstance.get(`/books/${id}`);
}