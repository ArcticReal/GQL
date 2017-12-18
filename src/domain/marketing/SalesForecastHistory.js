
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
import {UserLoginType} from '../login/UserLogin.js';
import {SalesForecastType} from '../marketing/SalesForecast.js';


const SalesForecastHistoryType = new GraphQLObjectType({
  name: 'SalesForecastHistoryType',
  description: 'Type for SalesForecastHistory in marketing',

  fields: () => ({
    forecastAmount: {type: GraphQLFloat},
    modifiedByUserLogin: {
      type: UserLoginType,
      args : {modifiedByUserLoginId: {type: GraphQLString}},
      resolve: (salesForecastHistory, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${salesForecastHistory.modifiedByUserLoginId}`)
    },
    quotaAmount: {type: GraphQLFloat},
    bestCaseAmount: {type: GraphQLFloat},
    changeNote: {type: GraphQLString},
    salesForecastHistoryId: {type: GraphQLString},
    internalParty: {
      type: PartyType,
      args : {internalPartyId: {type: GraphQLString}},
      resolve: (salesForecastHistory, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${salesForecastHistory.internalPartyId}`)
    },
    closedAmount: {type: GraphQLFloat},
    salesForecast: {
      type: SalesForecastType,
      args : {salesForecastId: {type: GraphQLString}},
      resolve: (salesForecastHistory, args, {loaders}) => loaders.ofbiz.load(`marketing/salesForecasts/find?salesForecastId=${salesForecastHistory.salesForecastId}`)
    },
    percentOfQuotaForecast: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    parentSalesForecastId: {type: GraphQLString},
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (salesForecastHistory, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${salesForecastHistory.organizationPartyId}`)
    },
    percentOfQuotaClosed: {type: GraphQLFloat},
    modifiedTimestamp: {type: GraphQLString},
    customTimePeriodId: {type: GraphQLString}
  })
});

export {SalesForecastHistoryType};
    




const SalesForecastHistoryInputType = new GraphQLInputObjectType({
  name: 'SalesForecastHistoryInputType',
  description: 'input type for SalesForecastHistory',

  fields: () => ({
    bestCaseAmount: {type: GraphQLFloat},
    changeNote: {type: GraphQLString},
    closedAmount: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    customTimePeriodId: {type: GraphQLString},
    forecastAmount: {type: GraphQLFloat},
    internalPartyId: {type: GraphQLString},
    modifiedByUserLoginId: {type: GraphQLString},
    modifiedTimestamp: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    parentSalesForecastId: {type: GraphQLString},
    percentOfQuotaClosed: {type: GraphQLFloat},
    percentOfQuotaForecast: {type: GraphQLFloat},
    quotaAmount: {type: GraphQLFloat},
    salesForecastHistoryId: {type: GraphQLString},
    salesForecastId: {type: GraphQLString}
  })
});

export {SalesForecastHistoryInputType};
    