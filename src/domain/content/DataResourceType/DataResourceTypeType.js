
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

import {DataResourceType} from '../../content/DataResource/DataResourceType.js';
import {DataResourceTypeAttrType} from '../../content/DataResourceTypeAttr/DataResourceTypeAttrType.js';


const DataResourceTypeType = new GraphQLObjectType({
  name: 'DataResourceTypeType',
  description: 'Type for DataResourceType in content',

  fields: () => ({
    parentType: {
      type: DataResourceTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (dataResourceType, args, {loaders}) => loaders.ofbiz.load(`content/dataResource/dataResourceTypes/find?dataResourceTypeId=${dataResourceType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    dataResourceTypeId: {type: GraphQLString},
    dataResources: {
      type: new GraphQLList(DataResourceType),
      args : {},
      resolve: (dataResourceType, args, {loaders}) => loaders.ofbizArray.load(`content/dataResources/find?dataResourceTypeId=${dataResourceType.dataResourceTypeId}`)
    },
    dataResourceTypes: {
      type: new GraphQLList(DataResourceTypeType),
      args : {},
      resolve: (dataResourceType, args, {loaders}) => loaders.ofbizArray.load(`content/dataResource/dataResourceTypes/find?dataResourceTypeId=${dataResourceType.dataResourceTypeId}`)
    },
    dataResourceTypeAttrs: {
      type: new GraphQLList(DataResourceTypeAttrType),
      args : {},
      resolve: (dataResourceType, args, {loaders}) => loaders.ofbizArray.load(`content/dataResource/dataResourceTypeAttrs/find?dataResourceTypeId=${dataResourceType.dataResourceTypeId}`)
    }
  })
});

export {DataResourceTypeType};
    