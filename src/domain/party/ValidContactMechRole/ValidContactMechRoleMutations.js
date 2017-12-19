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
import {ValidContactMechRoleInputType} from '../../party/ValidContactMechRole/ValidContactMechRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createValidContactMechRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createValidContactMechRole method',
  args:{validContactMechRoleToBeAdded: {type: ValidContactMechRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/contactMech/validContactMechRoles/add?`, args.validContactMechRoleToBeAdded, req);
  }
};
export {createValidContactMechRole};


const updateValidContactMechRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateValidContactMechRole method',
  args:{validContactMechRoleToBeUpdated: {type: ValidContactMechRoleInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/contactMech/validContactMechRoles/${args.nullVal}?`, args.validContactMechRoleToBeUpdated, req);
  }
};
export {updateValidContactMechRole};


const deleteValidContactMechRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteValidContactMechRoleByIdUpdated method',
  args:{validContactMechRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/contactMech/validContactMechRoles/${args.validContactMechRoleId}?`, null, req);
  }
};
export {deleteValidContactMechRoleByIdUpdated};
