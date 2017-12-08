
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
import {EmplPositionTypeType} from '../humanres/EmplPositionType.js';
import {RateTypeType} from '../accounting/RateType.js';


const EmplPositionTypeRateType = new GraphQLObjectType({
  name: 'EmplPositionTypeRateType',
  description: 'Type for EmplPositionTypeRate in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    rateType: {
      type: RateTypeType,
      args : {rateTypeId: {type: GraphQLString}},
      resolve: (emplPositionTypeRate, args, {loaders}) => loaders.ofbiz.load(`rateTypes/find?rateTypeId=${emplPositionTypeRate.rateTypeId}`)
    },
    emplPositionType: {
      type: EmplPositionTypeType,
      args : {emplPositionTypeId: {type: GraphQLString}},
      resolve: (emplPositionTypeRate, args, {loaders}) => loaders.ofbiz.load(`emplPositionTypes/find?emplPositionTypeId=${emplPositionTypeRate.emplPositionTypeId}`)
    },
    salaryStepSeq: {
      type: SalaryStepType,
      args : {salaryStepSeqId: {type: GraphQLString}},
      resolve: (emplPositionTypeRate, args, {loaders}) => loaders.ofbiz.load(`salarySteps/find?salaryStepSeqId=${emplPositionTypeRate.salaryStepSeqId}`)
    },
    payGradeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionTypeRateType};
    




const EmplPositionTypeRateInputType = new GraphQLInputObjectType({
  name: 'EmplPositionTypeRateInputType',
  description: 'input type for EmplPositionTypeRate in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    rateTypeId: {type: GraphQLString},
    emplPositionTypeId: {type: GraphQLString},
    salaryStepSeqId: {type: GraphQLString},
    payGradeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionTypeRateInputType};
    