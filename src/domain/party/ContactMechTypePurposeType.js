
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContactMechTypeType} from '../party/ContactMechTypeType.js';
import {ContactMechPurposeTypeType} from '../party/ContactMechPurposeTypeType.js';


const ContactMechTypePurposeType = new GraphQLObjectType({
  name: 'ContactMechTypePurposeType',
  description: 'Type for ContactMechTypePurpose in party',

  fields: () => ({
    contactMechPurposeType: {
      type: ContactMechPurposeTypeType,
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (contactMechTypePurpose, args, {loaders}) => loaders.ofbiz.load(`contactMechPurposeTypes/find?contactMechPurposeTypeId=${contactMechTypePurpose.contactMechPurposeTypeId}`)
    },
    contactMechType: {
      type: ContactMechTypeType,
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechTypePurpose, args, {loaders}) => loaders.ofbiz.load(`contactMechTypes/find?contactMechTypeId=${contactMechTypePurpose.contactMechTypeId}`)
    }
  })
});

export {ContactMechTypePurposeType};
    