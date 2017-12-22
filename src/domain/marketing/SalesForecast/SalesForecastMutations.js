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
import {SalesForecastInputType} from '../../marketing/SalesForecast/SalesForecastInputType.js';
import {SalesForecastResponseType} from '../../marketing/SalesForecast/SalesForecastResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSalesForecast = {
  type: SalesForecastResponseType,
  description: 'mutation for ofbiz createSalesForecast method',
  args:{salesForecastToBeAdded: {type: SalesForecastInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesForecasts/add?`, args.salesForecastToBeAdded, req);
  }
};
export {createSalesForecast};


const updateSalesForecast = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSalesForecast method',
  args:{salesForecastToBeUpdated: {type: SalesForecastInputType},salesForecastId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/salesForecasts/${args.salesForecastId}?`, args.salesForecastToBeUpdated, req);
  }
};
export {updateSalesForecast};


const deleteSalesForecastByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSalesForecastByIdUpdated method',
  args:{salesForecastId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/salesForecasts/${args.salesForecastId}?`, null, req);
  }
};
export {deleteSalesForecastByIdUpdated};
