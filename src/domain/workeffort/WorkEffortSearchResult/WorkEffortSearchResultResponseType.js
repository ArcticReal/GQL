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

const WorkEffortSearchResultResponseType = new GraphQLObjectType({
  name: 'WorkEffortSearchResultResponseType',
  description: 'response type for WorkEffortSearchResult',

  fields: () => ({
    isAscending: {type: GraphQLBoolean},
    numResults: {type: GraphQLInt},
    orderByName: {type: GraphQLString},
    searchDate: {type: GraphQLString},
    secondsTotal: {type: GraphQLFloat},
    visitId: {type: GraphQLString},
    workEffortSearchResultId: {type: GraphQLString}
  })
});

export {WorkEffortSearchResultResponseType};
    