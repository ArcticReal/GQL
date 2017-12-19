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

const WorkEffortGoodStandardInputType = new GraphQLInputObjectType({
  name: 'WorkEffortGoodStandardInputType',
  description: 'input type for WorkEffortGoodStandard',

  fields: () => ({
    estimatedCost: {type: GraphQLFloat},
    estimatedQuantity: {type: GraphQLFloat},
    fromDate: {type: GraphQLString},
    productId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    workEffortGoodStdTypeId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortGoodStandardInputType};
    