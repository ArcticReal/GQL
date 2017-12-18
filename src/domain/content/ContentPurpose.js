
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

import {ContentPurposeTypeType} from '../content/ContentPurposeType.js';
import {ContentType} from '../content/Content.js';


const ContentPurposeType = new GraphQLObjectType({
  name: 'ContentPurposeType',
  description: 'Type for ContentPurpose in content',

  fields: () => ({
    contentPurposeType: {
      type: ContentPurposeTypeType,
      args : {contentPurposeTypeId: {type: GraphQLString}},
      resolve: (contentPurpose, args, {loaders}) => loaders.ofbiz.load(`content/content/contentPurposeTypes/find?contentPurposeTypeId=${contentPurpose.contentPurposeTypeId}`)
    },
    sequenceNum: {type: GraphQLInt},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (contentPurpose, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${contentPurpose.contentId}`)
    }
  })
});

export {ContentPurposeType};
    




const ContentPurposeInputType = new GraphQLInputObjectType({
  name: 'ContentPurposeInputType',
  description: 'input type for ContentPurpose',

  fields: () => ({
    contentId: {type: GraphQLString},
    contentPurposeTypeId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt}
  })
});

export {ContentPurposeInputType};
    