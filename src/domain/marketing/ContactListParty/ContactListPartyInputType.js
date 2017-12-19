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

const ContactListPartyInputType = new GraphQLInputObjectType({
  name: 'ContactListPartyInputType',
  description: 'input type for ContactListParty',

  fields: () => ({
    contactListId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    preferredContactMechId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ContactListPartyInputType};
    