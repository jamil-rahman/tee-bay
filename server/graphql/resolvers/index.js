const Product = require('../../models/product')
const User = require('../../models/user')

module.exports = {

    //works
    getAllproducts: async () => {
    try {
       const productsFetched = await Product.find()
        return productsFetched.map(product => {
            return { 
                ...product._doc, 
                title: product.title, 
                // createdAt: new Date(product._doc.createdAt).toISOString()
                price: product.price,
                rent: product.rent,
                category: product.category,
                description: product.description
            }
        })
    }
    catch (error) {
        throw error
    }

    
 },

//works
getUser: async ({email})=>{
    return new Promise((resolve,reject)=>{
        User.findOne({email:email},(err,user)=>{
        if(err) reject(err);
        else resolve(user);
    })
});
},

//works
    getAllUsers: async () => {
        try {
        const userFetched = await User.find()
            return userFetched.map(user => {
                return { 
                    _id: user.id, 
                    email: user.email,
                    password: user.password,
                    ...user.products }
            })
        }
        catch (error) {
            throw error
        }
    },

//works
  createProduct: async args => {
  try {
    const { title, price, description, category ,rent} = args.product
    const product = new Product({
        title, price, description, category ,rent
    })
    const newProduct = await product.save()
    return { ...newProduct._doc, _id: newProduct.id }
  }
  catch (error) {
      throw error
  }

 },

 //works
 createUser: async args => {
    try {
      const { email, password} = args.user
      const user = new User({
          email, password
      })
      const newUser = await user.save()
      return { ...newUser._doc, _id: newUser.id }
    }
    catch (error) {
        throw error
    }
  
   }

}