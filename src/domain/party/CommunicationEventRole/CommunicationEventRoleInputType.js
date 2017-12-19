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

const CommunicationEventRoleInputType = new GraphQLInputObjectType({
  name: 'CommunicationEventRoleInputType',
  description: 'input type for CommunicationEventRole',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {CommunicationEventRoleInputType};
    