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

const SalesForecastHistoryResponseType = new GraphQLObjectType({
  name: 'SalesForecastHistoryResponseType',
  description: 'response type for SalesForecastHistory',

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

export {SalesForecastHistoryResponseType};
    