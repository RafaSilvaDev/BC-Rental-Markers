import BCNeighbourhoodRepository from "../repositories/BCNeighbourhoodRepository.js";

class BCNeighbourhoodController {
  async fetchAllNeighbourhoods(req, res) {
    try {
      const result = await BCNeighbourhoodRepository.findAllNeighbourhoods(
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
}

export default new BCNeighbourhoodController();
