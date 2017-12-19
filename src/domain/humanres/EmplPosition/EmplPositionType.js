
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
import {BudgetItemType} from '../../accounting/BudgetItem/BudgetItemType.js';
import {EmplPositionTypeType} from '../../humanres/EmplPositionType/EmplPositionTypeType.js';
import {EmplPositionFulfillmentType} from '../../humanres/EmplPositionFulfillment/EmplPositionFulfillmentType.js';
import {EmplPositionReportingStructType} from '../../humanres/EmplPositionReportingStruct/EmplPositionReportingStructType.js';
import {EmplPositionResponsibilityType} from '../../humanres/EmplPositionResponsibility/EmplPositionResponsibilityType.js';


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
    