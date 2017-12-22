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

const WorkEffortAssocTypeResponseType = new GraphQLObjectType({
  name: 'WorkEffortAssocTypeResponseType',
  description: 'response type for WorkEffortAssocType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    workEffortAssocTypeId: {type: GraphQLString}
  })
});

export {WorkEffortAssocTypeResponseType};
    