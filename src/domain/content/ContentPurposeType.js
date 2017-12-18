
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

import {ContentPurposeOperationType} from '../content/ContentPurposeOperation.js';
import {ContentPurposeType} from '../content/ContentPurpose.js';
import {DataResourcePurposeType} from '../content/DataResourcePurpose.js';


const ContentPurposeTypeType = new GraphQLObjectType({
  name: 'ContentPurposeTypeType',
  description: 'Type for ContentPurposeType in content',

  fields: () => ({
    contentPurposeTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    contentPurposes: {
      type: new GraphQLList(ContentPurposeType),
      args : {},
      resolve: (contentPurposeType, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentPurposes/find?contentPurposeTypeId=${contentPurposeType.contentPurposeTypeId}`)
    },
    contentPurposeOperations: {
      type: new GraphQLList(ContentPurposeOperationType),
      args : {},
      resolve: (contentPurposeType, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentPurposeOperations/find?contentPurposeTypeId=${contentPurposeType.contentPurposeTypeId}`)
    },
    dataResourcePurposes: {
      type: new GraphQLList(DataResourcePurposeType),
      args : {},
      resolve: (contentPurposeType, args, {loaders}) => loaders.ofbizArray.load(`content/dataResource/dataResourcePurposes/find?contentPurposeTypeId=${contentPurposeType.contentPurposeTypeId}`)
    }
  })
});

export {ContentPurposeTypeType};
    




const ContentPurposeTypeInputType = new GraphQLInputObjectType({
  name: 'ContentPurposeTypeInputType',
  description: 'input type for ContentPurposeType',

  fields: () => ({
    contentPurposeTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContentPurposeTypeInputType};
    