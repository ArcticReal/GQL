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

const PartyContentInputType = new GraphQLInputObjectType({
  name: 'PartyContentInputType',
  description: 'input type for PartyContent',

  fields: () => ({
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyContentTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyContentInputType};
    