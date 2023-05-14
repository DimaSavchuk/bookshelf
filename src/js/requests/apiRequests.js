import { apiInstance } from '../services/api';

export async function categoryListRequest() {
  try {
    const response = await apiInstance.get(`/books/category-list`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function topBooksRequest() {
  try {
    const response = await apiInstance.get(`/books/top-books`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function categoryRequest(category) {
  try {
    const response = await apiInstance.get(
      `/books/category?category=${category}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function booksRequest(id) {
  try {
    const response = await apiInstance.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
