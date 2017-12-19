
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

import {OrderContactMechType} from '../../order/OrderContactMech/OrderContactMechType.js';
import {ContactMechTypePurposeType} from '../../party/ContactMechTypePurpose/ContactMechTypePurposeType.js';
import {InvoiceContactMechType} from '../../accounting/InvoiceContactMech/InvoiceContactMechType.js';
import {PartyContactMechPurposeType} from '../../party/PartyContactMechPurpose/PartyContactMechPurposeType.js';
import {FacilityContactMechPurposeType} from '../../product/FacilityContactMechPurpose/FacilityContactMechPurposeType.js';
import {OrderItemContactMechType} from '../../order/OrderItemContactMech/OrderItemContactMechType.js';
import {ReturnContactMechType} from '../../order/ReturnContactMech/ReturnContactMechType.js';


const ContactMechPurposeTypeType = new GraphQLObjectType({
  name: 'ContactMechPurposeTypeType',
  description: 'Type for ContactMechPurposeType in party',

  fields: () => ({
    contactMechPurposeTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    facilityContactMechPurposes: {
      type: new GraphQLList(FacilityContactMechPurposeType),
      args : {},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityContactMechPurposes/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    invoiceContactMeches: {
      type: new GraphQLList(InvoiceContactMechType),
      args : {},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceContactMechs/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    orderItemContactMeches: {
      type: new GraphQLList(OrderItemContactMechType),
      args : {},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemContactMechs/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    returnContactMeches: {
      type: new GraphQLList(ReturnContactMechType),
      args : {},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`order/returnContactMechs/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    contactMechTypePurposes: {
      type: new GraphQLList(ContactMechTypePurposeType),
      args : {},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`party/contactMech/contactMechTypePurposes/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    orderContactMeches: {
      type: new GraphQLList(OrderContactMechType),
      args : {},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`order/orderContactMechs/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    partyContactMechPurposes: {
      type: new GraphQLList(PartyContactMechPurposeType),
      args : {},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`party/contactMech/partyContactMechPurposes/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    }
  })
});

export {ContactMechPurposeTypeType};
    