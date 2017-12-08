
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
    




const AudioDataResourceInputType = new GraphQLInputObjectType({
  name: 'AudioDataResourceInputType',
  description: 'input type for AudioDataResource in content',

  fields: () => ({
    audioData: {type: GraphQLString/*this was a byte Array TODO find a solution*/},
    dataResourceId: {type: GraphQLString}
  })
});

export {AudioDataResourceInputType};
    