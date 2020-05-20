const seedData = [
    {
        food: "lettuce",
        quantity: 14
    },
    {
        food: "turnips",
        quantity: 11
    },
    {
        food: "apples",
        quantity: 35
    },
    {
        food: "cilantro",
        quantity: 135
    },
]

export default (state = seedData, action) => {
    console.log("Passage dans le Produce Reducer");
    console.log("Avec une action de type = " + action.type);
    const newState = [...state];
    if (action.type === "produceElementUpdate") {
        console.log("Produce Reducer met à jour le Redux Store");
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