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

const WorkEffortKeywordResponseType = new GraphQLObjectType({
  name: 'WorkEffortKeywordResponseType',
  description: 'response type for WorkEffortKeyword',

  fields: () => ({
    keyword: {type: GraphQLString},
    relevancyWeight: {type: GraphQLInt},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortKeywordResponseType};
    