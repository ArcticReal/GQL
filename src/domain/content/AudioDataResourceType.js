
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


const AudioDataResourceType = new GraphQLObjectType({
  name: 'AudioDataResourceType',
  description: 'Type for AudioDataResource in content',

  fields: () => ({
    audioData: {type: GraphQLString/*this was a byte Array TODO find a solution*/},
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (audioDataResource, args, {loaders}) => loaders.ofbiz.load(`dataResources/find?dataResourceId=${audioDataResource.dataResourceId}`)
    }
  })
});

export {AudioDataResourceType};
    