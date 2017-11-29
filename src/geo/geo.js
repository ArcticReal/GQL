import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean,
} from 'graphql';

const GeoType = new GraphQLObjectType({
  name: 'Geo',
  description: '...',

  fields: () => ({
    geoName: { type: GraphQLString },
    geoTypeId: { type: GraphQLString },
    lastUpdatedStamp: { type: GraphQLString },
    createdTxStamp: { type: GraphQLString },
    geoId: { type: GraphQLString },
    createdStamp: { type: GraphQLString },
    geoCode: { type: GraphQLString },
    lastUpdatedTxStamp: { type: GraphQLString },
    abbreviation: { type: GraphQLString },
    geoSecCode: { type: GraphQLString },
    wellKnownText: { type: GraphQLString },
    regions: {
      type: new GraphQLList(GeoType),
      resolve: (geo, args, {loaders}) => loaders.ofbiz.load(`geo/${geo.geoId}/regions/`)
    }
  })
});

export { GeoType };
