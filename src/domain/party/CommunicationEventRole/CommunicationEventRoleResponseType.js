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

const CommunicationEventRoleResponseType = new GraphQLObjectType({
  name: 'CommunicationEventRoleResponseType',
  description: 'response type for CommunicationEventRole',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {CommunicationEventRoleResponseType};
    