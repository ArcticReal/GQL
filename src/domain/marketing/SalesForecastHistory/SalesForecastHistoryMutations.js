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
import {SalesForecastHistoryResponseType} from '../../marketing/SalesForecastHistory/SalesForecastHistoryResponseType.js';
import {SalesForecastHistoryInputType} from '../../marketing/SalesForecastHistory/SalesForecastHistoryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSalesForecastHistory = {
  type: SalesForecastHistoryResponseType,
  description: 'mutation for ofbiz createSalesForecastHistory method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesForecast/salesForecastHistorys/add?`, null, req);
  }
};
export {createSalesForecastHistory};


const updateSalesForecastHistory = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSalesForecastHistory method',
  args:{salesForecastHistoryToBeUpdated: {type: SalesForecastHistoryInputType},salesForecastHistoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/salesForecast/salesForecastHistorys/${args.salesForecastHistoryId}?`, args.salesForecastHistoryToBeUpdated, req);
  }
};
export {updateSalesForecastHistory};


const deleteSalesForecastHistoryByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSalesForecastHistoryByIdUpdated method',
  args:{salesForecastHistoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/salesForecast/salesForecastHistorys/${args.salesForecastHistoryId}?`, null, req);
  }
};
export {deleteSalesForecastHistoryByIdUpdated};
