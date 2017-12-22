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

const SalesForecastResponseType = new GraphQLObjectType({
  name: 'SalesForecastResponseType',
  description: 'response type for SalesForecast',

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

export {SalesForecastResponseType};
    