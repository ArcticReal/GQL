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
import {SalesForecastHistoryInputType} from '../../marketing/SalesForecastHistory/SalesForecastHistoryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSalesForecastHistory = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSalesForecastHistory method',
  args:{salesForecastHistoryToBeAdded: {type: SalesForecastHistoryInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesForecast/salesForecastHistorys/add?`, args.salesForecastHistoryToBeAdded, req);
  }
};
export {createSalesForecastHistory};


const updateSalesForecastHistory = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSalesForecastHistory method',
  args:{salesForecastHistoryToBeUpdated: {type: SalesForecastHistoryInputType},salesForecastHistoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/salesForecast/salesForecastHistorys/${args.salesForecastHistoryId}?`, args.salesForecastHistoryToBeUpdated, req);
  }
};
export {updateSalesForecastHistory};


const deleteSalesForecastHistoryByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSalesForecastHistoryByIdUpdated method',
  args:{salesForecastHistoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/salesForecast/salesForecastHistorys/${args.salesForecastHistoryId}?`, null, req);
  }
};
export {deleteSalesForecastHistoryByIdUpdated};
