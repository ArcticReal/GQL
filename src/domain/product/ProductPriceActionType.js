
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductPriceActionTypeType} from '../product/ProductPriceActionTypeType.js';
import {OrderItemPriceInfoType} from '../order/OrderItemPriceInfoType.js';
import {ProductPriceRuleType} from '../product/ProductPriceRuleType.js';


const ProductPriceActionType = new GraphQLObjectType({
  name: 'ProductPriceActionType',
  description: 'Type for ProductPriceAction in product',

  fields: () => ({
    amount: {type: GraphQLFloat},
    productPriceActionSeqId: {type: GraphQLString},
    productPriceActionType: {
      type: ProductPriceActionTypeType,
      args : {productPriceActionTypeId: {type: GraphQLString}},
      resolve: (productPriceAction, args, {loaders}) => loaders.ofbiz.load(`productPriceActionTypes/find?productPriceActionTypeId=${productPriceAction.productPriceActionTypeId}`)
    },
    productPriceRule: {
      type: ProductPriceRuleType,
      args : {productPriceRuleId: {type: GraphQLString}},
      resolve: (productPriceAction, args, {loaders}) => loaders.ofbiz.load(`productPriceRules/find?productPriceRuleId=${productPriceAction.productPriceRuleId}`)
    },
    rateCode: {type: GraphQLString},
    orderItemPriceInfo: {
      type: new GraphQLList(OrderItemPriceInfoType),
      args : {productPriceRuleId: {type: GraphQLString}},
      resolve: (productPriceAction, args, {loaders}) => loaders.ofbizArray.load(`orderItemPriceInfos/find?productPriceRuleId=${productPriceAction.productPriceRuleId}`)
    }
  })
});

export {ProductPriceActionType};
    