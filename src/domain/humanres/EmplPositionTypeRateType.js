
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
import {EmplPositionTypeType} from '../humanres/EmplPositionTypeType.js';
import {RateTypeType} from '../accounting/RateTypeType.js';


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
    