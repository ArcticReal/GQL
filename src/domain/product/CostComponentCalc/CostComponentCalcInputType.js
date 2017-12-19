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

const CostComponentCalcInputType = new GraphQLInputObjectType({
  name: 'CostComponentCalcInputType',
  description: 'input type for CostComponentCalc',

  fields: () => ({
    costComponentCalcId: {type: GraphQLString},
    costCustomMethodId: {type: GraphQLString},
    costGlAccountTypeId: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    description: {type: GraphQLString},
    fixedCost: {type: GraphQLFloat},
    offsettingGlAccountTypeId: {type: GraphQLString},
    perMilliSecond: {type: GraphQLInt},
    variableCost: {type: GraphQLFloat}
  })
});

export {CostComponentCalcInputType};
    