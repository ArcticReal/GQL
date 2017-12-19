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

const ContactListPartyStatusInputType = new GraphQLInputObjectType({
  name: 'ContactListPartyStatusInputType',
  description: 'input type for ContactListPartyStatus',

  fields: () => ({
    contactListId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    optInVerifyCode: {type: GraphQLString},
    partyId: {type: GraphQLString},
    setByUserLoginId: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {ContactListPartyStatusInputType};
    