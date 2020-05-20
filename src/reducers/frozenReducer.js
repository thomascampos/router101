const seedData = [
    {
        food: "TV Dinners",
        quantity: 10
    },
    {
        food: "Frozen Veggies",
        quantity: 21
    },
    {
        food: "Frozen Pizzas",
        quantity: 25
    }
]

// le state passé en 1er paramètre correspond à une partie du store Redux (du state tree)
// la propriété frozen de ce store Redux (cf. rootReducer.js) 
export default (state = seedData, action) => {
    console.log("Passage dans le Frozen Reducer");
    console.log("Avec une action de type = " + action.type);
    const newState = [...state];
    if (action.type === "updateFrozenElement") {
        console.log("Frozen Reducer met à jour le Redux Store");
        console.log("avec operateur égal à " + action.payload.operation);
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