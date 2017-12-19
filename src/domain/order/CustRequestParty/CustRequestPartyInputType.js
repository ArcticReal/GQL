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

const CustRequestPartyInputType = new GraphQLInputObjectType({
  name: 'CustRequestPartyInputType',
  description: 'input type for CustRequestParty',

  fields: () => ({
    custRequestId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {CustRequestPartyInputType};
    