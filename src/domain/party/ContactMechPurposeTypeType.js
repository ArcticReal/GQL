
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderContactMechType} from '../order/OrderContactMechType.js';
import {ContactMechTypePurposeType} from '../party/ContactMechTypePurposeType.js';
import {InvoiceContactMechType} from '../accounting/InvoiceContactMechType.js';
import {PartyContactMechPurposeType} from '../party/PartyContactMechPurposeType.js';
import {FacilityContactMechPurposeType} from '../product/FacilityContactMechPurposeType.js';
import {OrderItemContactMechType} from '../order/OrderItemContactMechType.js';
import {ReturnContactMechType} from '../order/ReturnContactMechType.js';


const ContactMechPurposeTypeType = new GraphQLObjectType({
  name: 'ContactMechPurposeTypeType',
  description: 'Type for ContactMechPurposeType in party',

  fields: () => ({
    contactMechPurposeTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    facilityContactMechPurpose: {
      type: new GraphQLList(FacilityContactMechPurposeType),
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`facilityContactMechPurposes/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    invoiceContactMech: {
      type: new GraphQLList(InvoiceContactMechType),
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`invoiceContactMechs/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    orderItemContactMech: {
      type: new GraphQLList(OrderItemContactMechType),
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`orderItemContactMechs/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    returnContactMech: {
      type: new GraphQLList(ReturnContactMechType),
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`returnContactMechs/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    contactMechTypePurpose: {
      type: new GraphQLList(ContactMechTypePurposeType),
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`contactMechTypePurposes/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    orderContactMech: {
      type: new GraphQLList(OrderContactMechType),
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`orderContactMechs/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    partyContactMechPurpose: {
      type: new GraphQLList(PartyContactMechPurposeType),
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`partyContactMechPurposes/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    }
  })
});

export {ContactMechPurposeTypeType};
    