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
import {SalesForecastDetailInputType} from '../../marketing/SalesForecastDetail/SalesForecastDetailInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createSalesForecastDetail = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSalesForecastDetail method',
  args:{salesForecastDetailToBeAdded: {type: SalesForecastDetailInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesForecast/salesForecastDetails/add?`, args.salesForecastDetailToBeAdded, req);
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
