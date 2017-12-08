
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

import {DataResourceType} from '../content/DataResource.js';
import {DataResourceTypeAttrType} from '../content/DataResourceTypeAttr.js';


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
    dataResources: {
      type: new GraphQLList(DataResourceType),
      args : {dataResourceTypeId: {type: GraphQLString}},
      resolve: (dataResourceType, args, {loaders}) => loaders.ofbizArray.load(`dataResources/find?dataResourceTypeId=${dataResourceType.dataResourceTypeId}`)
    },
    dataResourceTypes: {
      type: new GraphQLList(DataResourceTypeType),
      args : {dataResourceTypeId: {type: GraphQLString}},
      resolve: (dataResourceType, args, {loaders}) => loaders.ofbizArray.load(`dataResourceTypes/find?dataResourceTypeId=${dataResourceType.dataResourceTypeId}`)
    },
    dataResourceTypeAttrs: {
      type: new GraphQLList(DataResourceTypeAttrType),
      args : {dataResourceTypeId: {type: GraphQLString}},
      resolve: (dataResourceType, args, {loaders}) => loaders.ofbizArray.load(`dataResourceTypeAttrs/find?dataResourceTypeId=${dataResourceType.dataResourceTypeId}`)
    }
  })
});

export {DataResourceTypeType};
    




const DataResourceTypeInputType = new GraphQLInputObjectType({
  name: 'DataResourceTypeInputType',
  description: 'input type for DataResourceType in content',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    dataResourceTypeId: {type: GraphQLString}
  })
});

export {DataResourceTypeInputType};
    