
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

import {SalesOpportunityType} from '../marketing/SalesOpportunity.js';


const SalesOpportunityTrckCodeType = new GraphQLObjectType({
  name: 'SalesOpportunityTrckCodeType',
  description: 'Type for SalesOpportunityTrckCode in marketing',

  fields: () => ({
    trackingCodeId: {type: GraphQLString},
    receivedDate: {type: GraphQLString},
    salesOpportunity: {
      type: SalesOpportunityType,
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunityTrckCode, args, {loaders}) => loaders.ofbiz.load(`salesOpportunitys/find?salesOpportunityId=${salesOpportunityTrckCode.salesOpportunityId}`)
    }
  })
});

export {SalesOpportunityTrckCodeType};
    




const SalesOpportunityTrckCodeInputType = new GraphQLInputObjectType({
  name: 'SalesOpportunityTrckCodeInputType',
  description: 'input type for SalesOpportunityTrckCode in marketing',

  fields: () => ({
    trackingCodeId: {type: GraphQLString},
    receivedDate: {type: GraphQLString},
    salesOpportunityId: {type: GraphQLString}
  })
});

export {SalesOpportunityTrckCodeInputType};
    