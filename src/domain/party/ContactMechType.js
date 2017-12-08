
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
      resolve: (contactMechType, args, {loaders}) => loaders.ofbiz.load(`contactMechTypes/find?contactMechTypeId=${contactMechType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    contactMechTypeId: {type: GraphQLString},
    validContactMechRoles: {
      type: new GraphQLList(ValidContactMechRoleType),
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`validContactMechRoles/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    contactLists: {
      type: new GraphQLList(ContactListType),
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`contactLists/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    contactMechTypePurposes: {
      type: new GraphQLList(ContactMechTypePurposeType),
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`contactMechTypePurposes/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    communicationEvents: {
      type: new GraphQLList(CommunicationEventType),
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`communicationEvents/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    contactMeches: {
      type: new GraphQLList(ContactMechType),
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`contactMechs/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    contactMechTypes: {
      type: new GraphQLList(ContactMechTypeType),
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`contactMechTypes/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    contactMechTypeAttrs: {
      type: new GraphQLList(ContactMechTypeAttrType),
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`contactMechTypeAttrs/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
    },
    communicationEventTypes: {
      type: new GraphQLList(CommunicationEventTypeType),
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechType, args, {loaders}) => loaders.ofbizArray.load(`communicationEventTypes/find?contactMechTypeId=${contactMechType.contactMechTypeId}`)
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
    