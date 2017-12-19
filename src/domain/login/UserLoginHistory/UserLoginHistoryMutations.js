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
import {UserLoginHistoryInputType} from '../../login/UserLoginHistory/UserLoginHistoryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createUserLoginHistory = {
  type: GraphQLString,
  description: 'mutation for ofbiz createUserLoginHistory method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`login/userLogin/userLoginHistorys/add?`, null, req);
  }
};
export {createUserLoginHistory};


const updateUserLoginHistory = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateUserLoginHistory method',
  args:{userLoginHistoryToBeUpdated: {type: UserLoginHistoryInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`login/userLogin/userLoginHistorys/${args.nullVal}?`, args.userLoginHistoryToBeUpdated, req);
  }
};
export {updateUserLoginHistory};


const deleteUserLoginHistoryByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteUserLoginHistoryByIdUpdated method',
  args:{userLoginHistoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`login/userLogin/userLoginHistorys/${args.userLoginHistoryId}?`, null, req);
  }
};
export {deleteUserLoginHistoryByIdUpdated};
