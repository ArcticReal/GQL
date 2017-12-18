
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


const DataResourceAttributeType = new GraphQLObjectType({
  name: 'DataResourceAttributeType',
  description: 'Type for DataResourceAttribute in content',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResourceAttribute, args, {loaders}) => loaders.ofbiz.load(`content/dataResources/find?dataResourceId=${dataResourceAttribute.dataResourceId}`)
    },
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {DataResourceAttributeType};
    




const DataResourceAttributeInputType = new GraphQLInputObjectType({
  name: 'DataResourceAttributeInputType',
  description: 'input type for DataResourceAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    dataResourceId: {type: GraphQLString}
  })
});

export {DataResourceAttributeInputType};
    