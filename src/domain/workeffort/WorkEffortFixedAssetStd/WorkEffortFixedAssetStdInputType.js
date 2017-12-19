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

const WorkEffortFixedAssetStdInputType = new GraphQLInputObjectType({
  name: 'WorkEffortFixedAssetStdInputType',
  description: 'input type for WorkEffortFixedAssetStd',

  fields: () => ({
    estimatedCost: {type: GraphQLFloat},
    estimatedDuration: {type: GraphQLFloat},
    estimatedQuantity: {type: GraphQLFloat},
    fixedAssetTypeId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortFixedAssetStdInputType};
    