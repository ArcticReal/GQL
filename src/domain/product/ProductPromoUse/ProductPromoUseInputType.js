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

const ProductPromoUseInputType = new GraphQLInputObjectType({
  name: 'ProductPromoUseInputType',
  description: 'input type for ProductPromoUse',

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

export {ProductPromoUseInputType};
    