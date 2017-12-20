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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPayHistory = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPayHistory method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/payHistorys/add?`, null, req);
  }
};
export {createPayHistory};


const updatePayHistory = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePayHistory method',
  args:{payHistoryToBeUpdated: {type: PayHistoryInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/payHistorys/${args.nullVal}?`, args.payHistoryToBeUpdated, req);
  }
};
export {updatePayHistory};


const deletePayHistoryByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePayHistoryByIdUpdated method',
  args:{payHistoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/payHistorys/${args.payHistoryId}?`, null, req);
  }
};
export {deletePayHistoryByIdUpdated};
