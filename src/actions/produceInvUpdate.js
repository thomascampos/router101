export default (operation, index) => {
    return {
        type: "produceElementUpdate",
        payload: {
            operation,
            index
        }
    }
}