const seedData = [
    {
        food: "chicken breast",
        quantity: 14
    },
    {
        food: "bacon",
        quantity: 11
    },
    {
        food: "mahi mahi",
        quantity: 35
    },
    {
        food: "salmon",
        quantity: 335
    },
]

export default (state = seedData, action) => {
    console.log("Passage dans le Meat Reducer");
    console.log("Avec une action de type = " + action.type);
    const newState = [...state];
    if (action.type === "updateMeatElement") {
        console.log("Meat Reducer met à jour le Redux Store");
        if (action.payload.operation === "+") {
            newState[action.payload.index].quantity++;
        } else if (action.payload.operation === "-") {
            newState[action.payload.index].quantity--;
        }
        return newState; 
    } else {
        return state;
    }
}