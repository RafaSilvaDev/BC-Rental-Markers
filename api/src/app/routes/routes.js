import { Router } from "express";
import BCListiningController from "../controller/BCListiningController.js";
import BCNeighbourhoodController from "../controller/BCNeighbourhoodController.js";

const router = Router();

router.get("/listining", BCListiningController.fetchAllRentalMarkers);
router.get("/listining/neighbourhood/:group", BCListiningController.fetchAllRentalMarkersByNeighbourhoodGroup);
router.delete("/listining/:id", BCListiningController.deleteRentalMarkerById)
router.get("/neighbourhood", BCNeighbourhoodController.fetchAllNeighbourhoods)

export default router;
