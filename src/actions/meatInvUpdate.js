export default (operation, index) => {
    console.log("Creation Action de type updateMeatElement");
    console.log("Avec operation = " + operation);
    console.log("Et index = " + index);
    return {
        type: "updateMeatElement",
        payload: {
            operation,
            index
        }
    }
}