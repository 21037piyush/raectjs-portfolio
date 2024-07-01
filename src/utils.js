
//path will be relative and what this funtion will do is construst an absolutte path of whatever image is there 
export const getImageUrl =(path)=>{
    return new URL(`/assets/${path}`,import.meta.url).href;
};
// funtion will be taking the base url of the website and then appending the assets path with it and then sending it back baiscally making it easier to dynamically import images to different components

