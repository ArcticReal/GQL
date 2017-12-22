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
import {FinAccountAuthResponseType} from '../../accounting/FinAccountAuth/FinAccountAuthResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFinAccountAuth = {
  type: FinAccountAuthResponseType,
  description: 'mutation for ofbiz createFinAccountAuth method',
  args:{finAccountAuthToBeAdded: {type: FinAccountAuthInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/finAccount/finAccountAuths/add?`, args.finAccountAuthToBeAdded, req);
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
