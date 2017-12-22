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

const CommunicationEventOrderResponseType = new GraphQLObjectType({
  name: 'CommunicationEventOrderResponseType',
  description: 'response type for CommunicationEventOrder',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    orderId: {type: GraphQLString}
  })
});

export {CommunicationEventOrderResponseType};
    