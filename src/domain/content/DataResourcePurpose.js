
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
import {DataResourceType} from '../content/DataResource.js';


const DataResourcePurposeType = new GraphQLObjectType({
  name: 'DataResourcePurposeType',
  description: 'Type for DataResourcePurpose in content',

  fields: () => ({
    contentPurposeType: {
      type: ContentPurposeTypeType,
      args : {contentPurposeTypeId: {type: GraphQLString}},
      resolve: (dataResourcePurpose, args, {loaders}) => loaders.ofbiz.load(`content/content/contentPurposeTypes/find?contentPurposeTypeId=${dataResourcePurpose.contentPurposeTypeId}`)
    },
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResourcePurpose, args, {loaders}) => loaders.ofbiz.load(`content/dataResources/find?dataResourceId=${dataResourcePurpose.dataResourceId}`)
    }
  })
});

export {DataResourcePurposeType};
    




const DataResourcePurposeInputType = new GraphQLInputObjectType({
  name: 'DataResourcePurposeInputType',
  description: 'input type for DataResourcePurpose in content',

  fields: () => ({
    contentPurposeTypeId: {type: GraphQLString},
    dataResourceId: {type: GraphQLString}
  })
});

export {DataResourcePurposeInputType};
    