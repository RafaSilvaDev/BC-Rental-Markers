import BCListiningRepository from "../repositories/BCListiningRepository.js";

class BCListiningController {
  async fetchAllRentalMarkers(req, res) {
    try {
      const result = await BCListiningRepository.findAllRentalMarkers(
        req.query.limit,
        req.query.offset
      );
      if (result.length > 0) res.status(200).json(result);
      else res.status(404).json({ message: "Nothing found to display." });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error during execution.", error: error });
    }
  }

  async fetchAllRentalMarkersByNeighbourhoodGroup(req, res) {
    try {
      const result =
        await BCListiningRepository.findAllRentalMarkersByNeighbourhoodGroup(
          req.params.group,
          req.query.limit,
          req.query.offset
        );
      if (result.length > 0) res.status(200).json(result);
      else res.status(404).json({ message: "Nothing found to display." });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error during execution.", error: error });
    }
  }

  async deleteRentalMarkerById(req, res) {
    try {
      let id = req.params.id;
      const rental = await BCListiningRepository.findRentalMarkerById(id);
      if (rental.length) {
        await BCListiningRepository.deleteRentalMarkerById(id);
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Homicide not found." });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error during execution.", error: error });
    }
  }
}

export default new BCListiningController();
