
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

import {ContentSearchConstraintType} from '../content/ContentSearchConstraint.js';


const ContentSearchResultType = new GraphQLObjectType({
  name: 'ContentSearchResultType',
  description: 'Type for ContentSearchResult in content',

  fields: () => ({
    contentSearchResultId: {type: GraphQLString},
    visitId: {type: GraphQLString},
    orderByName: {type: GraphQLString},
    numResults: {type: GraphQLInt},
    secondsTotal: {type: GraphQLFloat},
    searchDate: {type: GraphQLString},
    isAscending: {type: GraphQLBoolean},
    contentSearchConstraints: {
      type: new GraphQLList(ContentSearchConstraintType),
      args : {},
      resolve: (contentSearchResult, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentSearchConstraints/find?contentSearchResultId=${contentSearchResult.contentSearchResultId}`)
    }
  })
});

export {ContentSearchResultType};
    




const ContentSearchResultInputType = new GraphQLInputObjectType({
  name: 'ContentSearchResultInputType',
  description: 'input type for ContentSearchResult in content',

  fields: () => ({
    contentSearchResultId: {type: GraphQLString},
    visitId: {type: GraphQLString},
    orderByName: {type: GraphQLString},
    numResults: {type: GraphQLInt},
    secondsTotal: {type: GraphQLFloat},
    searchDate: {type: GraphQLString},
    isAscending: {type: GraphQLBoolean}
  })
});

export {ContentSearchResultInputType};
    