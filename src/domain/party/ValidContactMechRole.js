
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

import {ContactMechTypeType} from '../party/ContactMechType.js';
import {RoleTypeType} from '../party/RoleType.js';


const ValidContactMechRoleType = new GraphQLObjectType({
  name: 'ValidContactMechRoleType',
  description: 'Type for ValidContactMechRole in party',

  fields: () => ({
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (validContactMechRole, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${validContactMechRole.roleTypeId}`)
    },
    contactMechType: {
      type: ContactMechTypeType,
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (validContactMechRole, args, {loaders}) => loaders.ofbiz.load(`party/contactMech/contactMechTypes/find?contactMechTypeId=${validContactMechRole.contactMechTypeId}`)
    }
  })
});

export {ValidContactMechRoleType};
    




const ValidContactMechRoleInputType = new GraphQLInputObjectType({
  name: 'ValidContactMechRoleInputType',
  description: 'input type for ValidContactMechRole',

  fields: () => ({
    contactMechTypeId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {ValidContactMechRoleInputType};
    