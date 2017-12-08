
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

import {ContentTypeAttrType} from '../content/ContentTypeAttr.js';
import {ContentType} from '../content/Content.js';


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
    contentTypeAttrs: {
      type: new GraphQLList(ContentTypeAttrType),
      args : {contentTypeId: {type: GraphQLString}},
      resolve: (contentType, args, {loaders}) => loaders.ofbizArray.load(`contentTypeAttrs/find?contentTypeId=${contentType.contentTypeId}`)
    },
    contentTypes: {
      type: new GraphQLList(ContentTypeType),
      args : {contentTypeId: {type: GraphQLString}},
      resolve: (contentType, args, {loaders}) => loaders.ofbizArray.load(`contentTypes/find?contentTypeId=${contentType.contentTypeId}`)
    },
    contents: {
      type: new GraphQLList(ContentType),
      args : {contentTypeId: {type: GraphQLString}},
      resolve: (contentType, args, {loaders}) => loaders.ofbizArray.load(`contents/find?contentTypeId=${contentType.contentTypeId}`)
    }
  })
});

export {ContentTypeType};
    




const ContentTypeInputType = new GraphQLInputObjectType({
  name: 'ContentTypeInputType',
  description: 'input type for ContentType in content',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    contentTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContentTypeInputType};
    