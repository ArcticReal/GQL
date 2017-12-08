
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

import {OrderTermType} from '../order/OrderTerm.js';


const OrderTermAttributeType = new GraphQLObjectType({
  name: 'OrderTermAttributeType',
  description: 'Type for OrderTermAttribute in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    termType: {
      type: OrderTermType,
      args : {termTypeId: {type: GraphQLString}},
      resolve: (orderTermAttribute, args, {loaders}) => loaders.ofbiz.load(`orderTerms/find?termTypeId=${orderTermAttribute.termTypeId}`)
    },
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {OrderTermAttributeType};
    




const OrderTermAttributeInputType = new GraphQLInputObjectType({
  name: 'OrderTermAttributeInputType',
  description: 'input type for OrderTermAttribute in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    termTypeId: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {OrderTermAttributeInputType};
    