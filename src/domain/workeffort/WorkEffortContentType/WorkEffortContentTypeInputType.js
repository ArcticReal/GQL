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

const WorkEffortContentTypeInputType = new GraphQLInputObjectType({
  name: 'WorkEffortContentTypeInputType',
  description: 'input type for WorkEffortContentType',

  fields: () => ({
    description: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    workEffortContentTypeId: {type: GraphQLString}
  })
});

export {WorkEffortContentTypeInputType};
    