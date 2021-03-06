import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const ProductGeoResponseType = new GraphQLObjectType({
  name: 'ProductGeoResponseType',
  description: 'response type for ProductGeo',

  fields: () => ({
    description: {type: GraphQLString},
    geoId: {type: GraphQLString},
    productGeoEnumId: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {ProductGeoResponseType};
    