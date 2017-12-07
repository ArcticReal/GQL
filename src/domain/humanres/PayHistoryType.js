
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SalaryStepType} from '../humanres/SalaryStepType.js';
import {EmploymentType} from '../humanres/EmploymentType.js';
import {PayGradeType} from '../humanres/PayGradeType.js';


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
    