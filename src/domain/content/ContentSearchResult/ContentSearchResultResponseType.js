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

const ContentSearchResultResponseType = new GraphQLObjectType({
  name: 'ContentSearchResultResponseType',
  description: 'response type for ContentSearchResult',

  fields: () => ({
    contentSearchResultId: {type: GraphQLString},
    isAscending: {type: GraphQLBoolean},
    numResults: {type: GraphQLInt},
    orderByName: {type: GraphQLString},
    searchDate: {type: GraphQLString},
    secondsTotal: {type: GraphQLFloat},
    visitId: {type: GraphQLString}
  })
});

export {ContentSearchResultResponseType};
    