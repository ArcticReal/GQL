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

const ContactListCommStatusInputType = new GraphQLInputObjectType({
  name: 'ContactListCommStatusInputType',
  description: 'input type for ContactListCommStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    communicationEventId: {type: GraphQLString},
    contactListId: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    messageId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {ContactListCommStatusInputType};
    