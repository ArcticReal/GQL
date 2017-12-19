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

const WorkEffortPurposeTypeInputType = new GraphQLInputObjectType({
  name: 'WorkEffortPurposeTypeInputType',
  description: 'input type for WorkEffortPurposeType',

  fields: () => ({
    description: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    workEffortPurposeTypeId: {type: GraphQLString}
  })
});

export {WorkEffortPurposeTypeInputType};
    