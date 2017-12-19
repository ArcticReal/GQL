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

const AudioDataResourceInputType = new GraphQLInputObjectType({
  name: 'AudioDataResourceInputType',
  description: 'input type for AudioDataResource',

  fields: () => ({
    audioData: {type: new GraphQLList(GraphQLString)},
    dataResourceId: {type: GraphQLString}
  })
});

export {AudioDataResourceInputType};
    