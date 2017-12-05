
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderAdjustmentType} from '../product/OrderAdjustmentType.js';
import {ProductPromoRule} from '../product/ProductPromoRule.js';


const ProductPromoAction = new GraphQLObjectType({
  name: 'ProductPromoActionType',
  description: 'Type for ProductPromoAction in product',

  fields: () => ({
    amount: {type: GraphQLFloat},
    quantity: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    orderAdjustmentType: {
      type: OrderAdjustmentTypeType,
      args : {orderAdjustmentTypeId: {type: GraphQLString}},
      resolve: (productPromoAction, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustmentTypes/find?=${args.orderAdjustmentTypeId}`)
    },
    useCartQuantity: {type: GraphQLBoolean},
    productPromoActionEnumId: {type: GraphQLString},
    productPromo: {
      type: ProductPromoRuleType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoAction, args, {loaders}) => loaders.ofbizArray.load(`productPromoRules/find?=${args.productPromoId}`)
    },
    serviceName: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {ProductPromoAction};
    