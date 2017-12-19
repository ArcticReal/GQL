
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

import {OrderItemType} from '../../order/OrderItem/OrderItemType.js';
import {ContactMechType} from '../../party/ContactMech/ContactMechType.js';
import {ContactMechPurposeTypeType} from '../../party/ContactMechPurposeType/ContactMechPurposeTypeType.js';


const OrderItemContactMechType = new GraphQLObjectType({
  name: 'OrderItemContactMechType',
  description: 'Type for OrderItemContactMech in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    contactMechPurposeType: {
      type: ContactMechPurposeTypeType,
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (orderItemContactMech, args, {loaders}) => loaders.ofbiz.load(`party/contactMech/contactMechPurposeTypes/find?contactMechPurposeTypeId=${orderItemContactMech.contactMechPurposeTypeId}`)
    },
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemContactMech, args, {loaders}) => loaders.ofbiz.load(`order/orderItems/find?orderId=${orderItemContactMech.orderId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (orderItemContactMech, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${orderItemContactMech.contactMechId}`)
    }
  })
});

export {OrderItemContactMechType};
    