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

const CostComponentCalcResponseType = new GraphQLObjectType({
  name: 'CostComponentCalcResponseType',
  description: 'response type for CostComponentCalc',

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

export {CostComponentCalcResponseType};
    