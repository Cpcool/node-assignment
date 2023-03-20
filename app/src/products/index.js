module.exports.create = async (req, res, next) => {
    // product create logic
    return res.status(201).send({ message: "Products added successfully" });
}

module.exports.delete = async (req, res, next) => {
    // product delete logic
    return res.status(200).send({ message: "Products deleted successfully" });
}

module.exports.update = async (req, res, next) => {
    // product update logic
    return res.status(200).send({ message: "Products updated successfully" });
}

module.exports.list = async (req, res, next) => {
    // product list logic
    return res.status(200).send({ message: "Products sent successfully" });
}