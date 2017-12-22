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

const WorkEffortContentTypeResponseType = new GraphQLObjectType({
  name: 'WorkEffortContentTypeResponseType',
  description: 'response type for WorkEffortContentType',

  fields: () => ({
    description: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    workEffortContentTypeId: {type: GraphQLString}
  })
});

export {WorkEffortContentTypeResponseType};
    