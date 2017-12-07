
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContentSearchConstraintType} from '../content/ContentSearchConstraintType.js';


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
    contentSearchConstraint: {
      type: new GraphQLList(ContentSearchConstraintType),
      args : {contentSearchResultId: {type: GraphQLString}},
      resolve: (contentSearchResult, args, {loaders}) => loaders.ofbizArray.load(`contentSearchConstraints/find?contentSearchResultId=${contentSearchResult.contentSearchResultId}`)
    }
  })
});

export {ContentSearchResultType};
    