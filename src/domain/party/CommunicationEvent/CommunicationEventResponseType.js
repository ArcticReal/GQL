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

const CommunicationEventResponseType = new GraphQLObjectType({
  name: 'CommunicationEventResponseType',
  description: 'response type for CommunicationEvent',

  fields: () => ({
    bccString: {type: GraphQLString},
    ccString: {type: GraphQLString},
    communicationEventId: {type: GraphQLString},
    communicationEventTypeId: {type: GraphQLString},
    contactListId: {type: GraphQLString},
    contactMechIdFrom: {type: GraphQLString},
    contactMechIdTo: {type: GraphQLString},
    contactMechTypeId: {type: GraphQLString},
    content: {type: GraphQLString},
    contentMimeTypeId: {type: GraphQLString},
    datetimeEnded: {type: GraphQLString},
    datetimeStarted: {type: GraphQLString},
    entryDate: {type: GraphQLString},
    fromString: {type: GraphQLString},
    headerString: {type: GraphQLString},
    messageId: {type: GraphQLString},
    note: {type: GraphQLString},
    origCommEventId: {type: GraphQLString},
    parentCommEventId: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    reasonEnumId: {type: GraphQLString},
    roleTypeIdFrom: {type: GraphQLString},
    roleTypeIdTo: {type: GraphQLString},
    statusId: {type: GraphQLString},
    subject: {type: GraphQLString},
    toString: {type: GraphQLString}
  })
});

export {CommunicationEventResponseType};
    