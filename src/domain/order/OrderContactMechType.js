
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderHeaderType} from '../order/OrderHeaderType.js';
import {ContactMechType} from '../party/ContactMechType.js';
import {ContactMechPurposeTypeType} from '../party/ContactMechPurposeTypeType.js';


const OrderContactMechType = new GraphQLObjectType({
  name: 'OrderContactMechType',
  description: 'Type for OrderContactMech in order',

  fields: () => ({
    contactMechPurposeType: {
      type: ContactMechPurposeTypeType,
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (orderContactMech, args, {loaders}) => loaders.ofbiz.load(`contactMechPurposeTypes/find?contactMechPurposeTypeId=${orderContactMech.contactMechPurposeTypeId}`)
    },
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderContactMech, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${orderContactMech.orderId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (orderContactMech, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${orderContactMech.contactMechId}`)
    }
  })
});

export {OrderContactMechType};
    