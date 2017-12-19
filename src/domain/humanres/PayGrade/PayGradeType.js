
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

import {SalaryStepType} from '../../humanres/SalaryStep/SalaryStepType.js';
import {PayHistoryType} from '../../humanres/PayHistory/PayHistoryType.js';


const PayGradeType = new GraphQLObjectType({
  name: 'PayGradeType',
  description: 'Type for PayGrade in humanres',

  fields: () => ({
    comments: {type: GraphQLString},
    payGradeName: {type: GraphQLString},
    payGradeId: {type: GraphQLString},
    salarySteps: {
      type: new GraphQLList(SalaryStepType),
      args : {},
      resolve: (payGrade, args, {loaders}) => loaders.ofbizArray.load(`humanres/salarySteps/find?payGradeId=${payGrade.payGradeId}`)
    },
    payHistories: {
      type: new GraphQLList(PayHistoryType),
      args : {},
      resolve: (payGrade, args, {loaders}) => loaders.ofbizArray.load(`humanres/payHistorys/find?payGradeId=${payGrade.payGradeId}`)
    }
  })
});

export {PayGradeType};
    