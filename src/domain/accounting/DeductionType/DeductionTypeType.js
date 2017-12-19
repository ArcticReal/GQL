
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

import {DeductionType} from '../../accounting/Deduction/DeductionType.js';


const DeductionTypeType = new GraphQLObjectType({
  name: 'DeductionTypeType',
  description: 'Type for DeductionType in accounting',

  fields: () => ({
    parentType: {
      type: DeductionTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (deductionType, args, {loaders}) => loaders.ofbiz.load(`accounting/deduction/deductionTypes/find?deductionTypeId=${deductionType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    deductionTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    deductions: {
      type: new GraphQLList(DeductionType),
      args : {},
      resolve: (deductionType, args, {loaders}) => loaders.ofbizArray.load(`accounting/deductions/find?deductionTypeId=${deductionType.deductionTypeId}`)
    },
    deductionTypes: {
      type: new GraphQLList(DeductionTypeType),
      args : {},
      resolve: (deductionType, args, {loaders}) => loaders.ofbizArray.load(`accounting/deduction/deductionTypes/find?deductionTypeId=${deductionType.deductionTypeId}`)
    }
  })
});

export {DeductionTypeType};
    