import express from 'express';
import { getRooms, getRoom, createRoom, updateRoom, deleteRoom, updateRoomAvailability } from '../controllers/room.js';
import { verifyAdmin,verifyUser } from '../utils/verifyToken.js';
const router = express.Router();

//CREATE
router.post('/:hotelid',verifyAdmin ,createRoom);

//UPDATE
router.put("/:id", verifyUser, updateRoom);
router.put("availability/:id",updateRoomAvailability, updateRoom)

//DELETE
router.delete("/:id/:hotelid", verifyUser, deleteRoom);

//GET
router.get("/:id", verifyUser, getRoom);

//GET ALL
router.get("/", verifyAdmin, getRooms);

export default router;