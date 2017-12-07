
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContentTypeAttrType} from '../content/ContentTypeAttrType.js';
import {ContentType} from '../content/ContentType.js';


const ContentTypeType = new GraphQLObjectType({
  name: 'ContentTypeType',
  description: 'Type for ContentType in content',

  fields: () => ({
    parentType: {
      type: ContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (contentType, args, {loaders}) => loaders.ofbiz.load(`contentTypes/find?contentTypeId=${contentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    contentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    contentTypeAttr: {
      type: new GraphQLList(ContentTypeAttrType),
      args : {contentTypeId: {type: GraphQLString}},
      resolve: (contentType, args, {loaders}) => loaders.ofbizArray.load(`contentTypeAttrs/find?contentTypeId=${contentType.contentTypeId}`)
    },
    contentType: {
      type: new GraphQLList(ContentTypeType),
      args : {contentTypeId: {type: GraphQLString}},
      resolve: (contentType, args, {loaders}) => loaders.ofbizArray.load(`contentTypes/find?contentTypeId=${contentType.contentTypeId}`)
    },
    content: {
      type: new GraphQLList(ContentType),
      args : {contentTypeId: {type: GraphQLString}},
      resolve: (contentType, args, {loaders}) => loaders.ofbizArray.load(`contents/find?contentTypeId=${contentType.contentTypeId}`)
    }
  })
});

export {ContentTypeType};
    