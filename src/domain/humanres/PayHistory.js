
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

import {SalaryStepType} from '../humanres/SalaryStep.js';
import {EmploymentType} from '../humanres/Employment.js';
import {PayGradeType} from '../humanres/PayGrade.js';


const PayHistoryType = new GraphQLObjectType({
  name: 'PayHistoryType',
  description: 'Type for PayHistory in humanres',

  fields: () => ({
    roleTypeIdTo: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    salaryStepSeq: {
      type: SalaryStepType,
      args : {salaryStepSeqId: {type: GraphQLString}},
      resolve: (payHistory, args, {loaders}) => loaders.ofbiz.load(`salarySteps/find?salaryStepSeqId=${payHistory.salaryStepSeqId}`)
    },
    periodTypeId: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    roleTypeFrom: {
      type: EmploymentType,
      args : {roleTypeIdFrom: {type: GraphQLString}},
      resolve: (payHistory, args, {loaders}) => loaders.ofbiz.load(`employments/find?roleTypeIdFrom=${payHistory.roleTypeIdFrom}`)
    },
    payGrade: {
      type: PayGradeType,
      args : {payGradeId: {type: GraphQLString}},
      resolve: (payHistory, args, {loaders}) => loaders.ofbiz.load(`payGrades/find?payGradeId=${payHistory.payGradeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PayHistoryType};
    




const PayHistoryInputType = new GraphQLInputObjectType({
  name: 'PayHistoryInputType',
  description: 'input type for PayHistory in humanres',

  fields: () => ({
    roleTypeIdTo: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    salaryStepSeqId: {type: GraphQLString},
    periodTypeId: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    roleTypeIdFrom: {type: GraphQLString},
    payGradeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PayHistoryInputType};
    