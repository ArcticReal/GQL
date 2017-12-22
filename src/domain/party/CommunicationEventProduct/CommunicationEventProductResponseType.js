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

const CommunicationEventProductResponseType = new GraphQLObjectType({
  name: 'CommunicationEventProductResponseType',
  description: 'response type for CommunicationEventProduct',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {CommunicationEventProductResponseType};
    