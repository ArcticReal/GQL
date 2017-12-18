
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


const ContentAttributeType = new GraphQLObjectType({
  name: 'ContentAttributeType',
  description: 'Type for ContentAttribute in content',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (contentAttribute, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${contentAttribute.contentId}`)
    },
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {ContentAttributeType};
    




const ContentAttributeInputType = new GraphQLInputObjectType({
  name: 'ContentAttributeInputType',
  description: 'input type for ContentAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    contentId: {type: GraphQLString}
  })
});

export {ContentAttributeInputType};
    