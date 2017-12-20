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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSalesForecast = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSalesForecast method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesForecasts/add?`, null, req);
  }
};
export {createSalesForecast};


const updateSalesForecast = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSalesForecast method',
  args:{salesForecastToBeUpdated: {type: SalesForecastInputType},salesForecastId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/salesForecasts/${args.salesForecastId}?`, args.salesForecastToBeUpdated, req);
  }
};
export {updateSalesForecast};


const deleteSalesForecastByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSalesForecastByIdUpdated method',
  args:{salesForecastId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/salesForecasts/${args.salesForecastId}?`, null, req);
  }
};
export {deleteSalesForecastByIdUpdated};
