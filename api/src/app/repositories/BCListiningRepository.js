import { operation } from "../connection/connection.js";

class BCListiningRepository {
  async findRentalMarkerById(id) {
    const sql = "SELECT * FROM airbnb_listings WHERE id = $1;";
    return await operation(sql, [id]);
  }

  async findAllRentalMarkers(limit, offset) {
    const sql =
      "SELECT DISTINCT ON (id) * FROM airbnb_listings ORDER BY id ASC LIMIT $1 OFFSET $2;";
    return await operation(sql, [limit, offset]);
  }

  async findAllRentalMarkersByNeighbourhoodGroup(
    neighbourhoodGroup,
    limit,
    offset
  ) {
    const sql =
      "SELECT DISTINCT ON (id) * FROM airbnb_listings WHERE neighbourhood_group_cleansed = $1 ORDER BY id ASC LIMIT $2 OFFSET $3;";
    return await operation(sql, [neighbourhoodGroup, limit, offset]);
  }

  async deleteRentalMarkerById(id) {
    const sql = "DELETE FROM airbnb_listings WHERE id = $1;";
    return await operation(sql, [id]);
  }
}

export default new BCListiningRepository();
