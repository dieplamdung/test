
var initialState = [
    {
        id: 1,
        name : 'Iphone',
        image: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg',
        description :'San pham cua iphone',
        price : 500,
        inventory: 10,
        rating : 5
    },
    {
        id: 2,
        name : 'Nokia',
        image: 'https://cdn.tgdd.vn/Products/Images/42/197783/nokia-9-pureview-1-600x600.jpg',
        description :'San pham cua Nokia',
        price : 400,
        inventory: 5,
        rating : 4
    },
    {
        id: 3,
        name : 'samsum',
        image: 'https://www.duchuymobile.com/images/detailed/23/s10-plus-128gb-my-trang-cu.jpg',
        description :'San pham cua SamSum',
        price : 300,
        inventory: 3,
        rating : 3
    }
];
const products = (state = initialState, action) => {
    switch (action.type){
        default : return [...state];
    }
}
export default products;