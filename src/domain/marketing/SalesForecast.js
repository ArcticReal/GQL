
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
      resolve: (salesForecast, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${salesForecast.modifiedByUserLoginId}`)
    },
    quotaAmount: {type: GraphQLFloat},
    bestCaseAmount: {type: GraphQLFloat},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLoginId: {type: GraphQLString}},
      resolve: (salesForecast, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${salesForecast.createdByUserLoginId}`)
    },
    internalParty: {
      type: PartyType,
      args : {internalPartyId: {type: GraphQLString}},
      resolve: (salesForecast, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${salesForecast.internalPartyId}`)
    },
    closedAmount: {type: GraphQLFloat},
    salesForecastId: {type: GraphQLString},
    percentOfQuotaForecast: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    parentSalesForecast: {
      type: SalesForecastType,
      args : {parentSalesForecastId: {type: GraphQLString}},
      resolve: (salesForecast, args, {loaders}) => loaders.ofbiz.load(`marketing/salesForecasts/find?salesForecastId=${salesForecast.parentSalesForecastId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (salesForecast, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${salesForecast.organizationPartyId}`)
    },
    percentOfQuotaClosed: {type: GraphQLFloat},
    customTimePeriodId: {type: GraphQLString},
    salesForecasts: {
      type: new GraphQLList(SalesForecastType),
      args : {},
      resolve: (salesForecast, args, {loaders}) => loaders.ofbizArray.load(`marketing/salesForecasts/find?salesForecastId=${salesForecast.salesForecastId}`)
    },
    salesForecastHistories: {
      type: new GraphQLList(SalesForecastHistoryType),
      args : {},
      resolve: (salesForecast, args, {loaders}) => loaders.ofbizArray.load(`marketing/salesForecast/salesForecastHistorys/find?salesForecastId=${salesForecast.salesForecastId}`)
    },
    salesForecastDetails: {
      type: new GraphQLList(SalesForecastDetailType),
      args : {},
      resolve: (salesForecast, args, {loaders}) => loaders.ofbizArray.load(`marketing/salesForecast/salesForecastDetails/find?salesForecastId=${salesForecast.salesForecastId}`)
    }
  })
});

export {SalesForecastType};
    




const SalesForecastInputType = new GraphQLInputObjectType({
  name: 'SalesForecastInputType',
  description: 'input type for SalesForecast',

  fields: () => ({
    bestCaseAmount: {type: GraphQLFloat},
    closedAmount: {type: GraphQLFloat},
    createdByUserLoginId: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    customTimePeriodId: {type: GraphQLString},
    forecastAmount: {type: GraphQLFloat},
    internalPartyId: {type: GraphQLString},
    modifiedByUserLoginId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    parentSalesForecastId: {type: GraphQLString},
    percentOfQuotaClosed: {type: GraphQLFloat},
    percentOfQuotaForecast: {type: GraphQLFloat},
    pipelineAmount: {type: GraphQLFloat},
    quotaAmount: {type: GraphQLFloat},
    salesForecastId: {type: GraphQLString}
  })
});

export {SalesForecastInputType};
    