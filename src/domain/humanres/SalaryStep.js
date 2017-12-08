
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

import {PayGradeType} from '../humanres/PayGrade.js';


const SalaryStepType = new GraphQLObjectType({
  name: 'SalaryStepType',
  description: 'Type for SalaryStep in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    lastModifiedByUserLogin: {type: GraphQLString},
    salaryStepSeqId: {type: GraphQLString},
    dateModified: {type: GraphQLString},
    payGrade: {
      type: PayGradeType,
      args : {payGradeId: {type: GraphQLString}},
      resolve: (salaryStep, args, {loaders}) => loaders.ofbiz.load(`payGrades/find?payGradeId=${salaryStep.payGradeId}`)
    },
    createdByUserLogin: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {SalaryStepType};
    




const SalaryStepInputType = new GraphQLInputObjectType({
  name: 'SalaryStepInputType',
  description: 'input type for SalaryStep in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    lastModifiedByUserLogin: {type: GraphQLString},
    salaryStepSeqId: {type: GraphQLString},
    dateModified: {type: GraphQLString},
    payGradeId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {SalaryStepInputType};
    