import Hotel from '../models/Hotel.js';

export const createHotel = async(req,res,next)=>{
    const newHotel = new Hotel(req.body);
    try{
        const savedHotel=await newHotel.save();
        res.status(200).json(savedHotel);
    } catch(err){
        next(err);
    }
}

export const updateHotel = async(req,res,next)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
            );
            res.status(200).json(updatedHotel);
    } catch(err){
        next(err);
    }
}

export const deleteHotel = async(req,res,next)=>{
    try{
        const deleteHotel = await Hotel.findByIdAndDelete(
            req.params.id,
            );
            res.status(200).json("Hotel has been deleted");
    } catch(err){
        next(err);
}
}

export const getHotel = async(req,res,next)=>{
    try{
        const getHotel = await Hotel.findById(
            req.params.id,
            );
            res.status(200).json(getHotel);
    } catch(err){
        next(err);
    }
}

export const getHotels = async(req,res,next)=>{
    try{
        const getHotels = await Hotel.find();
            res.status(200).json(getHotels);
    } catch(err){
        next(err);
    }
}