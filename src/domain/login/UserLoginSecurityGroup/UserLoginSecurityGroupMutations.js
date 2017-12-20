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
import {UserLoginSecurityGroupInputType} from '../../login/UserLoginSecurityGroup/UserLoginSecurityGroupInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createUserLoginSecurityGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz createUserLoginSecurityGroup method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`login/userLogin/userLoginSecurityGroups/add?`, null, req);
  }
};
export {createUserLoginSecurityGroup};


const updateUserLoginSecurityGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateUserLoginSecurityGroup method',
  args:{userLoginSecurityGroupToBeUpdated: {type: UserLoginSecurityGroupInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`login/userLogin/userLoginSecurityGroups/${args.nullVal}?`, args.userLoginSecurityGroupToBeUpdated, req);
  }
};
export {updateUserLoginSecurityGroup};


const deleteUserLoginSecurityGroupByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteUserLoginSecurityGroupByIdUpdated method',
  args:{userLoginSecurityGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`login/userLogin/userLoginSecurityGroups/${args.userLoginSecurityGroupId}?`, null, req);
  }
};
export {deleteUserLoginSecurityGroupByIdUpdated};
