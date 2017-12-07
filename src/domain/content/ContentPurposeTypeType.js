
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContentPurposeOperationType} from '../content/ContentPurposeOperationType.js';
import {ContentPurposeType} from '../content/ContentPurposeType.js';
import {DataResourcePurposeType} from '../content/DataResourcePurposeType.js';


const ContentPurposeTypeType = new GraphQLObjectType({
  name: 'ContentPurposeTypeType',
  description: 'Type for ContentPurposeType in content',

  fields: () => ({
    contentPurposeTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    contentPurpose: {
      type: new GraphQLList(ContentPurposeType),
      args : {contentPurposeTypeId: {type: GraphQLString}},
      resolve: (contentPurposeType, args, {loaders}) => loaders.ofbizArray.load(`contentPurposes/find?contentPurposeTypeId=${contentPurposeType.contentPurposeTypeId}`)
    },
    contentPurposeOperation: {
      type: new GraphQLList(ContentPurposeOperationType),
      args : {contentPurposeTypeId: {type: GraphQLString}},
      resolve: (contentPurposeType, args, {loaders}) => loaders.ofbizArray.load(`contentPurposeOperations/find?contentPurposeTypeId=${contentPurposeType.contentPurposeTypeId}`)
    },
    dataResourcePurpose: {
      type: new GraphQLList(DataResourcePurposeType),
      args : {contentPurposeTypeId: {type: GraphQLString}},
      resolve: (contentPurposeType, args, {loaders}) => loaders.ofbizArray.load(`dataResourcePurposes/find?contentPurposeTypeId=${contentPurposeType.contentPurposeTypeId}`)
    }
  })
});

export {ContentPurposeTypeType};
    