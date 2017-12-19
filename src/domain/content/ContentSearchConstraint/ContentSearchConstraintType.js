
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

import {ContentSearchResultType} from '../../content/ContentSearchResult/ContentSearchResultType.js';


const ContentSearchConstraintType = new GraphQLObjectType({
  name: 'ContentSearchConstraintType',
  description: 'Type for ContentSearchConstraint in content',

  fields: () => ({
    isAnd: {type: GraphQLBoolean},
    removeStems: {type: GraphQLBoolean},
    lowValue: {type: GraphQLString},
    constraintSeqId: {type: GraphQLString},
    infoString: {type: GraphQLString},
    contentSearchResult: {
      type: ContentSearchResultType,
      args : {contentSearchResultId: {type: GraphQLString}},
      resolve: (contentSearchConstraint, args, {loaders}) => loaders.ofbiz.load(`content/content/contentSearchResults/find?contentSearchResultId=${contentSearchConstraint.contentSearchResultId}`)
    },
    anyPrefix: {type: GraphQLBoolean},
    highValue: {type: GraphQLString},
    includeSubCategories: {type: GraphQLBoolean},
    anySuffix: {type: GraphQLBoolean},
    constraintName: {type: GraphQLString}
  })
});

export {ContentSearchConstraintType};
    