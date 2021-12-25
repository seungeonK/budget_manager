export const rootController = (req,res) => {
    try {
        res.send("This is root controller");
    } catch (error) {
        res.send(error);
    }
}