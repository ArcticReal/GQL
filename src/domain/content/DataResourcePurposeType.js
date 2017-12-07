
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
import {DataResourceType} from '../content/DataResourceType.js';


const DataResourcePurposeType = new GraphQLObjectType({
  name: 'DataResourcePurposeType',
  description: 'Type for DataResourcePurpose in content',

  fields: () => ({
    contentPurposeType: {
      type: ContentPurposeTypeType,
      args : {contentPurposeTypeId: {type: GraphQLString}},
      resolve: (dataResourcePurpose, args, {loaders}) => loaders.ofbiz.load(`contentPurposeTypes/find?contentPurposeTypeId=${dataResourcePurpose.contentPurposeTypeId}`)
    },
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResourcePurpose, args, {loaders}) => loaders.ofbiz.load(`dataResources/find?dataResourceId=${dataResourcePurpose.dataResourceId}`)
    }
  })
});

export {DataResourcePurposeType};
    