
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';
import {UserLoginType} from '../login/UserLoginType.js';
import {SalesForecastType} from '../marketing/SalesForecastType.js';


const SalesForecastHistoryType = new GraphQLObjectType({
  name: 'SalesForecastHistoryType',
  description: 'Type for SalesForecastHistory in marketing',

  fields: () => ({
    forecastAmount: {type: GraphQLFloat},
    modifiedByUserLogin: {
      type: UserLoginType,
      args : {modifiedByUserLoginId: {type: GraphQLString}},
      resolve: (salesForecastHistory, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${salesForecastHistory.modifiedByUserLoginId}`)
    },
    quotaAmount: {type: GraphQLFloat},
    bestCaseAmount: {type: GraphQLFloat},
    changeNote: {type: GraphQLString},
    salesForecastHistoryId: {type: GraphQLString},
    internalParty: {
      type: PartyType,
      args : {internalPartyId: {type: GraphQLString}},
      resolve: (salesForecastHistory, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${salesForecastHistory.internalPartyId}`)
    },
    closedAmount: {type: GraphQLFloat},
    salesForecast: {
      type: SalesForecastType,
      args : {salesForecastId: {type: GraphQLString}},
      resolve: (salesForecastHistory, args, {loaders}) => loaders.ofbiz.load(`salesForecasts/find?salesForecastId=${salesForecastHistory.salesForecastId}`)
    },
    percentOfQuotaForecast: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    parentSalesForecastId: {type: GraphQLString},
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (salesForecastHistory, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${salesForecastHistory.organizationPartyId}`)
    },
    percentOfQuotaClosed: {type: GraphQLFloat},
    modifiedTimestamp: {type: GraphQLString},
    customTimePeriodId: {type: GraphQLString}
  })
});

export {SalesForecastHistoryType};
    