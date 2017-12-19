
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


const ElectronicTextType = new GraphQLObjectType({
  name: 'ElectronicTextType',
  description: 'Type for ElectronicText in content',

  fields: () => ({
    textData: {type: GraphQLString},
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (electronicText, args, {loaders}) => loaders.ofbiz.load(`content/dataResources/find?dataResourceId=${electronicText.dataResourceId}`)
    }
  })
});

export {ElectronicTextType};
    