
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

import {OrderTermAttributeType} from '../../order/OrderTermAttribute/OrderTermAttributeType.js';
import {OrderHeaderType} from '../../order/OrderHeader/OrderHeaderType.js';
import {TermTypeType} from '../../party/TermType/TermTypeType.js';


const OrderTermType = new GraphQLObjectType({
  name: 'OrderTermType',
  description: 'Type for OrderTerm in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    textValue: {type: GraphQLString},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderTerm, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${orderTerm.orderId}`)
    },
    termDays: {type: GraphQLInt},
    termType: {
      type: TermTypeType,
      args : {termTypeId: {type: GraphQLString}},
      resolve: (orderTerm, args, {loaders}) => loaders.ofbiz.load(`party/termTypes/find?termTypeId=${orderTerm.termTypeId}`)
    },
    description: {type: GraphQLString},
    uomId: {type: GraphQLString},
    termValue: {type: GraphQLFloat},
    orderTermAttributes: {
      type: new GraphQLList(OrderTermAttributeType),
      args : {},
      resolve: (orderTerm, args, {loaders}) => loaders.ofbizArray.load(`order/orderTerm/orderTermAttributes/find?termTypeId=${orderTerm.termTypeId}`)
    }
  })
});

export {OrderTermType};
    