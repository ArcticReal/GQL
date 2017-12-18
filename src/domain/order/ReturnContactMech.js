
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

import {ReturnHeaderType} from '../order/ReturnHeader.js';
import {ContactMechType} from '../party/ContactMech.js';
import {ContactMechPurposeTypeType} from '../party/ContactMechPurposeType.js';


const ReturnContactMechType = new GraphQLObjectType({
  name: 'ReturnContactMechType',
  description: 'Type for ReturnContactMech in order',

  fields: () => ({
    contactMechPurposeType: {
      type: ContactMechPurposeTypeType,
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (returnContactMech, args, {loaders}) => loaders.ofbiz.load(`party/contactMech/contactMechPurposeTypes/find?contactMechPurposeTypeId=${returnContactMech.contactMechPurposeTypeId}`)
    },
    return: {
      type: ReturnHeaderType,
      args : {returnId: {type: GraphQLString}},
      resolve: (returnContactMech, args, {loaders}) => loaders.ofbiz.load(`order/returnHeaders/find?returnId=${returnContactMech.returnId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (returnContactMech, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${returnContactMech.contactMechId}`)
    }
  })
});

export {ReturnContactMechType};
    




const ReturnContactMechInputType = new GraphQLInputObjectType({
  name: 'ReturnContactMechInputType',
  description: 'input type for ReturnContactMech',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    contactMechPurposeTypeId: {type: GraphQLString},
    returnId: {type: GraphQLString}
  })
});

export {ReturnContactMechInputType};
    