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
import {SecurityGroupInputType} from '../../login/SecurityGroup/SecurityGroupInputType.js';
import {SecurityGroupResponseType} from '../../login/SecurityGroup/SecurityGroupResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSecurityGroup = {
  type: SecurityGroupResponseType,
  description: 'mutation for ofbiz createSecurityGroup method',
  args:{securityGroupToBeAdded: {type: SecurityGroupInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`login/securityGroups/add?`, args.securityGroupToBeAdded, req);
  }
};
export {createSecurityGroup};


const updateSecurityGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSecurityGroup method',
  args:{securityGroupToBeUpdated: {type: SecurityGroupInputType},groupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`login/securityGroups/${args.groupId}?`, args.securityGroupToBeUpdated, req);
  }
};
export {updateSecurityGroup};


const deleteSecurityGroupByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSecurityGroupByIdUpdated method',
  args:{securityGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`login/securityGroups/${args.securityGroupId}?`, null, req);
  }
};
export {deleteSecurityGroupByIdUpdated};
