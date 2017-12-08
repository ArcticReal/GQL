
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
      resolve: (returnContactMech, args, {loaders}) => loaders.ofbiz.load(`contactMechPurposeTypes/find?contactMechPurposeTypeId=${returnContactMech.contactMechPurposeTypeId}`)
    },
    return: {
      type: ReturnHeaderType,
      args : {returnId: {type: GraphQLString}},
      resolve: (returnContactMech, args, {loaders}) => loaders.ofbiz.load(`returnHeaders/find?returnId=${returnContactMech.returnId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (returnContactMech, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${returnContactMech.contactMechId}`)
    }
  })
});

export {ReturnContactMechType};
    




const ReturnContactMechInputType = new GraphQLInputObjectType({
  name: 'ReturnContactMechInputType',
  description: 'input type for ReturnContactMech in order',

  fields: () => ({
    contactMechPurposeTypeId: {type: GraphQLString},
    returnId: {type: GraphQLString},
    contactMechId: {type: GraphQLString}
  })
});

export {ReturnContactMechInputType};
    