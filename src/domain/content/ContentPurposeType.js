
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContentPurposeTypeType} from '../content/ContentPurposeTypeType.js';
import {ContentType} from '../content/ContentType.js';


const ContentPurposeType = new GraphQLObjectType({
  name: 'ContentPurposeType',
  description: 'Type for ContentPurpose in content',

  fields: () => ({
    contentPurposeType: {
      type: ContentPurposeTypeType,
      args : {contentPurposeTypeId: {type: GraphQLString}},
      resolve: (contentPurpose, args, {loaders}) => loaders.ofbiz.load(`contentPurposeTypes/find?contentPurposeTypeId=${contentPurpose.contentPurposeTypeId}`)
    },
    sequenceNum: {type: GraphQLInt},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (contentPurpose, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${contentPurpose.contentId}`)
    }
  })
});

export {ContentPurposeType};
    