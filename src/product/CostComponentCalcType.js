
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CustomMethod} from '../product/CustomMethod.js';
import {GlAccountType} from '../product/GlAccountType.js';
import {GlAccountType} from '../product/GlAccountType.js';


const CostComponentCalc = new GraphQLObjectType({
  name: 'CostComponentCalcType',
  description: 'Type for CostComponentCalc in product',

  fields: () => ({
    costCustomMethod: {
      type: CustomMethodType,
      args : {costCustomMethodId: {type: GraphQLString}},
      resolve: (costComponentCalc, args, {loaders}) => loaders.ofbizArray.load(`customMethods/find?customMethodId=${args.costCustomMethodId}`)
    },
    currencyUomId: {type: GraphQLString},
    variableCost: {type: GraphQLFloat},
    costGlAccountType: {
      type: GlAccountTypeType,
      args : {costGlAccountTypeId: {type: GraphQLString}},
      resolve: (costComponentCalc, args, {loaders}) => loaders.ofbizArray.load(`glAccountTypes/find?glAccountTypeId=${args.costGlAccountTypeId}`)
    },
    fixedCost: {type: GraphQLFloat},
    description: {type: GraphQLString},
    offsettingGlAccountType: {
      type: GlAccountTypeType,
      args : {offsettingGlAccountTypeId: {type: GraphQLString}},
      resolve: (costComponentCalc, args, {loaders}) => loaders.ofbizArray.load(`glAccountTypes/find?glAccountTypeId=${args.offsettingGlAccountTypeId}`)
    },
    perMilliSecond: {type: GraphQLInt},
    costComponentCalcId: {type: GraphQLString}
  })
});

export {CostComponentCalc};
    