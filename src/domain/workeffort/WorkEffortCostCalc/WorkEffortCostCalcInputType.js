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

const WorkEffortCostCalcInputType = new GraphQLInputObjectType({
  name: 'WorkEffortCostCalcInputType',
  description: 'input type for WorkEffortCostCalc',

  fields: () => ({
    costComponentCalcId: {type: GraphQLString},
    costComponentTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortCostCalcInputType};
    