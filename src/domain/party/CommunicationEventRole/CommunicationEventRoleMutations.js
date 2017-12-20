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
import {CommunicationEventRoleInputType} from '../../party/CommunicationEventRole/CommunicationEventRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCommunicationEventRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCommunicationEventRole method',
  args:{communicationEventRoleToBeAdded: {type: CommunicationEventRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/communicationEvent/communicationEventRoles/add?`, args.communicationEventRoleToBeAdded, req);
  }
};
export {createCommunicationEventRole};


const deleteCommunicationEventRoleByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCommunicationEventRoleByIdUpdated method',
  args:{communicationEventRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/communicationEvent/communicationEventRoles/${args.communicationEventRoleId}?`, null, req);
  }
};
export {deleteCommunicationEventRoleByIdUpdated};


const updateCommunicationEventRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCommunicationEventRole method',
  args:{communicationEventRoleToBeUpdated: {type: CommunicationEventRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/communicationEvent/communicationEventRoles/${args.roleTypeId}?`, args.communicationEventRoleToBeUpdated, req);
  }
};
export {updateCommunicationEventRole};
