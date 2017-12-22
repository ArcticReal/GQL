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

const WorkEffortFixedAssetStdResponseType = new GraphQLObjectType({
  name: 'WorkEffortFixedAssetStdResponseType',
  description: 'response type for WorkEffortFixedAssetStd',

  fields: () => ({
    estimatedCost: {type: GraphQLFloat},
    estimatedDuration: {type: GraphQLFloat},
    estimatedQuantity: {type: GraphQLFloat},
    fixedAssetTypeId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortFixedAssetStdResponseType};
    