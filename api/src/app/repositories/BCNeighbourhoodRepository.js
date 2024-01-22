import { operation } from "../connection/connection.js";

class BCNeighbourhoodRepository {
  async findAllNeighbourhoods(limit, offset) {
    const sql =
      "SELECT DISTINCT neighbourhood, neighbourhood_group, geometry FROM public.neighbourhoods ORDER BY neighbourhood ASC LIMIT $1 OFFSET $2;";
    return await operation(sql, [limit, offset]);
  }
}

export default new BCNeighbourhoodRepository();
