import {
  GraphQLList,
  GraphQLString,
} from 'graphql';

import { GeoType } from '../../geo/geo.js';

const countryQueries = {
  countries: {
    type: new GraphQLList(GeoType),
    args: {

    },
    resolve: (root, args, {loaders}) => loaders.ofbizArray.load(`geo/country`)
  },
  country: {
    type: GeoType,
    args: {
      geoId: {
        type: GraphQLString
      },
    },
    resolve: (root, args, {loaders}) => loaders.ofbiz.load(`geo/country/${args.geoId}`)
  },
};

export {countryQueries};
