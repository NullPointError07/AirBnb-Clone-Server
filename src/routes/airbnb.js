import express from 'express';
import { airbnbModel } from '../models/airbnb.js';

const router = express.Router();




router.get('/', async (req, res) => {
    try {
      const { category, property, bedroom, bathroom , price} = req.query;
  
      // Define a filter object to hold the query conditions
      const filter = {};

      if (category) {
        filter['categories'] = category // Filter by the specified category
      }
        
      // If the "property" query parameter is provided, filter by property type
      if (property && property !== 'All') {
        filter['property_type'] = { $in: property };
      }
  
      if (bedroom) {
          filter['bed'] = bedroom;
      }

      if (bathroom) {
        filter['bathroom'] = bathroom
      }

      if (price) {
        if (price === '1-100') {
          filter['price'] = { $gte: 1, $lte: 100 };
        } else if (price === 'Over100') {
          filter['price'] = { $gt: 100 };
        }
      }
  
    //   console.log("Filter:", filter); // line for debugging purpose
  
      const filteredPlaces = await airbnbModel.find(filter);
    //   console.log("Filtered Data:", filteredPlaces); // line for debugging purpose
  
      const count = await airbnbModel.countDocuments(filter);
      console.log("Count:", count); // line for debugging purpose
  
      res.json({ count, data: filteredPlaces });
    } catch (err) {
      console.error(err); // line for debugging purpose
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

export { router as airbnbRouter };

