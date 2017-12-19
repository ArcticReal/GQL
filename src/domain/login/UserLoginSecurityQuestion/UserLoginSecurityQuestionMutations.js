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
import {UserLoginSecurityQuestionInputType} from '../../login/UserLoginSecurityQuestion/UserLoginSecurityQuestionInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createUserLoginSecurityQuestion = {
  type: GraphQLString,
  description: 'mutation for ofbiz createUserLoginSecurityQuestion method',
  args:{userLoginSecurityQuestionToBeAdded: {type: UserLoginSecurityQuestionInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`login/userLogin/userLoginSecurityQuestions/add?`, args.userLoginSecurityQuestionToBeAdded, req);
  }
};
export {createUserLoginSecurityQuestion};


const updateUserLoginSecurityQuestion = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateUserLoginSecurityQuestion method',
  args:{userLoginSecurityQuestionToBeUpdated: {type: UserLoginSecurityQuestionInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`login/userLogin/userLoginSecurityQuestions/${args.nullVal}?`, args.userLoginSecurityQuestionToBeUpdated, req);
  }
};
export {updateUserLoginSecurityQuestion};


const deleteUserLoginSecurityQuestionByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteUserLoginSecurityQuestionByIdUpdated method',
  args:{userLoginSecurityQuestionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`login/userLogin/userLoginSecurityQuestions/${args.userLoginSecurityQuestionId}?`, null, req);
  }
};
export {deleteUserLoginSecurityQuestionByIdUpdated};
