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

const ProductStorePromoApplResponseType = new GraphQLObjectType({
  name: 'ProductStorePromoApplResponseType',
  description: 'response type for ProductStorePromoAppl',

  fields: () => ({
    fromDate: {type: GraphQLString},
    manualOnly: {type: GraphQLBoolean},
    productPromoId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductStorePromoApplResponseType};
    