
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
import {PayHistoryType} from '../humanres/PayHistory.js';


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
    




const PayGradeInputType = new GraphQLInputObjectType({
  name: 'PayGradeInputType',
  description: 'input type for PayGrade in humanres',

  fields: () => ({
    comments: {type: GraphQLString},
    payGradeName: {type: GraphQLString},
    payGradeId: {type: GraphQLString}
  })
});

export {PayGradeInputType};
    