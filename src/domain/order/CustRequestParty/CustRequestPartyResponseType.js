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

const CustRequestPartyResponseType = new GraphQLObjectType({
  name: 'CustRequestPartyResponseType',
  description: 'response type for CustRequestParty',

  fields: () => ({
    custRequestId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {CustRequestPartyResponseType};
    