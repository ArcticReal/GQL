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

const ProductPromoCodeInputType = new GraphQLInputObjectType({
  name: 'ProductPromoCodeInputType',
  description: 'input type for ProductPromoCode',

  fields: () => ({
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    productPromoCodeId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    requireEmailOrParty: {type: GraphQLBoolean},
    thruDate: {type: GraphQLString},
    useLimitPerCode: {type: GraphQLInt},
    useLimitPerCustomer: {type: GraphQLInt},
    userEntered: {type: GraphQLBoolean}
  })
});

export {ProductPromoCodeInputType};
    