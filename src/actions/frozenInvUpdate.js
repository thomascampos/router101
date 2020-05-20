export default (operation, index) => {
    console.log("Passage dans le createur d'action de type updateFrozenElement");
    return {
        type: "updateFrozenElement",
        payload: {
            operation,
            index
        }
    }
}