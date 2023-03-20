module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
        }
    );

    const products = mongoose.model("products", schema);
    return products;
};
