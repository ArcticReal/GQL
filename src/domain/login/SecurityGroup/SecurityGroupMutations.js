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
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSecurityGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSecurityGroup method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`login/securityGroups/add?`, null, req);
  }
};
export {createSecurityGroup};


const updateSecurityGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSecurityGroup method',
  args:{securityGroupToBeUpdated: {type: SecurityGroupInputType},groupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`login/securityGroups/${args.groupId}?`, args.securityGroupToBeUpdated, req);
  }
};
export {updateSecurityGroup};


const deleteSecurityGroupByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSecurityGroupByIdUpdated method',
  args:{securityGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`login/securityGroups/${args.securityGroupId}?`, null, req);
  }
};
export {deleteSecurityGroupByIdUpdated};
