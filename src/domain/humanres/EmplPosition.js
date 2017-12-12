
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
import {BudgetItemType} from '../accounting/BudgetItem.js';
import {EmplPositionTypeType} from '../humanres/EmplPositionType.js';
import {EmplPositionFulfillmentType} from '../humanres/EmplPositionFulfillment.js';
import {EmplPositionReportingStructType} from '../humanres/EmplPositionReportingStruct.js';
import {EmplPositionResponsibilityType} from '../humanres/EmplPositionResponsibility.js';


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
      resolve: (emplPosition, args, {loaders}) => loaders.ofbiz.load(`accounting/budget/budgetItems/find?budgetId=${emplPosition.budgetId}`)
    },
    salaryFlag: {type: GraphQLBoolean},
    statusId: {type: GraphQLString},
    estimatedFromDate: {type: GraphQLString},
    emplPositionType: {
      type: EmplPositionTypeType,
      args : {emplPositionTypeId: {type: GraphQLString}},
      resolve: (emplPosition, args, {loaders}) => loaders.ofbiz.load(`humanres/emplPosition/emplPositionTypes/find?emplPositionTypeId=${emplPosition.emplPositionTypeId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (emplPosition, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${emplPosition.partyId}`)
    },
    emplPositionFulfillments: {
      type: new GraphQLList(EmplPositionFulfillmentType),
      args : {},
      resolve: (emplPosition, args, {loaders}) => loaders.ofbizArray.load(`humanres/emplPosition/emplPositionFulfillments/find?emplPositionId=${emplPosition.emplPositionId}`)
    },
    emplPositionReportingStructs: {
      type: new GraphQLList(EmplPositionReportingStructType),
      args : {},
      resolve: (emplPosition, args, {loaders}) => loaders.ofbizArray.load(`humanres/emplPosition/emplPositionReportingStructs/find?emplPositionId=${emplPosition.emplPositionId}`)
    },
    emplPositionResponsibilities: {
      type: new GraphQLList(EmplPositionResponsibilityType),
      args : {},
      resolve: (emplPosition, args, {loaders}) => loaders.ofbizArray.load(`humanres/emplPosition/emplPositionResponsibilitys/find?emplPositionId=${emplPosition.emplPositionId}`)
    }
  })
});

export {EmplPositionType};
    




const EmplPositionInputType = new GraphQLInputObjectType({
  name: 'EmplPositionInputType',
  description: 'input type for EmplPosition in humanres',

  fields: () => ({
    estimatedThruDate: {type: GraphQLString},
    actualThruDate: {type: GraphQLString},
    exemptFlag: {type: GraphQLBoolean},
    temporaryFlag: {type: GraphQLBoolean},
    fulltimeFlag: {type: GraphQLBoolean},
    emplPositionId: {type: GraphQLString},
    actualFromDate: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    budgetId: {type: GraphQLString},
    salaryFlag: {type: GraphQLBoolean},
    statusId: {type: GraphQLString},
    estimatedFromDate: {type: GraphQLString},
    emplPositionTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {EmplPositionInputType};
    