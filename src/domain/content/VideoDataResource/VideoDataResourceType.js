
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
    