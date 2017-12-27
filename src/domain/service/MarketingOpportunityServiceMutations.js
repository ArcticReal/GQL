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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createSalesForecast = {
  type: ResponseType,
  description: 'mutation for ofbiz createSalesForecast method',
  args:{forecastAmount: {type: GraphQLFloat},pipelineAmount: {type: GraphQLFloat},modifiedByUserLoginId: {type: GraphQLString},quotaAmount: {type: GraphQLFloat},bestCaseAmount: {type: GraphQLFloat},createdByUserLoginId: {type: GraphQLString},internalPartyId: {type: GraphQLString},closedAmount: {type: GraphQLFloat},percentOfQuotaForecast: {type: GraphQLFloat},currencyUomId: {type: GraphQLString},parentSalesForecastId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},percentOfQuotaClosed: {type: GraphQLFloat},customTimePeriodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/createSalesForecast?forecastAmount=${args.forecastAmount}&pipelineAmount=${args.pipelineAmount}&modifiedByUserLoginId=${args.modifiedByUserLoginId}&quotaAmount=${args.quotaAmount}&bestCaseAmount=${args.bestCaseAmount}&createdByUserLoginId=${args.createdByUserLoginId}&internalPartyId=${args.internalPartyId}&closedAmount=${args.closedAmount}&percentOfQuotaForecast=${args.percentOfQuotaForecast}&currencyUomId=${args.currencyUomId}&parentSalesForecastId=${args.parentSalesForecastId}&organizationPartyId=${args.organizationPartyId}&percentOfQuotaClosed=${args.percentOfQuotaClosed}&customTimePeriodId=${args.customTimePeriodId}&`, null, req);
  }
};
export {createSalesForecast};


const createSalesForecastDetail = {
  type: ResponseType,
  description: 'mutation for ofbiz createSalesForecastDetail method',
  args:{salesForecastId: {type: GraphQLString},amount: {type: GraphQLFloat},quantity: {type: GraphQLFloat},productCategoryId: {type: GraphQLString},productId: {type: GraphQLString},quantityUomId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/createSalesForecastDetail?salesForecastId=${args.salesForecastId}&amount=${args.amount}&quantity=${args.quantity}&productCategoryId=${args.productCategoryId}&productId=${args.productId}&quantityUomId=${args.quantityUomId}&`, null, req);
  }
};
export {createSalesForecastDetail};


const createSalesOpportunity = {
  type: ResponseType,
  description: 'mutation for ofbiz createSalesOpportunity method',
  args:{estimatedProbability: {type: GraphQLFloat},opportunityName: {type: GraphQLString},marketingCampaignId: {type: GraphQLString},description: {type: GraphQLString},opportunityStageId: {type: GraphQLString},typeEnumId: {type: GraphQLString},leadPartyId: {type: GraphQLString},estimatedCloseDate: {type: GraphQLString},dataSourceId: {type: GraphQLString},currencyUomId: {type: GraphQLString},accountPartyId: {type: GraphQLString},nextStep: {type: GraphQLString},nextStepDate: {type: GraphQLString},estimatedAmount: {type: GraphQLFloat},createdByUserLogin: {type: GraphQLString},salesOpportunityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/createSalesOpportunity?estimatedProbability=${args.estimatedProbability}&opportunityName=${args.opportunityName}&marketingCampaignId=${args.marketingCampaignId}&description=${args.description}&opportunityStageId=${args.opportunityStageId}&typeEnumId=${args.typeEnumId}&leadPartyId=${args.leadPartyId}&estimatedCloseDate=${args.estimatedCloseDate}&dataSourceId=${args.dataSourceId}&currencyUomId=${args.currencyUomId}&accountPartyId=${args.accountPartyId}&nextStep=${args.nextStep}&nextStepDate=${args.nextStepDate}&estimatedAmount=${args.estimatedAmount}&createdByUserLogin=${args.createdByUserLogin}&salesOpportunityId=${args.salesOpportunityId}&`, null, req);
  }
};
export {createSalesOpportunity};


const createSalesOpportunityAccountRole = {
  type: ResponseType,
  description: 'mutation for ofbiz createSalesOpportunityAccountRole method',
  args:{accountPartyId: {type: GraphQLString},salesOpportunityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/createSalesOpportunityAccountRole?accountPartyId=${args.accountPartyId}&salesOpportunityId=${args.salesOpportunityId}&`, null, req);
  }
};
export {createSalesOpportunityAccountRole};


const createSalesOpportunityCompetitor = {
  type: ResponseType,
  description: 'mutation for ofbiz createSalesOpportunityCompetitor method',
  args:{competitorPartyId: {type: GraphQLString},salesOpportunityId: {type: GraphQLString},strengths: {type: GraphQLString},weaknesses: {type: GraphQLString},positionEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/createSalesOpportunityCompetitor?competitorPartyId=${args.competitorPartyId}&salesOpportunityId=${args.salesOpportunityId}&strengths=${args.strengths}&weaknesses=${args.weaknesses}&positionEnumId=${args.positionEnumId}&`, null, req);
  }
};
export {createSalesOpportunityCompetitor};


const createSalesOpportunityLeadRole = {
  type: ResponseType,
  description: 'mutation for ofbiz createSalesOpportunityLeadRole method',
  args:{leadPartyId: {type: GraphQLString},salesOpportunityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/createSalesOpportunityLeadRole?leadPartyId=${args.leadPartyId}&salesOpportunityId=${args.salesOpportunityId}&`, null, req);
  }
};
export {createSalesOpportunityLeadRole};


const createSalesOpportunityQuote = {
  type: ResponseType,
  description: 'mutation for ofbiz createSalesOpportunityQuote method',
  args:{quoteId: {type: GraphQLString},salesOpportunityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/createSalesOpportunityQuote?quoteId=${args.quoteId}&salesOpportunityId=${args.salesOpportunityId}&`, null, req);
  }
};
export {createSalesOpportunityQuote};


const createSalesOpportunityRole = {
  type: ResponseType,
  description: 'mutation for ofbiz createSalesOpportunityRole method',
  args:{roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},salesOpportunityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/createSalesOpportunityRole?roleTypeId=${args.roleTypeId}&partyId=${args.partyId}&salesOpportunityId=${args.salesOpportunityId}&`, null, req);
  }
};
export {createSalesOpportunityRole};


const createSalesOpportunityStage = {
  type: ResponseType,
  description: 'mutation for ofbiz createSalesOpportunityStage method',
  args:{sequenceNum: {type: GraphQLInt},defaultProbability: {type: GraphQLFloat},description: {type: GraphQLString},opportunityStageId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/createSalesOpportunityStage?sequenceNum=${args.sequenceNum}&defaultProbability=${args.defaultProbability}&description=${args.description}&opportunityStageId=${args.opportunityStageId}&`, null, req);
  }
};
export {createSalesOpportunityStage};


const createSalesOpportunityTrckCode = {
  type: ResponseType,
  description: 'mutation for ofbiz createSalesOpportunityTrckCode method',
  args:{trackingCodeId: {type: GraphQLString},salesOpportunityId: {type: GraphQLString},receivedDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/createSalesOpportunityTrckCode?trackingCodeId=${args.trackingCodeId}&salesOpportunityId=${args.salesOpportunityId}&receivedDate=${args.receivedDate}&`, null, req);
  }
};
export {createSalesOpportunityTrckCode};


const createSalesOpportunityWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz createSalesOpportunityWorkEffort method',
  args:{workEffortId: {type: GraphQLString},salesOpportunityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/createSalesOpportunityWorkEffort?workEffortId=${args.workEffortId}&salesOpportunityId=${args.salesOpportunityId}&`, null, req);
  }
};
export {createSalesOpportunityWorkEffort};


const deleteSalesForecastDetail = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteSalesForecastDetail method',
  args:{salesForecastId: {type: GraphQLString},salesForecastDetailId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/deleteSalesForecastDetail?salesForecastId=${args.salesForecastId}&salesForecastDetailId=${args.salesForecastDetailId}&`, null, req);
  }
};
export {deleteSalesForecastDetail};


const deleteSalesOpportunityCompetitor = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteSalesOpportunityCompetitor method',
  args:{competitorPartyId: {type: GraphQLString},salesOpportunityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/deleteSalesOpportunityCompetitor?competitorPartyId=${args.competitorPartyId}&salesOpportunityId=${args.salesOpportunityId}&`, null, req);
  }
};
export {deleteSalesOpportunityCompetitor};


const deleteSalesOpportunityQuote = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteSalesOpportunityQuote method',
  args:{quoteId: {type: GraphQLString},salesOpportunityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/deleteSalesOpportunityQuote?quoteId=${args.quoteId}&salesOpportunityId=${args.salesOpportunityId}&`, null, req);
  }
};
export {deleteSalesOpportunityQuote};


const deleteSalesOpportunityRole = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteSalesOpportunityRole method',
  args:{roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},salesOpportunityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/deleteSalesOpportunityRole?roleTypeId=${args.roleTypeId}&partyId=${args.partyId}&salesOpportunityId=${args.salesOpportunityId}&`, null, req);
  }
};
export {deleteSalesOpportunityRole};


const deleteSalesOpportunityStage = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteSalesOpportunityStage method',
  args:{opportunityStageId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/deleteSalesOpportunityStage?opportunityStageId=${args.opportunityStageId}&`, null, req);
  }
};
export {deleteSalesOpportunityStage};


const deleteSalesOpportunityTrckCode = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteSalesOpportunityTrckCode method',
  args:{trackingCodeId: {type: GraphQLString},salesOpportunityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/deleteSalesOpportunityTrckCode?trackingCodeId=${args.trackingCodeId}&salesOpportunityId=${args.salesOpportunityId}&`, null, req);
  }
};
export {deleteSalesOpportunityTrckCode};


const deleteSalesOpportunityWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteSalesOpportunityWorkEffort method',
  args:{workEffortId: {type: GraphQLString},salesOpportunityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/deleteSalesOpportunityWorkEffort?workEffortId=${args.workEffortId}&salesOpportunityId=${args.salesOpportunityId}&`, null, req);
  }
};
export {deleteSalesOpportunityWorkEffort};


const findPartyInSalesOpportunityRole = {
  type: ResponseType,
  description: 'mutation for ofbiz findPartyInSalesOpportunityRole method',
  args:{roleTypeId: {type: GraphQLString},salesOpportunityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/findPartyInSalesOpportunityRole?roleTypeId=${args.roleTypeId}&salesOpportunityId=${args.salesOpportunityId}&`, null, req);
  }
};
export {findPartyInSalesOpportunityRole};


const updateSalesForecast = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSalesForecast method',
  args:{salesForecastId: {type: GraphQLString},forecastAmount: {type: GraphQLFloat},pipelineAmount: {type: GraphQLFloat},modifiedByUserLoginId: {type: GraphQLString},quotaAmount: {type: GraphQLFloat},bestCaseAmount: {type: GraphQLFloat},createdByUserLoginId: {type: GraphQLString},changeNote: {type: GraphQLString},internalPartyId: {type: GraphQLString},closedAmount: {type: GraphQLFloat},percentOfQuotaForecast: {type: GraphQLFloat},currencyUomId: {type: GraphQLString},parentSalesForecastId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},percentOfQuotaClosed: {type: GraphQLFloat},customTimePeriodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/updateSalesForecast?salesForecastId=${args.salesForecastId}&forecastAmount=${args.forecastAmount}&pipelineAmount=${args.pipelineAmount}&modifiedByUserLoginId=${args.modifiedByUserLoginId}&quotaAmount=${args.quotaAmount}&bestCaseAmount=${args.bestCaseAmount}&createdByUserLoginId=${args.createdByUserLoginId}&changeNote=${args.changeNote}&internalPartyId=${args.internalPartyId}&closedAmount=${args.closedAmount}&percentOfQuotaForecast=${args.percentOfQuotaForecast}&currencyUomId=${args.currencyUomId}&parentSalesForecastId=${args.parentSalesForecastId}&organizationPartyId=${args.organizationPartyId}&percentOfQuotaClosed=${args.percentOfQuotaClosed}&customTimePeriodId=${args.customTimePeriodId}&`, null, req);
  }
};
export {updateSalesForecast};


const updateSalesForecastDetail = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSalesForecastDetail method',
  args:{salesForecastId: {type: GraphQLString},salesForecastDetailId: {type: GraphQLString},amount: {type: GraphQLFloat},quantity: {type: GraphQLFloat},productCategoryId: {type: GraphQLString},productId: {type: GraphQLString},quantityUomId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/updateSalesForecastDetail?salesForecastId=${args.salesForecastId}&salesForecastDetailId=${args.salesForecastDetailId}&amount=${args.amount}&quantity=${args.quantity}&productCategoryId=${args.productCategoryId}&productId=${args.productId}&quantityUomId=${args.quantityUomId}&`, null, req);
  }
};
export {updateSalesForecastDetail};


const updateSalesOpportunity = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSalesOpportunity method',
  args:{salesOpportunityId: {type: GraphQLString},estimatedProbability: {type: GraphQLFloat},opportunityName: {type: GraphQLString},marketingCampaignId: {type: GraphQLString},description: {type: GraphQLString},opportunityStageId: {type: GraphQLString},typeEnumId: {type: GraphQLString},leadPartyId: {type: GraphQLString},estimatedCloseDate: {type: GraphQLString},dataSourceId: {type: GraphQLString},currencyUomId: {type: GraphQLString},accountPartyId: {type: GraphQLString},nextStep: {type: GraphQLString},nextStepDate: {type: GraphQLString},estimatedAmount: {type: GraphQLFloat},createdByUserLogin: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/updateSalesOpportunity?salesOpportunityId=${args.salesOpportunityId}&estimatedProbability=${args.estimatedProbability}&opportunityName=${args.opportunityName}&marketingCampaignId=${args.marketingCampaignId}&description=${args.description}&opportunityStageId=${args.opportunityStageId}&typeEnumId=${args.typeEnumId}&leadPartyId=${args.leadPartyId}&estimatedCloseDate=${args.estimatedCloseDate}&dataSourceId=${args.dataSourceId}&currencyUomId=${args.currencyUomId}&accountPartyId=${args.accountPartyId}&nextStep=${args.nextStep}&nextStepDate=${args.nextStepDate}&estimatedAmount=${args.estimatedAmount}&createdByUserLogin=${args.createdByUserLogin}&`, null, req);
  }
};
export {updateSalesOpportunity};


const updateSalesOpportunityCompetitor = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSalesOpportunityCompetitor method',
  args:{competitorPartyId: {type: GraphQLString},salesOpportunityId: {type: GraphQLString},strengths: {type: GraphQLString},weaknesses: {type: GraphQLString},positionEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/updateSalesOpportunityCompetitor?competitorPartyId=${args.competitorPartyId}&salesOpportunityId=${args.salesOpportunityId}&strengths=${args.strengths}&weaknesses=${args.weaknesses}&positionEnumId=${args.positionEnumId}&`, null, req);
  }
};
export {updateSalesOpportunityCompetitor};


const updateSalesOpportunityStage = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSalesOpportunityStage method',
  args:{opportunityStageId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},defaultProbability: {type: GraphQLFloat},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/updateSalesOpportunityStage?opportunityStageId=${args.opportunityStageId}&sequenceNum=${args.sequenceNum}&defaultProbability=${args.defaultProbability}&description=${args.description}&`, null, req);
  }
};
export {updateSalesOpportunityStage};


const updateSalesOpportunityTrckCode = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSalesOpportunityTrckCode method',
  args:{trackingCodeId: {type: GraphQLString},salesOpportunityId: {type: GraphQLString},receivedDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingOpportunity/updateSalesOpportunityTrckCode?trackingCodeId=${args.trackingCodeId}&salesOpportunityId=${args.salesOpportunityId}&receivedDate=${args.receivedDate}&`, null, req);
  }
};
export {updateSalesOpportunityTrckCode};
