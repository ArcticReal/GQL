
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

import {OrderTermAttributeType} from '../order/OrderTermAttribute.js';
import {OrderHeaderType} from '../order/OrderHeader.js';
import {TermTypeType} from '../party/TermType.js';


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
    




const OrderTermInputType = new GraphQLInputObjectType({
  name: 'OrderTermInputType',
  description: 'input type for OrderTerm in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    textValue: {type: GraphQLString},
    orderId: {type: GraphQLString},
    termDays: {type: GraphQLInt},
    termTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    uomId: {type: GraphQLString},
    termValue: {type: GraphQLFloat}
  })
});

export {OrderTermInputType};
    