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
import {UserLoginSessionInputType} from '../../login/UserLoginSession/UserLoginSessionInputType.js';
import {UserLoginSessionResponseType} from '../../login/UserLoginSession/UserLoginSessionResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createUserLoginSession = {
  type: UserLoginSessionResponseType,
  description: 'mutation for ofbiz createUserLoginSession method',
  args:{userLoginSessionToBeAdded: {type: UserLoginSessionInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`login/userLogin/userLoginSessions/add?`, args.userLoginSessionToBeAdded, req);
  }
};
export {createUserLoginSession};


const updateUserLoginSession = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateUserLoginSession method',
  args:{userLoginSessionToBeUpdated: {type: UserLoginSessionInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`login/userLogin/userLoginSessions/${args.nullVal}?`, args.userLoginSessionToBeUpdated, req);
  }
};
export {updateUserLoginSession};


const deleteUserLoginSessionByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteUserLoginSessionByIdUpdated method',
  args:{userLoginSessionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`login/userLogin/userLoginSessions/${args.userLoginSessionId}?`, null, req);
  }
};
export {deleteUserLoginSessionByIdUpdated};
