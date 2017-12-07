
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {DataResourceType} from '../content/DataResourceType.js';
import {DataResourceTypeAttrType} from '../content/DataResourceTypeAttrType.js';


const DataResourceTypeType = new GraphQLObjectType({
  name: 'DataResourceTypeType',
  description: 'Type for DataResourceType in content',

  fields: () => ({
    parentType: {
      type: DataResourceTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (dataResourceType, args, {loaders}) => loaders.ofbiz.load(`dataResourceTypes/find?dataResourceTypeId=${dataResourceType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    dataResourceTypeId: {type: GraphQLString},
    dataResource: {
      type: new GraphQLList(DataResourceType),
      args : {dataResourceTypeId: {type: GraphQLString}},
      resolve: (dataResourceType, args, {loaders}) => loaders.ofbizArray.load(`dataResources/find?dataResourceTypeId=${dataResourceType.dataResourceTypeId}`)
    },
    dataResourceType: {
      type: new GraphQLList(DataResourceTypeType),
      args : {dataResourceTypeId: {type: GraphQLString}},
      resolve: (dataResourceType, args, {loaders}) => loaders.ofbizArray.load(`dataResourceTypes/find?dataResourceTypeId=${dataResourceType.dataResourceTypeId}`)
    },
    dataResourceTypeAttr: {
      type: new GraphQLList(DataResourceTypeAttrType),
      args : {dataResourceTypeId: {type: GraphQLString}},
      resolve: (dataResourceType, args, {loaders}) => loaders.ofbizArray.load(`dataResourceTypeAttrs/find?dataResourceTypeId=${dataResourceType.dataResourceTypeId}`)
    }
  })
});

export {DataResourceTypeType};
    