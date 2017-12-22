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
import {FinAccountStatusInputType} from '../../accounting/FinAccountStatus/FinAccountStatusInputType.js';
import {FinAccountStatusResponseType} from '../../accounting/FinAccountStatus/FinAccountStatusResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFinAccountStatus = {
  type: FinAccountStatusResponseType,
  description: 'mutation for ofbiz createFinAccountStatus method',
  args:{finAccountStatusToBeAdded: {type: FinAccountStatusInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/finAccount/finAccountStatuss/add?`, args.finAccountStatusToBeAdded, req);
  }
};
export {createFinAccountStatus};


const deleteFinAccountStatusByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFinAccountStatusByIdUpdated method',
  args:{finAccountStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/finAccount/finAccountStatuss/${args.finAccountStatusId}?`, null, req);
  }
};
export {deleteFinAccountStatusByIdUpdated};


const updateFinAccountStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFinAccountStatus method',
  args:{finAccountStatusToBeUpdated: {type: FinAccountStatusInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/finAccount/finAccountStatuss/${args.nullVal}?`, args.finAccountStatusToBeUpdated, req);
  }
};
export {updateFinAccountStatus};
