
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
import {BudgetItemType} from '../accounting/BudgetItemType.js';
import {EmplPositionTypeType} from '../humanres/EmplPositionTypeType.js';
import {EmplPositionFulfillmentType} from '../humanres/EmplPositionFulfillmentType.js';
import {EmplPositionReportingStructType} from '../humanres/EmplPositionReportingStructType.js';
import {EmplPositionResponsibilityType} from '../humanres/EmplPositionResponsibilityType.js';


const EmplPositionType = new GraphQLObjectType({
  name: 'EmplPositionType',
  description: 'Type for EmplPosition in humanres',

  fields: () => ({
    estimatedThruDate: {type: GraphQLString},
    actualThruDate: {type: GraphQLString},
    exemptFlag: {type: GraphQLBoolean},
    temporaryFlag: {type: GraphQLBoolean},
    fulltimeFlag: {type: GraphQLBoolean},
    emplPositionId: {type: GraphQLString},
    actualFromDate: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    budget: {
      type: BudgetItemType,
      args : {budgetId: {type: GraphQLString}},
      resolve: (emplPosition, args, {loaders}) => loaders.ofbiz.load(`budgetItems/find?budgetId=${emplPosition.budgetId}`)
    },
    salaryFlag: {type: GraphQLBoolean},
    statusId: {type: GraphQLString},
    estimatedFromDate: {type: GraphQLString},
    emplPositionType: {
      type: EmplPositionTypeType,
      args : {emplPositionTypeId: {type: GraphQLString}},
      resolve: (emplPosition, args, {loaders}) => loaders.ofbiz.load(`emplPositionTypes/find?emplPositionTypeId=${emplPosition.emplPositionTypeId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (emplPosition, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${emplPosition.partyId}`)
    },
    emplPositionFulfillment: {
      type: new GraphQLList(EmplPositionFulfillmentType),
      args : {emplPositionId: {type: GraphQLString}},
      resolve: (emplPosition, args, {loaders}) => loaders.ofbizArray.load(`emplPositionFulfillments/find?emplPositionId=${emplPosition.emplPositionId}`)
    },
    emplPositionReportingStruct: {
      type: new GraphQLList(EmplPositionReportingStructType),
      args : {emplPositionId: {type: GraphQLString}},
      resolve: (emplPosition, args, {loaders}) => loaders.ofbizArray.load(`emplPositionReportingStructs/find?emplPositionId=${emplPosition.emplPositionId}`)
    },
    emplPositionResponsibility: {
      type: new GraphQLList(EmplPositionResponsibilityType),
      args : {emplPositionId: {type: GraphQLString}},
      resolve: (emplPosition, args, {loaders}) => loaders.ofbizArray.load(`emplPositionResponsibilitys/find?emplPositionId=${emplPosition.emplPositionId}`)
    },
    emplPositionReportingStruct: {
      type: new GraphQLList(EmplPositionReportingStructType),
      args : {emplPositionId: {type: GraphQLString}},
      resolve: (emplPosition, args, {loaders}) => loaders.ofbizArray.load(`emplPositionReportingStructs/find?emplPositionId=${emplPosition.emplPositionId}`)
    }
  })
});

export {EmplPositionType};
    