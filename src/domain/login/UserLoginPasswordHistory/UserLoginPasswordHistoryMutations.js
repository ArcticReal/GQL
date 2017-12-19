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
import {UserLoginPasswordHistoryInputType} from '../../login/UserLoginPasswordHistory/UserLoginPasswordHistoryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createUserLoginPasswordHistory = {
  type: GraphQLString,
  description: 'mutation for ofbiz createUserLoginPasswordHistory method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`login/userLogin/userLoginPasswordHistorys/add?`, null, req);
  }
};
export {createUserLoginPasswordHistory};


const updateUserLoginPasswordHistory = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateUserLoginPasswordHistory method',
  args:{userLoginPasswordHistoryToBeUpdated: {type: UserLoginPasswordHistoryInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`login/userLogin/userLoginPasswordHistorys/${args.nullVal}?`, args.userLoginPasswordHistoryToBeUpdated, req);
  }
};
export {updateUserLoginPasswordHistory};


const deleteUserLoginPasswordHistoryByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteUserLoginPasswordHistoryByIdUpdated method',
  args:{userLoginPasswordHistoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`login/userLogin/userLoginPasswordHistorys/${args.userLoginPasswordHistoryId}?`, null, req);
  }
};
export {deleteUserLoginPasswordHistoryByIdUpdated};
