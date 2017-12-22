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
import {SalesForecastDetailResponseType} from '../../marketing/SalesForecastDetail/SalesForecastDetailResponseType.js';
import {SalesForecastDetailInputType} from '../../marketing/SalesForecastDetail/SalesForecastDetailInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSalesForecastDetail = {
  type: SalesForecastDetailResponseType,
  description: 'mutation for ofbiz createSalesForecastDetail method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesForecast/salesForecastDetails/add?`, null, req);
  }
};
export {createSalesForecastDetail};


const updateSalesForecastDetail = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSalesForecastDetail method',
  args:{salesForecastDetailToBeUpdated: {type: SalesForecastDetailInputType},salesForecastDetailId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/salesForecast/salesForecastDetails/${args.salesForecastDetailId}?`, args.salesForecastDetailToBeUpdated, req);
  }
};
export {updateSalesForecastDetail};


const deleteSalesForecastDetailByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSalesForecastDetailByIdUpdated method',
  args:{salesForecastDetailId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/salesForecast/salesForecastDetails/${args.salesForecastDetailId}?`, null, req);
  }
};
export {deleteSalesForecastDetailByIdUpdated};
