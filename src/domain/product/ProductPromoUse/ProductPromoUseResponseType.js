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

const ProductPromoUseResponseType = new GraphQLObjectType({
  name: 'ProductPromoUseResponseType',
  description: 'response type for ProductPromoUse',

  fields: () => ({
    orderId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productPromoCodeId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    promoSequenceId: {type: GraphQLString},
    quantityLeftInActions: {type: GraphQLFloat},
    totalDiscountAmount: {type: GraphQLFloat}
  })
});

export {ProductPromoUseResponseType};
    