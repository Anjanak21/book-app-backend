const Order= require("./order.model");

const createAOrder=async(req,res)=>{
try {
    const newOrder =await new Order(req.body)
    console.log(newOrder);
    
    const savedOrder = await newOrder.save();
    res.status(200).json({savedOrder});
  } catch (error) {
    console.error("Error creating order", error);
    res.status(500).json({ message: "Failed to create order" });
  

}
}
const getOrderByEmail=async(req,res)=>{
  try{
    const {email}=req.params;
    const orders=await Order.find({email}).sort({createdAt:-1});
    if(!orders){
      return res.status(404).json({message:"order not found"});

    }
    res.status (200).json(orders)

  }catch(error){
    console.error("error fetching orders",error);
    res.status(500).json({message:"failed to fetch order"})
    
  }
}
module.exports={createAOrder,getOrderByEmail};