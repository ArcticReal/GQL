
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContentRevisionType} from '../content/ContentRevisionType.js';
import {DataResourceType} from '../content/DataResourceType.js';


const ContentRevisionItemType = new GraphQLObjectType({
  name: 'ContentRevisionItemType',
  description: 'Type for ContentRevisionItem in content',

  fields: () => ({
    oldDataResource: {
      type: DataResourceType,
      args : {oldDataResourceId: {type: GraphQLString}},
      resolve: (contentRevisionItem, args, {loaders}) => loaders.ofbiz.load(`dataResources/find?dataResourceId=${contentRevisionItem.oldDataResourceId}`)
    },
    content: {
      type: ContentRevisionType,
      args : {contentId: {type: GraphQLString}},
      resolve: (contentRevisionItem, args, {loaders}) => loaders.ofbiz.load(`contentRevisions/find?contentId=${contentRevisionItem.contentId}`)
    },
    newDataResource: {
      type: DataResourceType,
      args : {newDataResourceId: {type: GraphQLString}},
      resolve: (contentRevisionItem, args, {loaders}) => loaders.ofbiz.load(`dataResources/find?dataResourceId=${contentRevisionItem.newDataResourceId}`)
    },
    contentRevisionSeqId: {type: GraphQLString},
    itemContentId: {type: GraphQLString}
  })
});

export {ContentRevisionItemType};
    