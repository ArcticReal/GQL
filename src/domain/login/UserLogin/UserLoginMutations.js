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
import {UserLoginResponseType} from '../../login/UserLogin/UserLoginResponseType.js';
import {UserLoginInputType} from '../../login/UserLogin/UserLoginInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createUserLogin = {
  type: UserLoginResponseType,
  description: 'mutation for ofbiz createUserLogin method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`login/userLogins/add?`, null, req);
  }
};
export {createUserLogin};


const updateUserLogin = {
  type: ResponseType,
  description: 'mutation for ofbiz updateUserLogin method',
  args:{userLoginToBeUpdated: {type: UserLoginInputType},userLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`login/userLogins/${args.userLoginId}?`, args.userLoginToBeUpdated, req);
  }
};
export {updateUserLogin};


const deleteUserLoginByIdUpdated = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteUserLoginByIdUpdated method',
  args:{userLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`login/userLogins/${args.userLoginId}?`, null, req);
  }
};
export {deleteUserLoginByIdUpdated};
