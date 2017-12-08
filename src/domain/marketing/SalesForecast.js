
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

import {PartyType} from '../party/Party.js';
import {SalesForecastHistoryType} from '../marketing/SalesForecastHistory.js';
import {SalesForecastDetailType} from '../marketing/SalesForecastDetail.js';
import {UserLoginType} from '../login/UserLogin.js';


const SalesForecastType = new GraphQLObjectType({
  name: 'SalesForecastType',
  description: 'Type for SalesForecast in marketing',

  fields: () => ({
    forecastAmount: {type: GraphQLFloat},
    pipelineAmount: {type: GraphQLFloat},
    modifiedByUserLogin: {
      type: UserLoginType,
      args : {modifiedByUserLoginId: {type: GraphQLString}},
      resolve: (salesForecast, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${salesForecast.modifiedByUserLoginId}`)
    },
    quotaAmount: {type: GraphQLFloat},
    bestCaseAmount: {type: GraphQLFloat},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLoginId: {type: GraphQLString}},
      resolve: (salesForecast, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${salesForecast.createdByUserLoginId}`)
    },
    internalParty: {
      type: PartyType,
      args : {internalPartyId: {type: GraphQLString}},
      resolve: (salesForecast, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${salesForecast.internalPartyId}`)
    },
    closedAmount: {type: GraphQLFloat},
    salesForecastId: {type: GraphQLString},
    percentOfQuotaForecast: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    parentSalesForecast: {
      type: SalesForecastType,
      args : {parentSalesForecastId: {type: GraphQLString}},
      resolve: (salesForecast, args, {loaders}) => loaders.ofbiz.load(`salesForecasts/find?salesForecastId=${salesForecast.parentSalesForecastId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (salesForecast, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${salesForecast.organizationPartyId}`)
    },
    percentOfQuotaClosed: {type: GraphQLFloat},
    customTimePeriodId: {type: GraphQLString},
    salesForecasts: {
      type: new GraphQLList(SalesForecastType),
      args : {salesForecastId: {type: GraphQLString}},
      resolve: (salesForecast, args, {loaders}) => loaders.ofbizArray.load(`salesForecasts/find?salesForecastId=${salesForecast.salesForecastId}`)
    },
    salesForecastHistories: {
      type: new GraphQLList(SalesForecastHistoryType),
      args : {salesForecastId: {type: GraphQLString}},
      resolve: (salesForecast, args, {loaders}) => loaders.ofbizArray.load(`salesForecastHistorys/find?salesForecastId=${salesForecast.salesForecastId}`)
    },
    salesForecastDetails: {
      type: new GraphQLList(SalesForecastDetailType),
      args : {salesForecastId: {type: GraphQLString}},
      resolve: (salesForecast, args, {loaders}) => loaders.ofbizArray.load(`salesForecastDetails/find?salesForecastId=${salesForecast.salesForecastId}`)
    }
  })
});

export {SalesForecastType};
    




const SalesForecastInputType = new GraphQLInputObjectType({
  name: 'SalesForecastInputType',
  description: 'input type for SalesForecast in marketing',

  fields: () => ({
    forecastAmount: {type: GraphQLFloat},
    pipelineAmount: {type: GraphQLFloat},
    modifiedByUserLoginId: {type: GraphQLString},
    quotaAmount: {type: GraphQLFloat},
    bestCaseAmount: {type: GraphQLFloat},
    createdByUserLoginId: {type: GraphQLString},
    internalPartyId: {type: GraphQLString},
    closedAmount: {type: GraphQLFloat},
    salesForecastId: {type: GraphQLString},
    percentOfQuotaForecast: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    parentSalesForecastId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    percentOfQuotaClosed: {type: GraphQLFloat},
    customTimePeriodId: {type: GraphQLString}
  })
});

export {SalesForecastInputType};
    