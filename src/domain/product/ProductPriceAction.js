
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

import {ProductPriceActionTypeType} from '../product/ProductPriceActionType.js';
import {OrderItemPriceInfoType} from '../order/OrderItemPriceInfo.js';
import {ProductPriceRuleType} from '../product/ProductPriceRule.js';


const ProductPriceActionType = new GraphQLObjectType({
  name: 'ProductPriceActionType',
  description: 'Type for ProductPriceAction in product',

  fields: () => ({
    amount: {type: GraphQLFloat},
    productPriceActionSeqId: {type: GraphQLString},
    productPriceActionType: {
      type: ProductPriceActionTypeType,
      args : {productPriceActionTypeId: {type: GraphQLString}},
      resolve: (productPriceAction, args, {loaders}) => loaders.ofbiz.load(`product/product/productPriceActionTypes/find?productPriceActionTypeId=${productPriceAction.productPriceActionTypeId}`)
    },
    productPriceRule: {
      type: ProductPriceRuleType,
      args : {productPriceRuleId: {type: GraphQLString}},
      resolve: (productPriceAction, args, {loaders}) => loaders.ofbiz.load(`product/product/productPriceRules/find?productPriceRuleId=${productPriceAction.productPriceRuleId}`)
    },
    rateCode: {type: GraphQLString},
    orderItemPriceInfos: {
      type: new GraphQLList(OrderItemPriceInfoType),
      args : {},
      resolve: (productPriceAction, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemPriceInfos/find?productPriceRuleId=${productPriceAction.productPriceRuleId}`)
    }
  })
});

export {ProductPriceActionType};
    




const ProductPriceActionInputType = new GraphQLInputObjectType({
  name: 'ProductPriceActionInputType',
  description: 'input type for ProductPriceAction in product',

  fields: () => ({
    amount: {type: GraphQLFloat},
    productPriceActionSeqId: {type: GraphQLString},
    productPriceActionTypeId: {type: GraphQLString},
    productPriceRuleId: {type: GraphQLString},
    rateCode: {type: GraphQLString}
  })
});

export {ProductPriceActionInputType};
    