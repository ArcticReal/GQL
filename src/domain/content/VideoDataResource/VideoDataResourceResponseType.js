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

const VideoDataResourceResponseType = new GraphQLObjectType({
  name: 'VideoDataResourceResponseType',
  description: 'response type for VideoDataResource',

  fields: () => ({
    dataResourceId: {type: GraphQLString},
    videoData: {type: new GraphQLList(GraphQLString)}
  })
});

export {VideoDataResourceResponseType};
    