
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

import {ContactMechTypeType} from '../../party/ContactMechType/ContactMechTypeType.js';
import {ContactMechPurposeTypeType} from '../../party/ContactMechPurposeType/ContactMechPurposeTypeType.js';


const ContactMechTypePurposeType = new GraphQLObjectType({
  name: 'ContactMechTypePurposeType',
  description: 'Type for ContactMechTypePurpose in party',

  fields: () => ({
    contactMechPurposeType: {
      type: ContactMechPurposeTypeType,
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (contactMechTypePurpose, args, {loaders}) => loaders.ofbiz.load(`party/contactMech/contactMechPurposeTypes/find?contactMechPurposeTypeId=${contactMechTypePurpose.contactMechPurposeTypeId}`)
    },
    contactMechType: {
      type: ContactMechTypeType,
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechTypePurpose, args, {loaders}) => loaders.ofbiz.load(`party/contactMech/contactMechTypes/find?contactMechTypeId=${contactMechTypePurpose.contactMechTypeId}`)
    }
  })
});

export {ContactMechTypePurposeType};
    