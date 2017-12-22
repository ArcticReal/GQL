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

const AudioDataResourceResponseType = new GraphQLObjectType({
  name: 'AudioDataResourceResponseType',
  description: 'response type for AudioDataResource',

  fields: () => ({
    audioData: {type: new GraphQLList(GraphQLString)},
    dataResourceId: {type: GraphQLString}
  })
});

export {AudioDataResourceResponseType};
    