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

const CommunicationEventPurposeResponseType = new GraphQLObjectType({
  name: 'CommunicationEventPurposeResponseType',
  description: 'response type for CommunicationEventPurpose',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    communicationEventPrpTypId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {CommunicationEventPurposeResponseType};
    