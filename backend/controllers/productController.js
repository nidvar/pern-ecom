export const allProducts = async (req, res) => {
    console.log(req.body);
    console.log('getting all products');
    res.send({ message: 'all products' });
};
