
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

import {SalesOpportunityType} from '../../marketing/SalesOpportunity/SalesOpportunityType.js';


const SalesOpportunityTrckCodeType = new GraphQLObjectType({
  name: 'SalesOpportunityTrckCodeType',
  description: 'Type for SalesOpportunityTrckCode in marketing',

  fields: () => ({
    trackingCodeId: {type: GraphQLString},
    receivedDate: {type: GraphQLString},
    salesOpportunity: {
      type: SalesOpportunityType,
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunityTrckCode, args, {loaders}) => loaders.ofbiz.load(`marketing/salesOpportunitys/find?salesOpportunityId=${salesOpportunityTrckCode.salesOpportunityId}`)
    }
  })
});

export {SalesOpportunityTrckCodeType};
    