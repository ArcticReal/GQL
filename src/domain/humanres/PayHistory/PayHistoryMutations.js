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
import {PayHistoryInputType} from '../../humanres/PayHistory/PayHistoryInputType.js';
import {PayHistoryResponseType} from '../../humanres/PayHistory/PayHistoryResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPayHistory = {
  type: PayHistoryResponseType,
  description: 'mutation for ofbiz createPayHistory method',
  args:{payHistoryToBeAdded: {type: PayHistoryInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/payHistorys/add?`, args.payHistoryToBeAdded, req);
  }
};
export {createPayHistory};


const updatePayHistory = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePayHistory method',
  args:{payHistoryToBeUpdated: {type: PayHistoryInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/payHistorys/${args.nullVal}?`, args.payHistoryToBeUpdated, req);
  }
};
export {updatePayHistory};


const deletePayHistoryByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePayHistoryByIdUpdated method',
  args:{payHistoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/payHistorys/${args.payHistoryId}?`, null, req);
  }
};
export {deletePayHistoryByIdUpdated};
