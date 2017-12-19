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

const ProductGeoInputType = new GraphQLInputObjectType({
  name: 'ProductGeoInputType',
  description: 'input type for ProductGeo',

  fields: () => ({
    description: {type: GraphQLString},
    geoId: {type: GraphQLString},
    productGeoEnumId: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {ProductGeoInputType};
    