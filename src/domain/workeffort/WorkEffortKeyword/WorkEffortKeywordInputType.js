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

const WorkEffortKeywordInputType = new GraphQLInputObjectType({
  name: 'WorkEffortKeywordInputType',
  description: 'input type for WorkEffortKeyword',

  fields: () => ({
    keyword: {type: GraphQLString},
    relevancyWeight: {type: GraphQLInt},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortKeywordInputType};
    