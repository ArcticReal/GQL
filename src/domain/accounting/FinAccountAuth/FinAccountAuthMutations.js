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
import {FinAccountAuthInputType} from '../../accounting/FinAccountAuth/FinAccountAuthInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFinAccountAuth = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFinAccountAuth method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/finAccount/finAccountAuths/add?`, null, req);
  }
};
export {createFinAccountAuth};


const updateFinAccountAuth = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFinAccountAuth method',
  args:{finAccountAuthToBeUpdated: {type: FinAccountAuthInputType},finAccountAuthId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/finAccount/finAccountAuths/${args.finAccountAuthId}?`, args.finAccountAuthToBeUpdated, req);
  }
};
export {updateFinAccountAuth};


const deleteFinAccountAuthByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFinAccountAuthByIdUpdated method',
  args:{finAccountAuthId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/finAccount/finAccountAuths/${args.finAccountAuthId}?`, null, req);
  }
};
export {deleteFinAccountAuthByIdUpdated};
