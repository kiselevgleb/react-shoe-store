export const postCart =  () => {
    console.log(11)
    const response = localStorage.getItem('orderInfo');
    console.log(response)

    // if (!response.ok) {
    //     throw new Error(response.statusText);
    // }
    return  response;
}

export const listItems = async () => {
    const response = await fetch(`${process.env.REACT_APP_ITEMS_URL}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export const orderInfo = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_ITEMS_URL}/${id}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export const itemsInCategory = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_ITEMS_URL}?categoryId=${id}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export const listHits = async () => {
    const response = await fetch(`${process.env.REACT_APP_HIT_URL}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}
export const listCategories = async () => {
    const response = await fetch(`${process.env.REACT_APP_CATEGORIES_URL}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export const addItems = async (coin, cat) => {
    console.log(cat)
    if (cat !== "") {
        const response = await fetch(`${process.env.REACT_APP_ITEMS_URL}?categoryId=${cat}&offset=${coin}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } else {
        const response = await fetch(`${process.env.REACT_APP_ITEMS_URL}?offset=${coin}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    }
}

export const searchItems = async (search) => {
    const response = await fetch(`${process.env.REACT_APP_ITEMS_URL}?q=${search}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}