import BCListiningController from "../../app/controller/BCListiningController.js";
import BCListiningRepository from "../../app/repositories/BCListiningRepository.js";
import { jest } from "@jest/globals";

BCListiningRepository.findAllRentalMarkers = jest.fn();

describe("Controller tests", () => {
  it("Should be able to get all rental markers", async () => {
    BCListiningRepository.findAllRentalMarkers.mockResolvedValue([
      {
        id: "19898",
        listing_url: "https://www.airbnb.com/rooms/19898",
        scrape_id: "20230924051445",
        last_scraped: "2023-09-24T03:00:00.000Z",
        source: "previous scrape",
        name: "Rental unit in Victoria · 1 bedroom · 1 bed · 1 bath",
        description:
          "<b>The space</b><br />The original Master Bedroom is a regal second floor room which offers an impressive, over-sized King Mahogany Canopy Bed, tall windows with beautifully embroidered drapes, high ceilings, antiques and a view over a heritage garden. An antique fireplace and sitting area complete this beautiful room. The bathroom has a deep, two person jacuzzi Spa Tub with a European deck shower and gold fixtures. A mini-refrigerator is also provided.",
        neighborhood_overview: "",
        picture_url:
          "https://a0.muscache.com/pictures/101822/ae950f9e_original.jpg",
        host_id: "69729",
        host_url: "https://www.airbnb.com/users/show/69729",
        host_name: "Ryan",
        host_since: "2010-01-11T02:00:00.000Z",
        host_location: "",
        host_about: "",
        host_response_time: "",
        host_response_rate: "",
        host_acceptance_rate: "",
        host_is_superhost: "f",
        host_thumbnail_url:
          "https://a0.muscache.com/im/users/69729/profile_pic/1335645701/original.jpg?aki_policy=profile_small",
        host_picture_url:
          "https://a0.muscache.com/im/users/69729/profile_pic/1335645701/original.jpg?aki_policy=profile_x_medium",
        host_neighbourhood: "",
        host_listings_count: 1,
        host_total_listings_count: 6,
        host_verifications: "['email', 'phone']",
        host_has_profile_pic: "t",
        host_identity_verified: "f",
        neighbourhood: "",
        neighbourhood_cleansed: "Rockland",
        neighbourhood_group_cleansed: "Victoria",
        latitude: 48.42515,
        longitude: -123.33977,
        latitude_longitude: null,
        property_type: "Private room in rental unit",
        room_type: "Private room",
        accommodates: 1,
        bathrooms: 0,
        bathrooms_text: "1 bath",
        bedrooms: 1,
        beds: 1,
        amenities:
          '["TV with standard cable", "Crib", "Breakfast", "Wifi", "Smoke alarm", "Refrigerator", "Fire extinguisher", "Heating", "Free parking on premises"]',
        price: "$279.00",
        minimum_nights: 2,
        maximum_nights: 30,
        minimum_minimum_nights: 2,
        maximum_minimum_nights: 2,
        minimum_maximum_nights: 30,
        maximum_maximum_nights: 30,
        minimum_nights_avg_ntm: 2,
        maximum_nights_avg_ntm: 30,
        calendar_updated: "0.0",
        has_availability: "f",
        availability_30: 0,
        availability_60: 0,
        availability_90: 0,
        availability_365: 0,
        calendar_last_scraped: "2023-09-24T03:00:00.000Z",
        number_of_reviews: 0,
        number_of_reviews_ltm: 0,
        number_of_reviews_l30d: 0,
        first_review: "",
        last_review: "",
        review_scores_rating: 0,
        review_scores_accuracy: 0,
        review_scores_cleanliness: 0,
        review_scores_checkin: 0,
        review_scores_communication: 0,
        review_scores_location: 0,
        review_scores_value: 0,
        license: "0.0",
        instant_bookable: "f",
        calculated_host_listings_count: 1,
        calculated_host_listings_count_entire_homes: 0,
        calculated_host_listings_count_private_rooms: 1,
        calculated_host_listings_count_shared_rooms: 0,
        reviews_per_month: 0,
      },
    ]);

    const req = {
      query: {
        limit: 10,
        offset: 0,
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await BCListiningController.fetchAllRentalMarkers(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledTimes(1);
  });
});
