
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

import {OrderContactMechType} from '../order/OrderContactMech.js';
import {ContactMechTypePurposeType} from '../party/ContactMechTypePurpose.js';
import {InvoiceContactMechType} from '../accounting/InvoiceContactMech.js';
import {PartyContactMechPurposeType} from '../party/PartyContactMechPurpose.js';
import {FacilityContactMechPurposeType} from '../product/FacilityContactMechPurpose.js';
import {OrderItemContactMechType} from '../order/OrderItemContactMech.js';
import {ReturnContactMechType} from '../order/ReturnContactMech.js';


const ContactMechPurposeTypeType = new GraphQLObjectType({
  name: 'ContactMechPurposeTypeType',
  description: 'Type for ContactMechPurposeType in party',

  fields: () => ({
    contactMechPurposeTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    facilityContactMechPurposes: {
      type: new GraphQLList(FacilityContactMechPurposeType),
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`facilityContactMechPurposes/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    invoiceContactMeches: {
      type: new GraphQLList(InvoiceContactMechType),
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`invoiceContactMechs/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    orderItemContactMeches: {
      type: new GraphQLList(OrderItemContactMechType),
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`orderItemContactMechs/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    returnContactMeches: {
      type: new GraphQLList(ReturnContactMechType),
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`returnContactMechs/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    contactMechTypePurposes: {
      type: new GraphQLList(ContactMechTypePurposeType),
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`contactMechTypePurposes/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    orderContactMeches: {
      type: new GraphQLList(OrderContactMechType),
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`orderContactMechs/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    },
    partyContactMechPurposes: {
      type: new GraphQLList(PartyContactMechPurposeType),
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (contactMechPurposeType, args, {loaders}) => loaders.ofbizArray.load(`partyContactMechPurposes/find?contactMechPurposeTypeId=${contactMechPurposeType.contactMechPurposeTypeId}`)
    }
  })
});

export {ContactMechPurposeTypeType};
    




const ContactMechPurposeTypeInputType = new GraphQLInputObjectType({
  name: 'ContactMechPurposeTypeInputType',
  description: 'input type for ContactMechPurposeType in party',

  fields: () => ({
    contactMechPurposeTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContactMechPurposeTypeInputType};
    