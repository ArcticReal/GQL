
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderTermAttributeType} from '../order/OrderTermAttributeType.js';
import {OrderHeaderType} from '../order/OrderHeaderType.js';
import {TermTypeType} from '../party/TermTypeType.js';


const OrderTermType = new GraphQLObjectType({
  name: 'OrderTermType',
  description: 'Type for OrderTerm in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    textValue: {type: GraphQLString},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderTerm, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${orderTerm.orderId}`)
    },
    termDays: {type: GraphQLInt},
    termType: {
      type: TermTypeType,
      args : {termTypeId: {type: GraphQLString}},
      resolve: (orderTerm, args, {loaders}) => loaders.ofbiz.load(`termTypes/find?termTypeId=${orderTerm.termTypeId}`)
    },
    description: {type: GraphQLString},
    uomId: {type: GraphQLString},
    termValue: {type: GraphQLFloat},
    orderTermAttribute: {
      type: new GraphQLList(OrderTermAttributeType),
      args : {termTypeId: {type: GraphQLString}},
      resolve: (orderTerm, args, {loaders}) => loaders.ofbizArray.load(`orderTermAttributes/find?termTypeId=${orderTerm.termTypeId}`)
    }
  })
});

export {OrderTermType};
    