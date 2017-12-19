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

const WorkEffortAssocTypeInputType = new GraphQLInputObjectType({
  name: 'WorkEffortAssocTypeInputType',
  description: 'input type for WorkEffortAssocType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    workEffortAssocTypeId: {type: GraphQLString}
  })
});

export {WorkEffortAssocTypeInputType};
    