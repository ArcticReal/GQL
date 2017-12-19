
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

import {ReturnHeaderType} from '../../order/ReturnHeader/ReturnHeaderType.js';
import {ContactMechType} from '../../party/ContactMech/ContactMechType.js';
import {ContactMechPurposeTypeType} from '../../party/ContactMechPurposeType/ContactMechPurposeTypeType.js';


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
    