
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
    




const ElectronicTextInputType = new GraphQLInputObjectType({
  name: 'ElectronicTextInputType',
  description: 'input type for ElectronicText',

  fields: () => ({
    dataResourceId: {type: GraphQLString},
    textData: {type: GraphQLString}
  })
});

export {ElectronicTextInputType};
    