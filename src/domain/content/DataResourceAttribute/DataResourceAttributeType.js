
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
    