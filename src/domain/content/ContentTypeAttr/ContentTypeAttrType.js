
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

import {ContentTypeType} from '../../content/ContentType/ContentTypeType.js';


const ContentTypeAttrType = new GraphQLObjectType({
  name: 'ContentTypeAttrType',
  description: 'Type for ContentTypeAttr in content',

  fields: () => ({
    contentType: {
      type: ContentTypeType,
      args : {contentTypeId: {type: GraphQLString}},
      resolve: (contentTypeAttr, args, {loaders}) => loaders.ofbiz.load(`content/content/contentTypes/find?contentTypeId=${contentTypeAttr.contentTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {ContentTypeAttrType};
    