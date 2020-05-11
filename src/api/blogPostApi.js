import {handleError, handleResponse} from "./apiUtils";
const baseUrl = "https://84ytluqm45.execute-api.us-east-1.amazonaws.com/dev"

export function getBlogPosts() {
    return fetch(baseUrl + "/blogposts")
        .then(handleResponse)
        .catch(handleError)
}

//todo if ID exists, then blog will be overwritten - put in "Are you sure..?" message
export function saveBlogPost(blogPost){
    return fetch(baseUrl + ("/blogpost"), {
        method: "PUT",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify(blogPost)
    })
        .then(handleResponse)
        .then(handleError)
}

export function deleteBlogPost(blogPost){
    return fetch(baseUrl + "/blogpost" + blogPost.id, {
        method: "DELETE"
    })
}

