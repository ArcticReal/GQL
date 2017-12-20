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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFinAccountStatus = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFinAccountStatus method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/finAccount/finAccountStatuss/add?`, null, req);
  }
};
export {createFinAccountStatus};


const deleteFinAccountStatusByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFinAccountStatusByIdUpdated method',
  args:{finAccountStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/finAccount/finAccountStatuss/${args.finAccountStatusId}?`, null, req);
  }
};
export {deleteFinAccountStatusByIdUpdated};


const updateFinAccountStatus = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFinAccountStatus method',
  args:{finAccountStatusToBeUpdated: {type: FinAccountStatusInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/finAccount/finAccountStatuss/${args.nullVal}?`, args.finAccountStatusToBeUpdated, req);
  }
};
export {updateFinAccountStatus};
