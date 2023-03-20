module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            _id: String,
            permissions: Array,
        }
    );

    const roles = mongoose.model("roles", schema);
    return roles;
};

/*
    Example :- 
    {
        _id : 'admin',
        permissions : ['POST','PUT','GET','PATCH','DELETE']
    },
    {
        _id : 'customer',
        permissions : ['GET']
    }
*/