const perOwner = {
    name: 'Hero Alam',
    contact: {
        phone: '4564432',
        email: 'hero@gmail.com'
    },
    cats: {
        name: 'lofi',
        info: {
            color: 'white',
            weight: '1.2kg'
        }
    }
};

console.log(perOwner?.cats?.name);
console.log(perOwner?.cats?.info?.color);