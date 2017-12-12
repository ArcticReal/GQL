
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

import {ContentType} from '../content/Content.js';


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
    




const ContentKeywordInputType = new GraphQLInputObjectType({
  name: 'ContentKeywordInputType',
  description: 'input type for ContentKeyword in content',

  fields: () => ({
    relevancyWeight: {type: GraphQLInt},
    helpContentId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    keyword: {type: GraphQLString}
  })
});

export {ContentKeywordInputType};
    