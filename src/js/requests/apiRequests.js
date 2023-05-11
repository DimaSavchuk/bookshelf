import { apiInstance } from "../services/api";

export async function categoryListRequest() {
    try {
        response = await apiInstance.get(`/books/category-list`);
        return response.data;
    } catch (error) {
        console.log(error);
    }

}

export async function topBooksRequest() {
    try {
        response = await apiInstance.get(`/books/top-books`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function categoryRequest(category) {

    try {
        response = await apiInstance.get(`/books/category?category=${category}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function booksRequest(id) {
    try {
        response = await apiInstance.get(`/books/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}