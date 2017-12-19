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

const VideoDataResourceInputType = new GraphQLInputObjectType({
  name: 'VideoDataResourceInputType',
  description: 'input type for VideoDataResource',

  fields: () => ({
    dataResourceId: {type: GraphQLString},
    videoData: {type: new GraphQLList(GraphQLString)}
  })
});

export {VideoDataResourceInputType};
    