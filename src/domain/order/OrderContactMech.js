
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

import {OrderHeaderType} from '../order/OrderHeader.js';
import {ContactMechType} from '../party/ContactMech.js';
import {ContactMechPurposeTypeType} from '../party/ContactMechPurposeType.js';


const OrderContactMechType = new GraphQLObjectType({
  name: 'OrderContactMechType',
  description: 'Type for OrderContactMech in order',

  fields: () => ({
    contactMechPurposeType: {
      type: ContactMechPurposeTypeType,
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (orderContactMech, args, {loaders}) => loaders.ofbiz.load(`party/contactMech/contactMechPurposeTypes/find?contactMechPurposeTypeId=${orderContactMech.contactMechPurposeTypeId}`)
    },
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderContactMech, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${orderContactMech.orderId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (orderContactMech, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${orderContactMech.contactMechId}`)
    }
  })
});

export {OrderContactMechType};
    




const OrderContactMechInputType = new GraphQLInputObjectType({
  name: 'OrderContactMechInputType',
  description: 'input type for OrderContactMech in order',

  fields: () => ({
    contactMechPurposeTypeId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    contactMechId: {type: GraphQLString}
  })
});

export {OrderContactMechInputType};
    