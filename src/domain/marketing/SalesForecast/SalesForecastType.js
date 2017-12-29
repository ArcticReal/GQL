
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

import {PartyType} from '../../party/Party/PartyType.js';
import {SalesForecastHistoryType} from '../../marketing/SalesForecastHistory/SalesForecastHistoryType.js';
import {SalesForecastDetailType} from '../../marketing/SalesForecastDetail/SalesForecastDetailType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


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
      resolve: (salesForecast, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${salesForecast.internalPartyId}`)
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
      resolve: (salesForecast, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${salesForecast.organizationPartyId}`)
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
    