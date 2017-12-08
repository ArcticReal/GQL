
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

import {DeductionType} from '../accounting/Deduction.js';


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
    deductions: {
      type: new GraphQLList(DeductionType),
      args : {deductionTypeId: {type: GraphQLString}},
      resolve: (deductionType, args, {loaders}) => loaders.ofbizArray.load(`deductions/find?deductionTypeId=${deductionType.deductionTypeId}`)
    },
    deductionTypes: {
      type: new GraphQLList(DeductionTypeType),
      args : {deductionTypeId: {type: GraphQLString}},
      resolve: (deductionType, args, {loaders}) => loaders.ofbizArray.load(`deductionTypes/find?deductionTypeId=${deductionType.deductionTypeId}`)
    }
  })
});

export {DeductionTypeType};
    




const DeductionTypeInputType = new GraphQLInputObjectType({
  name: 'DeductionTypeInputType',
  description: 'input type for DeductionType in accounting',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    deductionTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {DeductionTypeInputType};
    