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

const WorkEffortFixedAssetAssignInputType = new GraphQLInputObjectType({
  name: 'WorkEffortFixedAssetAssignInputType',
  description: 'input type for WorkEffortFixedAssetAssign',

  fields: () => ({
    allocatedCost: {type: GraphQLFloat},
    availabilityStatusId: {type: GraphQLString},
    comments: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortFixedAssetAssignInputType};
    