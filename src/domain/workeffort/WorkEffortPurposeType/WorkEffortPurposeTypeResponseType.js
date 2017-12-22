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

const WorkEffortPurposeTypeResponseType = new GraphQLObjectType({
  name: 'WorkEffortPurposeTypeResponseType',
  description: 'response type for WorkEffortPurposeType',

  fields: () => ({
    description: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    workEffortPurposeTypeId: {type: GraphQLString}
  })
});

export {WorkEffortPurposeTypeResponseType};
    