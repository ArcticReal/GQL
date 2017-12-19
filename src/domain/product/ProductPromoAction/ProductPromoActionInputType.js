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

const ProductPromoActionInputType = new GraphQLInputObjectType({
  name: 'ProductPromoActionInputType',
  description: 'input type for ProductPromoAction',

  fields: () => ({
    amount: {type: GraphQLFloat},
    orderAdjustmentTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productId: {type: GraphQLString},
    productPromoActionEnumId: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    serviceName: {type: GraphQLString},
    useCartQuantity: {type: GraphQLBoolean}
  })
});

export {ProductPromoActionInputType};
    