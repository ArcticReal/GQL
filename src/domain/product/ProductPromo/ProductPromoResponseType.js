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

const ProductPromoResponseType = new GraphQLObjectType({
  name: 'ProductPromoResponseType',
  description: 'response type for ProductPromo',

  fields: () => ({
    billbackFactor: {type: GraphQLFloat},
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    overrideOrgPartyId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    promoName: {type: GraphQLString},
    promoText: {type: GraphQLString},
    requireCode: {type: GraphQLBoolean},
    showToCustomer: {type: GraphQLBoolean},
    useLimitPerCustomer: {type: GraphQLInt},
    useLimitPerOrder: {type: GraphQLInt},
    useLimitPerPromotion: {type: GraphQLInt},
    userEntered: {type: GraphQLBoolean}
  })
});

export {ProductPromoResponseType};
    