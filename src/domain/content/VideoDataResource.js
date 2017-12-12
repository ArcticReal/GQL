
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


const VideoDataResourceType = new GraphQLObjectType({
  name: 'VideoDataResourceType',
  description: 'Type for VideoDataResource in content',

  fields: () => ({
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (videoDataResource, args, {loaders}) => loaders.ofbiz.load(`content/dataResources/find?dataResourceId=${videoDataResource.dataResourceId}`)
    },
    videoData: {type: GraphQLString/*this was a byte Array TODO find a solution*/}
  })
});

export {VideoDataResourceType};
    




const VideoDataResourceInputType = new GraphQLInputObjectType({
  name: 'VideoDataResourceInputType',
  description: 'input type for VideoDataResource in content',

  fields: () => ({
    dataResourceId: {type: GraphQLString},
    videoData: {type: GraphQLString/*this was a byte Array TODO find a solution*/}
  })
});

export {VideoDataResourceInputType};
    