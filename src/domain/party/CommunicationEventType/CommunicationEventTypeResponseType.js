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

const CommunicationEventTypeResponseType = new GraphQLObjectType({
  name: 'CommunicationEventTypeResponseType',
  description: 'response type for CommunicationEventType',

  fields: () => ({
    communicationEventTypeId: {type: GraphQLString},
    contactMechTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {CommunicationEventTypeResponseType};
    