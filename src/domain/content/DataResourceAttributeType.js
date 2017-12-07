
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


const DataResourceAttributeType = new GraphQLObjectType({
  name: 'DataResourceAttributeType',
  description: 'Type for DataResourceAttribute in content',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResourceAttribute, args, {loaders}) => loaders.ofbiz.load(`dataResources/find?dataResourceId=${dataResourceAttribute.dataResourceId}`)
    },
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {DataResourceAttributeType};
    