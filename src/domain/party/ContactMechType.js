
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

import {CommunicationEventTypeType} from '../party/CommunicationEventType.js';
import {ValidContactMechRoleType} from '../party/ValidContactMechRole.js';
import {ContactMechTypePurposeType} from '../party/ContactMechTypePurpose.js';
import {CommunicationEventType} from '../party/CommunicationEvent.js';
import {ContactListType} from '../marketing/ContactList.js';
import {ContactMechType} from '../party/ContactMech.js';
import {ContactMechTypeAttrType} from '../party/ContactMechTypeAttr.js';


const ContactMechTypeType = new GraphQLObjectType({
  name: 'ContactMechTypeType',
  description: 'Type for ContactMechType in party',

  fields: () => ({
    parentType: {
      type: ContactMechTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbiz.load(`party/contactMech/contactMechTypes/find?contactMechTypeId=${contactMechType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    contactMechTypeId: {type: GraphQLString},
    validContactMechRoles: {
      type: new GraphQLList(ValidContactMechRoleType),
      args : {},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`party/contactMech/validContactMechRoles/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    contactLists: {
      type: new GraphQLList(ContactListType),
      args : {},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`marketing/contactLists/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    contactMechTypePurposes: {
      type: new GraphQLList(ContactMechTypePurposeType),
      args : {},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`party/contactMech/contactMechTypePurposes/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    communicationEvents: {
      type: new GraphQLList(CommunicationEventType),
      args : {},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvents/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    contactMeches: {
      type: new GraphQLList(ContactMechType),
      args : {},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`party/contactMechs/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    contactMechTypes: {
      type: new GraphQLList(ContactMechTypeType),
      args : {},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`party/contactMech/contactMechTypes/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    contactMechTypeAttrs: {
      type: new GraphQLList(ContactMechTypeAttrType),
      args : {},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`party/contactMech/contactMechTypeAttrs/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    communicationEventTypes: {
      type: new GraphQLList(CommunicationEventTypeType),
      args : {},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvent/communicationEventTypes/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    }
  })
});

export {ContactMechTypeType};
    




const ContactMechTypeInputType = new GraphQLInputObjectType({
  name: 'ContactMechTypeInputType',
  description: 'input type for ContactMechType in party',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    contactMechTypeId: {type: GraphQLString}
  })
});

export {ContactMechTypeInputType};
    