
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


const ImageDataResourceType = new GraphQLObjectType({
  name: 'ImageDataResourceType',
  description: 'Type for ImageDataResource in content',

  fields: () => ({
    imageData: {type: GraphQLString/*this was a byte Array TODO find a solution*/},
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (imageDataResource, args, {loaders}) => loaders.ofbiz.load(`content/dataResources/find?dataResourceId=${imageDataResource.dataResourceId}`)
    }
  })
});

export {ImageDataResourceType};
    