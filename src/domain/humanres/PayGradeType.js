
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
import {PayHistoryType} from '../humanres/PayHistoryType.js';


const PayGradeType = new GraphQLObjectType({
  name: 'PayGradeType',
  description: 'Type for PayGrade in humanres',

  fields: () => ({
    comments: {type: GraphQLString},
    payGradeName: {type: GraphQLString},
    payGradeId: {type: GraphQLString},
    salaryStep: {
      type: new GraphQLList(SalaryStepType),
      args : {payGradeId: {type: GraphQLString}},
      resolve: (payGrade, args, {loaders}) => loaders.ofbizArray.load(`salarySteps/find?payGradeId=${payGrade.payGradeId}`)
    },
    payHistory: {
      type: new GraphQLList(PayHistoryType),
      args : {payGradeId: {type: GraphQLString}},
      resolve: (payGrade, args, {loaders}) => loaders.ofbizArray.load(`payHistorys/find?payGradeId=${payGrade.payGradeId}`)
    }
  })
});

export {PayGradeType};
    