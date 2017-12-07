
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SalesOpportunityType} from '../marketing/SalesOpportunityType.js';


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
    