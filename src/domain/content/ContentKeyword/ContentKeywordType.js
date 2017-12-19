
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

import {ContentType} from '../../content/Content/ContentType.js';


const ContentKeywordType = new GraphQLObjectType({
  name: 'ContentKeywordType',
  description: 'Type for ContentKeyword in content',

  fields: () => ({
    relevancyWeight: {type: GraphQLInt},
    helpContent: {
      type: ContentType,
      args : {helpContentId: {type: GraphQLString}},
      resolve: (contentKeyword, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${contentKeyword.helpContentId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (contentKeyword, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${contentKeyword.contentId}`)
    },
    keyword: {type: GraphQLString}
  })
});

export {ContentKeywordType};
    