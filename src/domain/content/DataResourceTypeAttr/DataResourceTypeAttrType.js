
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

import {DataResourceTypeType} from '../../content/DataResourceType/DataResourceTypeType.js';


const DataResourceTypeAttrType = new GraphQLObjectType({
  name: 'DataResourceTypeAttrType',
  description: 'Type for DataResourceTypeAttr in content',

  fields: () => ({
    description: {type: GraphQLString},
    dataResourceType: {
      type: DataResourceTypeType,
      args : {dataResourceTypeId: {type: GraphQLString}},
      resolve: (dataResourceTypeAttr, args, {loaders}) => loaders.ofbiz.load(`content/dataResource/dataResourceTypes/find?dataResourceTypeId=${dataResourceTypeAttr.dataResourceTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {DataResourceTypeAttrType};
    