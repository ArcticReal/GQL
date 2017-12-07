
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CommunicationEventTypeType} from '../party/CommunicationEventTypeType.js';
import {ValidContactMechRoleType} from '../party/ValidContactMechRoleType.js';
import {ContactMechTypePurposeType} from '../party/ContactMechTypePurposeType.js';
import {CommunicationEventType} from '../party/CommunicationEventType.js';
import {ContactListType} from '../marketing/ContactListType.js';
import {ContactMechType} from '../party/ContactMechType.js';
import {ContactMechTypeAttrType} from '../party/ContactMechTypeAttrType.js';


const ContactMechTypeType = new GraphQLObjectType({
  name: 'ContactMechTypeType',
  description: 'Type for ContactMechType in party',

  fields: () => ({
    parentType: {
      type: ContactMechTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbiz.load(`contactMechTypes/find?contactMechTypeId=${contactMechType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    contactMechTypeId: {type: GraphQLString},
    validContactMechRole: {
      type: new GraphQLList(ValidContactMechRoleType),
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`validContactMechRoles/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    contactList: {
      type: new GraphQLList(ContactListType),
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`contactLists/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    contactMechTypePurpose: {
      type: new GraphQLList(ContactMechTypePurposeType),
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`contactMechTypePurposes/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    communicationEvent: {
      type: new GraphQLList(CommunicationEventType),
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`communicationEvents/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    contactMech: {
      type: new GraphQLList(ContactMechType),
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`contactMechs/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    contactMechType: {
      type: new GraphQLList(ContactMechTypeType),
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`contactMechTypes/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    contactMechTypeAttr: {
      type: new GraphQLList(ContactMechTypeAttrType),
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`contactMechTypeAttrs/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    communicationEventType: {
      type: new GraphQLList(CommunicationEventTypeType),
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`communicationEventTypes/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    }
  })
});

export {ContactMechTypeType};
    