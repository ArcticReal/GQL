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
import {FinAccountTransInputType} from '../../accounting/FinAccountTrans/FinAccountTransInputType.js';
import {FinAccountTransResponseType} from '../../accounting/FinAccountTrans/FinAccountTransResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFinAccountTrans = {
  type: FinAccountTransResponseType,
  description: 'mutation for ofbiz createFinAccountTrans method',
  args:{finAccountTransToBeAdded: {type: FinAccountTransInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/finAccount/finAccountTranss/add?`, args.finAccountTransToBeAdded, req);
  }
};
export {createFinAccountTrans};


const updateFinAccountTrans = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFinAccountTrans method',
  args:{finAccountTransToBeUpdated: {type: FinAccountTransInputType},finAccountTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/finAccount/finAccountTranss/${args.finAccountTransId}?`, args.finAccountTransToBeUpdated, req);
  }
};
export {updateFinAccountTrans};


const deleteFinAccountTransByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFinAccountTransByIdUpdated method',
  args:{finAccountTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/finAccount/finAccountTranss/${args.finAccountTransId}?`, null, req);
  }
};
export {deleteFinAccountTransByIdUpdated};
