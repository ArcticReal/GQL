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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createSecurityGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSecurityGroup method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`login/securityGroups/add?`, null, req);
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
