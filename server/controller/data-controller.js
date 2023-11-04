const dataModel = require('../model/data-model')
const fs = require('fs')

// const createDataController= async (req,res)=>{
// try{
//     const {end_year,intensity,sector,topic,insight,url,region,start_year,impact,added,published,
//     country,relevance,pestle,source,title,likelihood} =req.fields;
//     const {photo} = req.files;

//     if(!name)
//     {
//         return res.status(500).send({
//             error:'name is required',
//         })
//     }
//     if(!description)
//     {
//         return res.status(500).send({
//             error:'description is required',
//         })
//     }
//     if(!price)
//     {
//         return res.status(500).send({
//             error:'price is required',
//         })
//     }
//     if(!category)
//     {
//         return res.status(500).send({
//             error:'category is required',
//         })
//     }
//     if(!quantity)
//     {
//         return res.status(500).send({
//             error:'quantity is required',
//         })
//     }
//     if(!shipping)
//     {
//         return res.status(500).send({
//             error:'shipping is required',
//         })
//     }
//     if(photo && photo.size>1000000)
//     {
//         return res.status(500).send({
//             error:'photo is required and should be less than 1mb',
//         })
//     }

//     const products = new productModel({...req.fields,slug:slugify(name)})
//     if(photo)
//     {
//         products.photo.data = fs.readFileSync(photo.path)
//         products.photo.contentType = photo.type
//     }

//     await products.save();
//     res.status(201).send({
//         success:true,
//         message:'product Created Succesfully',
//         products,
//     });

// }catch(error){
//     console.log(error);
//     res.status(500).send({
//         success:false,
//         message:'error in creating product',
//         error
//     })
// }
// }

const getDataController = async (req, res) => {
    try {
      const data = await dataModel
        .find({})
        .sort({ createdAt: -1 });
  
      res.status(200).send({
        success: true,
        message: 'got all data',
        data: data, // Set the 'data' field with the data from the database
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: 'error in getting all data',
        error,
      });
    }
  };
  




module.exports= {getDataController};//createDataController