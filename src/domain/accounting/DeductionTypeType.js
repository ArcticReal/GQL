
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {DeductionType} from '../accounting/DeductionType.js';


const DeductionTypeType = new GraphQLObjectType({
  name: 'DeductionTypeType',
  description: 'Type for DeductionType in accounting',

  fields: () => ({
    parentType: {
      type: DeductionTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (deductionType, args, {loaders}) => loaders.ofbiz.load(`deductionTypes/find?deductionTypeId=${deductionType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    deductionTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    deduction: {
      type: new GraphQLList(DeductionType),
      args : {deductionTypeId: {type: GraphQLString}},
      resolve: (deductionType, args, {loaders}) => loaders.ofbizArray.load(`deductions/find?deductionTypeId=${deductionType.deductionTypeId}`)
    },
    deductionType: {
      type: new GraphQLList(DeductionTypeType),
      args : {deductionTypeId: {type: GraphQLString}},
      resolve: (deductionType, args, {loaders}) => loaders.ofbizArray.load(`deductionTypes/find?deductionTypeId=${deductionType.deductionTypeId}`)
    }
  })
});

export {DeductionTypeType};
    